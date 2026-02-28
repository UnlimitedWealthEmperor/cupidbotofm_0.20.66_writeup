function isClassLike(val) {
  return typeof val === 'function' && val.toString().startsWith('class');
}

export function isType(value, typeName) {
  if (typeName === 'promise') return Boolean(value && typeof value.then === 'function');
  if (typeName === 'set') return value instanceof Set;
  if (typeName === 'map') return value instanceof Map;
  if (typeName === 'array') return Array.isArray(value);
  if (typeName === 'blob') return value instanceof Blob;
  if (typeName === 'object') return value && typeof value === 'object' && value !== null && !Array.isArray(value);
  if (typeName === 'function') return typeof value === 'function' && !isClassLike(value);
  if (typeName === 'class') return isClassLike(value);
  if (typeName === 'error') return value instanceof Error;
  return typeof value === typeName;
}

export function isOneOfType(value, ...types) {
  return types.some((t) => isType(value, t));
}

export function hasKey(key, obj) {
  return key in obj;
}

export function hasKeys(obj, keys) {
  return keys.every((k) => k in obj);
}

export function isIn(value, arr) {
  return arr.includes(value);
}
