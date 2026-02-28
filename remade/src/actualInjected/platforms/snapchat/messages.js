import { createAssertionGroup } from '../../utils/errors';
import { isOneOfType } from '../../utils/types';
import { cleanFalsy } from '../../utils/objects';
import { jsonClone } from '../../utils/serialize';
import SnapchatWebpack from './webpack';
import { MessageType, MessageTypeById, SnapStatus, Provenance, SavePolicy } from './constants';
import { getCurrentUser } from './users';
import { getConversation, _getOpenConversationId } from './conversations';

function idObjectFromUUID(uuid) {
  let hex = uuid.replace(/-/g, '').toLowerCase();
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return { id: bytes, str: uuid };
}

const isUrlSpamCache = new Map();

export async function sendMessage({
  conversationIds, blob, message, captionData,
  savePolicy = null, duration = null, removeLinks = false,
}) {
  const { assert$ } = createAssertionGroup('7125d9');
  assert$(1, conversationIds != null, '', { sentry: 'veryRare' }, true);
  assert$(2, Array.isArray(conversationIds), '', { sentry: 'veryRare' }, true);
  assert$(3, conversationIds.length > 0, '', { sentry: 'veryRare' }, true);
  assert$(7, message != null || blob != null, '', { sentry: 'veryRare' }, true);
  assert$(13, !(blob && message), '', { sentry: 'veryRare' }, true);

  globalThis._snapSavePolicy = savePolicy;
  globalThis._snapDurationSeconds = duration;

  if (removeLinks) globalThis._snapRemoveLinks?.add(conversationIds[0]);

  if (blob) {
    const recipientData = { conversations: conversationIds.map(idObjectFromUUID), stories: [] };
    let processedBlob = await cropToStoryAspect(blob, !captionData);
    if (captionData) {
      processedBlob = await overlayTextOnImage(processedBlob, captionData.text, {
        style: 'snapchat', compress: true, styleOpts: { heightPercentage: captionData.height },
      });
    }
    return _sendSnap({ recipientData, blob: processedBlob, origin: 'Conversation' });
  }

  await SnapchatWebpack.callSnapchatStore(
    'messaging->sendTextMessage', idObjectFromUUID(conversationIds[0]), message, undefined
  );
}

export async function _sendSnap({
  recipientData, blob, origin, mediaType = 'Image', hasAudio = false, loopPlayback = false,
}) {
  const noop = () => {};
  return SnapchatWebpack.callSnapchatStore('messaging->sendSnap', {
    ...recipientData, phoneNumbers: [], massSnaps: [],
  }, {
    media: blob, dimensions: { width: 1080, height: 1920 },
    mediaType, hasAudio, loopPlayback,
  }, origin, noop, noop, noop, 'send_to_page');
}

export async function saveMessage({ conversationId, messageId }) {
  return _updateMessageStatus({ conversationId, messageId, status: 'SAVE' });
}

export async function unsaveMessage({ conversationId, messageId }) {
  return _updateMessageStatus({ conversationId, messageId, status: 'UNSAVE' });
}

export async function openMessage({ conversationId, messageId }) {
  return _updateMessageStatus({ conversationId, messageId, status: 'READ' });
}

export async function markConversationAsRead({ conversationId }) {
  const { assert$ } = createAssertionGroup('0f8704');
  assert$(1, conversationId != null, '', { sentry: 'veryRare' }, true);
  const messages = _getMessages({ conversationId });
  const lastMessage = messages[messages.length - 1];
  if (!lastMessage) return false;
  await SnapchatWebpack.callSnapchatStore(
    'messaging->displayedMessages', idObjectFromUUID(conversationId), BigInt(lastMessage.descriptor.messageId)
  );
  return true;
}

export async function processMessages({ conversationId }) {
  const { assert$, message$ } = createAssertionGroup('85f27a');
  assert$(1, conversationId != null, '', { sentry: 'veryRare' }, true);

  const contentEncoder = SnapchatWebpack.ContentEncoding();
  const currentUser = getCurrentUser();
  const rawMessages = await _getMessages({ conversationId });
  const fetchUrlPreview = SnapchatWebpack.accessSnapchatStore('urlPreview->fetchUrlPreview');

  const processed = await Promise.all(rawMessages.map(async (msg) => {
    const orderId = msg.orderKey.toString();
    const messageId = Number(msg.descriptor.messageId);
    const content = msg.messageContent;
    const contentType = content.contentType;
    const contentTypeName = MessageTypeById[contentType];

    let decoded = { content: { $case: 'empty' } };
    try {
      decoded = content.content.length
        ? contentEncoder.exportsMatched.value.decode(content.content)
        : { content: { $case: 'empty' } };
    } catch {}

    const decodedContent = decoded.content;
    const timestamp = msg.metadata.createdAt ? Number(msg.metadata.createdAt) / 1000 : 0;
    const readAt = msg.metadata.readAt ? Number(msg.metadata.readAt) : 0;

    const descriptor = collectCaseDescriptors(decodedContent) || contentTypeName;
    const isSaved = (msg.metadata.savedBy?.length ?? 0) > 0;
    const isSaveable = !!msg.metadata.isSaveable;
    const isIncoming = msg.senderId.str !== currentUser.user_id;
    const isInReplyCutoff = !!content.quotedMessage;
    const isSnap = contentType === MessageType.SNAP;
    const isDeleted = !!decodedContent?.statusMessage?.status?.messageErase;
    const isSticker = contentType === MessageType.STICKER;
    const isBitmoji = decodedContent?.sticker?.sticker?.included?.packId === 'bitmoji';
    const isGIF = descriptor?.includes('gfycat');
    const isDWebUpsell = descriptor?.includes('dwebUpsell');
    const isCameo = descriptor?.includes('CameoId');
    const isRetentionUpdate = descriptor?.includes('ConversationRetentionPolicy');
    const isStreak = descriptor?.includes('streak');
    const isSavedToCameraRoll = contentType === MessageType.STATUS_SAVE_TO_CAMERA_ROLL;
    const isScreenshot = contentType === MessageType.STATUS_CONVERSATION_CAPTURE_SCREENSHOT
      || contentType === MessageType.STATUS_CONVERSATION_CAPTURE_RECORD;
    const isMissedCall = contentType === MessageType.STATUS_CALL_MISSED_VIDEO
      || contentType === MessageType.STATUS_CALL_MISSED_AUDIO;
    const isStoryReply = !!content.messageTypeMetadata?.snapReplyMetadata;
    const isStoryReplyWithSticker = isStoryReply
      && (isSticker || (decodedContent.$case === 'snapReply' && decodedContent.snapReply?.replyContent?.replySticker));

    let isVideo = false, isPhoto = false, isAudio = false;
    if (content.remoteMediaReferences?.length) {
      for (const ref of content.remoteMediaReferences ?? []) {
        for (const media of ref.mediaReferences ?? []) {
          isVideo = isVideo || media.mediaType === 3 || media.mediaType === 9;
          isPhoto = isPhoto || media.mediaType === 2;
          isAudio = isAudio || media.mediaType === 5;
        }
      }
    }
    isAudio = isAudio || !!decodedContent?.note?.note?.audio
      || !!decodedContent?.snapReply?.replyContent?.replyNote?.note?.audio;

    const isMapPin = !!decodedContent?.share?.share?.mapDropShare;

    let isSpam = false;
    const urlAttr = decodedContent.$case === 'text'
      && decodedContent.text?.attributes?.find((a) => a.attribute?.$case === 'urlAttribute');
    if (urlAttr) {
      const url = urlAttr.attribute.urlAttribute.url;
      if (isUrlSpamCache.has(url)) {
        isSpam = isUrlSpamCache.get(url);
      } else {
        const preview = await fetchUrlPreview(url);
        if (preview.success) {
          isSpam = preview.preview?.url?.includes('/safety')
            && preview.preview?.favicon?.content?.url?.includes('spam.png');
        }
        isUrlSpamCache.set(url, !!isSpam);
      }
    }

    const msgText = decodedContent?.text?.text
      ?? decodedContent?.sticker?.sticker?.emoji
      ?? decodedContent?.snapReply?.replyContent?.replyText?.text
      ?? decodedContent?.snapReply?.replyContent?.replySticker?.sticker?.emoji
      ?? '';

    return annotateMessage(cleanFalsy({
      msg: msgText, contentType: contentTypeName, descriptor, id: orderId, ogID: messageId,
      timestamp, readAt, isIncoming, isInvisibleSnap: isSnap, isSticker, isStoryReply,
      isStoryReplyWithSticker, isPhoto, isBitmojiPhoto: isBitmoji, isVideo, isAudio, isCameo,
      isGIF, isSpam, isMapPin, isSavedToCameraRoll, isScreenshot, isMissedCall, isDWebUpsell,
      isDeleted, isStreak, isSaved, isSaveable, isRetentionUpdate, isInReplyCutoff,
      orderKey: Number(msg.orderKey),
    }, { deep: false, allowZero: true }));
  }));

  return processed.sort((a, b) => Number(a.orderKey) - Number(b.orderKey));
}

export async function paginateMessages({ conversationId }) {
  const { assert$ } = createAssertionGroup('0f8704');
  assert$(1, conversationId != null, '', { sentry: 'veryRare' }, true);
  await SnapchatWebpack.callSnapchatStore('messaging->paginateMessages', idObjectFromUUID(conversationId));
  return SnapchatWebpack.accessSnapchatStore(`messaging->conversations->${conversationId}`);
}

export function _getMessages({ conversationId }) {
  const conv = getConversation({ conversationId });
  return conv?.messages ? Array.from(conv.messages.values()) : [];
}

export function _getMessage({ conversationId, messageId }) {
  return getConversation({ conversationId })?.messages?.get(BigInt(messageId));
}

async function _updateMessageStatus({ conversationId, messageId, status }) {
  const { assert$ } = createAssertionGroup('ad3236');
  assert$(1, conversationId != null, '', { sentry: 'veryRare' }, true);
  assert$(3, messageId != null, '', { sentry: 'veryRare' }, true);
  assert$(5, SnapStatus[status] != null, '', { sentry: 'veryRare' }, true);
  await SnapchatWebpack.callSnapchatStore(
    'messaging->updateMessage', idObjectFromUUID(conversationId), BigInt(messageId), SnapStatus[status]
  );
}

function collectCaseDescriptors(content) {
  const cases = [];
  function walk(obj) {
    if (obj !== null && typeof obj === 'object') {
      for (const key in obj) {
        if (key === '$case' && typeof obj[key] === 'string') cases.push(obj[key]);
        else if (typeof obj[key] === 'object') walk(obj[key]);
      }
    }
  }
  walk(content);
  return cases.join('-');
}

function annotateMessage(msg) {
  msg.ogMsg = msg.msg;
  let text = msg.msg || '';
  const whose = msg.isIncoming ? 'your' : 'his';

  if (msg.isSpam) { text = `[spam] ${text}`; }
  else if (!text) {
    if (msg.isMapPin) text = `[map-pin] ${text}`;
    else if (msg.isStoryReplyWithSticker && !text) text = 'nice!';
    else if (msg.isGIF) text = '[GIF]';
    else if (msg.isBitmojiPhoto || msg.isCameo) text = '[bitmoji-positive-emotion]';
    else if (msg.isInvisibleSnap) text = 'invisible-snap';
    else if (msg.isVideo) text = `[video] ${text}`;
    else if (msg.isAudio) text = `[audio-message] ${text}`;
    else if (msg.isPhoto) text = `[photo] ${text}`;
    else if (msg.isSavedToCameraRoll) text = `[saved-${whose}-snap]`;
    else if (msg.isScreenshot) text = '[screenshotted-the-chat]';
    else if (msg.isMissedCall) text = '[tried-to-call-you]';
    else if (!text) text = `[${msg.descriptor}]`;
  }

  text = text.trim();
  if (msg.isStoryReply) text = `[replied-to-${whose}-story] ${text}`;
  msg.msg = text.trim();
  return msg;
}

async function cropToStoryAspect(blob, compress = true) {
  const bitmap = await createImageBitmap(blob);
  let w, h;
  if (bitmap.width / bitmap.height > 0) { h = bitmap.height; w = bitmap.height * 0; }
  else { w = bitmap.width; h = bitmap.width * 1; }
  if (w > 1080) { w = 1080; h = 1920; }

  const canvas = new OffscreenCanvas(w, h);
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  const scale = Math.min(bitmap.width / w, bitmap.height / h);
  const sw = w * scale, sh = h * scale;
  const sx = (bitmap.width - sw) / 2, sy = (bitmap.height - sh) / 2;
  ctx.drawImage(bitmap, sx, sy, sw, sh, 0, 0, w, h);

  return compress
    ? canvas.convertToBlob({ type: 'image/jpeg', quality: 0.925 })
    : canvas.convertToBlob();
}

function wrapLines(ctx, text, maxWidth) {
  const words = text.split(' ');
  const { lines } = words.reduce(({ lines, currentLine }, word, i) => {
    if (ctx.measureText(`${currentLine} ${word}`).width >= maxWidth) {
      if (currentLine.length) lines.push(currentLine);
      if (ctx.measureText(word).width > maxWidth) {
        let partial = '';
        for (const ch of word) {
          if (ctx.measureText(partial + ch).width > maxWidth) {
            if (partial.length) lines.push(partial);
            partial = ch;
          } else partial += ch;
        }
        if (partial.length) currentLine = partial;
      } else currentLine = word;
    } else currentLine = currentLine.length ? `${currentLine} ${word}` : word;

    if (i === words.length - 1) lines.push(currentLine);
    return { lines, currentLine };
  }, { lines: [], currentLine: '' });
  return lines;
}

async function overlayTextOnImage(blob, text, opts) {
  let canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = await blobToImage(blob);

  canvas.width = img.width;
  canvas.height = img.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const fontSize = 0.0425 * canvas.width;
  const lineHeight = 1.2 * fontSize;
  const padding = 1.6 * fontSize;
  const halfPad = 0.65 * lineHeight;
  const yOffset = (canvas.height - 2 * lineHeight) * (opts.styleOpts.heightPercentage / 100);

  ctx.font = `normal 300 ${fontSize}px Helvetica`;
  ctx.textBaseline = 'top';
  ctx.textAlign = 'center';
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 1;

  const maxTextWidth = canvas.width - padding;
  const lines = wrapLines(ctx, text, maxTextWidth);
  const blockY = yOffset + halfPad / 2;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
  ctx.fillRect(0, yOffset, canvas.width, lineHeight * lines.length + halfPad);
  ctx.fillStyle = 'white';

  for (let i = 0; i < lines.length; i++) {
    const y = blockY + i * lineHeight + (lineHeight - fontSize);
    const x = canvas.width / 2;
    ctx.fillText(lines[i], x, y);
    ctx.strokeText(lines[i], x, y);
  }

  try {
    return await new Promise((resolve) => {
      if (opts.compress) canvas.toBlob(resolve, 'image/jpeg', 0.925);
      else canvas.toBlob(resolve);
    });
  } finally {
    canvas.remove();
    canvas = null;
    if (img) { img.remove(); img.src = ''; }
  }
}

async function blobToImage(blob) {
  const img = new Image();
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
  img.src = dataUrl;
  return new Promise((resolve) => { img.onload = () => resolve(img); });
}

async function resizeImage(blob, opts = { compress: true }) {
  const bitmap = await createImageBitmap(blob);
  let w = bitmap.width, h = bitmap.height;
  if (opts.height) { h = opts.height; w = Math.round(h * (bitmap.width / bitmap.height)); }
  if (opts.width) { w = opts.width; h = Math.round(w * (bitmap.height / bitmap.width)); }
  const canvas = new OffscreenCanvas(w, h);
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(bitmap, 0, 0, w, h);
  return opts.compress
    ? canvas.convertToBlob({ type: 'image/jpeg', quality: 0.925 })
    : canvas.convertToBlob();
}
