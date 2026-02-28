import { createAssertionGroup } from '../../utils/errors';
import { isOneOfType } from '../../utils/types';
import WebpackBase from '../../webpack/base';
import SnapchatWebpack from './webpack';
import { getCurrentUser } from './users';
import { _sendSnap } from './messages';

function idObjectFromUUID(uuid) {
  let hex = uuid.replace(/-/g, '').toLowerCase();
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return { id: bytes, str: uuid };
}

const MY_STORY_TYPE = 2;

export async function viewStory({ userId }) {
  const { assert$, message$ } = createAssertionGroup('a0468c');
  assert$(1, userId != null, '', { sentry: 'veryRare' }, true);
  assert$(2, typeof userId === 'string', '', { sentry: 'veryRare' }, true);

  const batchFnRegex = /(async\s+[\w$]+\s*=>\s*new\s+Promise\s*\(\s*\([\w$]+\s*,\s*[\w$]+\)\s*=>\s*\{\s*[\w$]+\s*\.\s*push\s*\(\s*[\w$]+\s*\),?)/g;

  const storiesModule = WebpackBase.findModule({
    key: 'stories-batch',
    assert: message$(1, '', { sentry: 'rare' }, true),
    includes: ['read_receipts_batch_size'],
  });

  const exportValues = Object.values(storiesModule.exports);
  const currentUserId = getCurrentUser().user_id;
  const syncWatchState = SnapchatWebpack.accessSnapchatStore('friendStories->syncWatchState');

  const batchFn = exportValues.find((fn) => fn != null && batchFnRegex.test(fn.toString()));
  const friendLinkFn = exportValues.find((fn) => fn != null && fn.toString().includes('friendLinkState'));

  assert$(3, batchFn != null, '', { sentry: 'rare' }, true);
  assert$(4, friendLinkFn != null, '', { sentry: 'rare' }, true);

  const userIdObj = idObjectFromUUID(userId);
  const storyItems = await _listStories({ userId });

  if (!storyItems.length) return 'No stories found';

  const viewData = friendLinkFn(
    idObjectFromUUID(currentUserId),
    storyItems[0].snaps.map((snap, i) => ({
      snapId: snap.itemMetadata.snapId,
      ownerUserId: userIdObj,
      shareCount: 0,
      viewTimeMs: Date.now() + 1000 * i,
      snapExpirationTimeMs: Number(snap.itemMetadata.expirationTimestampMs),
      snapCreationTimeMs: Number(snap.itemMetadata.creationTimestampMs),
      wasRewatched: false,
    }))
  );

  const result = await batchFn(...viewData);
  await syncWatchState();
  return result;
}

export async function postStory({ blob, captionData }) {
  const { assert$ } = createAssertionGroup('741369');
  assert$(1, blob != null, '', { sentry: 'veryRare' }, true);
  assert$(3, blob instanceof Blob, '', { sentry: 'veryRare' }, true);

  const recipientData = {
    conversations: [],
    stories: [{
      storyData: new Uint8Array([10, 0, 58, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
      storyId: { id: new Uint8Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) },
      storyType: MY_STORY_TYPE,
    }],
  };

  let processedBlob = await cropToStoryAspect(blob, !captionData);
  if (captionData) {
    processedBlob = await overlayText(processedBlob, captionData.text, {
      style: 'snapchat', compress: true,
      styleOpts: { heightPercentage: captionData.height },
    });
  }

  return _sendSnap({ recipientData, blob: processedBlob, origin: 'LandingPage' });
}

function _listStories({ userId, viewed = false }) {
  const { assert$ } = createAssertionGroup('549578');
  assert$(2, !userId || typeof userId === 'string', '', { sentry: 'veryRare' }, true);

  const playbackData = SnapchatWebpack.accessSnapchatStore('friendStories->playbackData');
  let entries = Array.from(playbackData.entries())
    .filter(([, data]) => data.hasViewedAll === viewed);

  if (userId) {
    const found = entries.find(([key]) => key.str === userId);
    const snaps = found?.[1]?.bundle?.items ?? [];
    return snaps.length ? [{ userId, snaps }] : [];
  }

  return entries.map(([key, data]) => ({ userId: key.str, snaps: data.bundle.items }));
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
  ctx.drawImage(bitmap, (bitmap.width - sw) / 2, (bitmap.height - sh) / 2, sw, sh, 0, 0, w, h);
  return compress
    ? canvas.convertToBlob({ type: 'image/jpeg', quality: 0.925 })
    : canvas.convertToBlob();
}

async function overlayText(blob, text, opts) {
  // Delegates to the same text overlay logic used in messages
  // Imported dynamically to avoid circular deps
  const { default: messages } = await import('./messages');
  return messages._overlayTextOnImage?.(blob, text, opts) ?? blob;
}
