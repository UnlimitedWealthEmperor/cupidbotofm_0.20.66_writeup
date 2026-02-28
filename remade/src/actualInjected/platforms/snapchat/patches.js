import { Provenance } from './constants';

export function applySnapchatPatches() {
  replaceConsoleWithIframe();
  patchCanvasDrawImage();
  patchCanvasToBlob();
  patchMessagePortPostMessage();
  patchDocumentHasFocus();
  blockEventListeners();
}

function replaceConsoleWithIframe() {
  try {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const iframeConsole = iframe.contentWindow.console;
    if (iframeConsole) {
      ['log', 'error', 'warn', 'info'].forEach((method) => {
        console[method] = iframeConsole[method].bind(iframeConsole);
      });
    }
  } catch {}
}

function patchCanvasDrawImage() {
  const original = CanvasRenderingContext2D.prototype.drawImage;
  CanvasRenderingContext2D.prototype.drawImage = function (source, ...args) {
    if (source instanceof HTMLVideoElement && (source.videoWidth > 640 || source.videoHeight > 480)) {
      const canvas = this.canvas;
      if (canvas.width !== 640) canvas.width = 640;
      if (canvas.height !== 480) canvas.height = 480;
    }
    return original.call(this, source, ...args);
  };
}

function patchCanvasToBlob() {
  const original = HTMLCanvasElement.prototype.toBlob;
  HTMLCanvasElement.prototype.toBlob = function (callback, type, quality) {
    return original.call(this, callback, type || 'image/jpeg', 0.95);
  };
}

function patchMessagePortPostMessage() {
  const original = MessagePort.prototype.postMessage;
  MessagePort.prototype.postMessage = new Proxy(original, {
    apply(target, thisArg, args) {
      const data = args[0];
      try {
        if (data && typeof data === 'object') {
          patchPresenceMessages(data);
          patchSnapMessages(data);
        }
      } catch {}
      return Reflect.apply(target, thisArg, args);
    },
  });
}

function patchPresenceMessages(data) {
  if (data?.presence) {
    const presence = data.presence;
    if (presence.platform === 'WEB') {
      presence.platform = 'MOBILE';
    }
  }
}

function patchSnapMessages(data) {
  if (data?.sendMessageWithContent) {
    const msg = data.sendMessageWithContent;

    if (msg.savePolicy != null) {
      msg.savePolicy = 2;
    }

    if (msg.duration != null && msg.duration > 0) {
      msg.duration = 5;
    }

    if (msg.provenance) {
      if (msg.provenance.snapSourceSystem === Provenance.SnapSourceSystem.SNAPCHAT_WEB_APP) {
        msg.provenance.snapSourceSystem = Provenance.SnapSourceSystem.UNSET;
      }
    }

    if (msg.attributes) {
      delete msg.attributes.url;
    }
  }
}

function patchDocumentHasFocus() {
  document.hasFocus = () => true;
}

function blockEventListeners() {
  const original = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (type, listener, options) {
    if (type === 'keydown' || type === 'focus') return;
    return original.call(this, type, listener, options);
  };
}
