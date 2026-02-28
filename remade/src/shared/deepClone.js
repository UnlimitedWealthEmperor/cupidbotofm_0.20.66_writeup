export function deepClone(value, maxDepth = Infinity) {
  const isSerializable = (val) => {
    let ctorName;
    return val == null || !(
      typeof val === 'function' ||
      val instanceof Error ||
      val instanceof Node ||
      typeof val === 'symbol' ||
      val instanceof WeakMap ||
      val instanceof WeakSet ||
      'Proxy' === (ctorName = val?.constructor?.name) ||
      val instanceof Promise
    );
  };

  const cloneRecursive = (obj, seen, depth) => {
    if (depth > maxDepth || seen.has(obj)) return null;
    seen.add(obj);

    if (Array.isArray(obj)) {
      const cloned = obj.map(item =>
        isSerializable(item) ? cloneRecursive(item, seen, depth + 1) : null
      );
      seen.delete(obj);
      return cloned;
    }

    if (typeof obj === 'object' && obj !== null) {
      const cloned = {};
      Object.keys(obj).forEach(key => {
        try {
          cloned[key] = isSerializable(obj[key])
            ? cloneRecursive(obj[key], seen, depth + 1)
            : null;
        } catch (err) {
          if (err instanceof TypeError && err.message.includes('read only')) return;
          throw err;
        }
      });
      seen.delete(obj);
      return cloned;
    }

    seen.delete(obj);
    return obj;
  };

  return cloneRecursive(value, new Set(), 0);
}
