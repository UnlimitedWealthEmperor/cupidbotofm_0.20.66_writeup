import { isType } from './types';

export function safeSerialize(value, maxDepth = Infinity) {
  const isSerializable = (v) => {
    if (v == null) return true;
    if (typeof v === 'function') return false;
    if (v instanceof Error) return false;
    if (v instanceof Node) return false;
    if (typeof v === 'symbol') return false;
    if (v instanceof WeakMap || v instanceof WeakSet) return false;
    if (v?.constructor?.name === 'Proxy') return false;
    if (v instanceof Promise) return false;
    return true;
  };

  const clone = (node, seen, depth) => {
    if (depth > maxDepth || seen.has(node)) return null;
    seen.add(node);

    if (Array.isArray(node)) {
      const result = node.map((item) =>
        isSerializable(item) ? clone(item, seen, depth + 1) : null
      );
      seen.delete(node);
      return result;
    }

    if (typeof node === 'object' && node !== null) {
      const result = {};
      Object.keys(node).forEach((key) => {
        try {
          if (isSerializable(node[key])) {
            result[key] = clone(node[key], seen, depth + 1);
          } else {
            result[key] = null;
          }
        } catch (err) {
          if (err instanceof TypeError && err.message.includes('read only')) return;
          console.error('You are probably returning to content script an object you shouldnt be');
          throw err;
        }
      });
      seen.delete(node);
      return result;
    }

    seen.delete(node);
    return node;
  };

  return clone(value, new Set(), 0);
}

export function jsonStringifyWithErrors(value) {
  return JSON.stringify(value, (_, v) => {
    if (v instanceof Error) {
      return Object.getOwnPropertyNames(v).reduce((acc, key) => {
        acc[key] = v[key];
        return acc;
      }, {});
    }
    return v;
  });
}

export function jsonClone(value) {
  return JSON.parse(jsonStringifyWithErrors(value));
}

export function getErrorMessage(err, fallback = 'Unknown error') {
  if (err instanceof Error) return err.message;
  if (typeof err === 'string') return err;
  if (err && typeof err === 'object' && 'message' in err) return String(err.message);
  if (err) return String(err);
  return fallback;
}
