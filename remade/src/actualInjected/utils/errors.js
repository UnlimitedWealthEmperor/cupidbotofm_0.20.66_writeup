import { ERROR_MARKER, IS_INTERNAL } from '../config';

export class ErrorMessage {
  constructor(content, opts, rawData = null, key = null) {
    this.content = content;
    this.opts = opts;
    this.rawData = rawData;
    this.key = key;
  }

  createError(existingError) {
    const error = existingError ?? new Error(this.content);
    error[ERROR_MARKER] = true;
    error.errorData = {
      content: this.content,
      opts: this.opts,
      key: this.opts?.key,
    };
    return error;
  }
}

function buildErrorMessage(group, id, text, subGroup, opts) {
  const prefix = subGroup
    ? `[${group}] [${subGroup}:${id}]`
    : `[${group}:${id}]`;
  const msg = new ErrorMessage(`${prefix}${text ? ' ' + text : ''}`, opts);

  if (!opts.key) opts.key = `${group}:${id}`;

  if (opts.extra && IS_INTERNAL) {
    msg.content += '\r\n\r\n' + JSON.stringify(opts.extra, null, 2);
  }

  return msg;
}

function createSimpleMessage(content, opts) {
  return new ErrorMessage(content, opts);
}

function networkResponseToError(networkResponse, messageText) {
  if (networkResponse == null) return null;
  if (typeof networkResponse !== 'object') {
    networkResponse = { networkResponse };
  }
  const error = messageText ? new Error(messageText) : new Error();
  for (let key in networkResponse) {
    if (key === 'message' && messageText) key = '_message';
    Object.defineProperty(error, key, {
      value: networkResponse[key],
      enumerable: false,
      writable: true,
      configurable: true,
    });
  }
  return error;
}

export function assert(condition, messageOrErrorMessage, opts) {
  if (!condition) {
    const errMsg = typeof messageOrErrorMessage === 'string'
      ? createSimpleMessage(messageOrErrorMessage, opts)
      : messageOrErrorMessage;
    throw errMsg.createError();
  }
  return condition;
}

export function createAssertionGroup(group = 'no-group') {
  const macroError = (fnName) =>
    new Error(`You cannot use the ${fnName} function without the macro, to implement the macro, call it as ${fnName}`);

  return {
    message$(id, text, opts, _macro) {
      if (!_macro) throw macroError('message$');
      return buildErrorMessage(group, id, text, '', opts);
    },

    assert$(id, condition, text, opts, _macro) {
      if (!_macro) throw macroError('assert$');
      if (condition) return condition;

      if ('networkResponse' in opts) opts.networkRelated = true;

      const errMsg = buildErrorMessage(group, id, text, '', opts);
      const netErr = opts.networkResponse != null
        ? networkResponseToError(opts.networkResponse, errMsg.content)
        : undefined;

      delete opts.networkResponse;
      throw errMsg.createError(netErr ?? undefined);
    },

    throw$(id, text, opts, _macro) {
      if (!_macro) throw macroError('throw$');

      if ('networkResponse' in opts) opts.networkRelated = true;

      const errMsg = buildErrorMessage(group, id, text, '', opts);
      const netErr = opts.exception ?? (
        opts.networkResponse != null
          ? networkResponseToError(opts.networkResponse, errMsg.content)
          : undefined
      );

      delete opts.exception;
      delete opts.networkResponse;
      throw errMsg.createError(netErr ?? undefined);
    },
  };
}
