import { isOneOfType, isType } from './types';

export function sortAscending(arr, key) {
  return arr.sort(comparator('ascending', key));
}

export function comparator(direction, key) {
  return (a, b) => {
    const va = key ? a[key] : a;
    const vb = key ? b[key] : b;
    if (direction === 'ascending') return va < vb ? -1 : va > vb ? 1 : 0;
    if (direction === 'descending') return va < vb ? 1 : va > vb ? -1 : 0;
    throw new Error('Invalid direction');
  };
}

export function cleanFalsy(obj, opts) {
  const deepVisited = opts?.deepVisited || new WeakSet();
  for (const key in obj) {
    if (opts?.deep && typeof obj[key] === 'object' && obj[key] !== null && !deepVisited.has(obj[key])) {
      deepVisited.add(obj[key]);
      obj[key] = cleanFalsy(obj[key], { deep: opts.deep, deepVisited });
    }
    if (!obj[key] && !(opts?.allowZero && obj[key] === 0)) {
      delete obj[key];
    }
  }
  return obj;
}

export function getAllPropertyNames(obj, includePrototypes) {
  const names = [...Object.getOwnPropertyNames(obj), ...Object.keys(obj)];
  if (includePrototypes) {
    let proto = obj;
    while ((proto = Object.getPrototypeOf(proto))) {
      names.push(...Object.getOwnPropertyNames(proto), ...Object.keys(proto));
    }
  }
  return names;
}

const findPropertyCache = new Map();

export function findProperty(obj, opts) {
  let cached = 'cacheKey' in opts ? findPropertyCache.get(opts.cacheKey) : undefined;

  if (!cached) {
    cached = getAllPropertyNames(obj, opts.prototypesIncluded).find((name) => {
      const val = obj[name];
      return isOneOfType(val, opts.propType) && (!opts.predicate || opts.predicate(val));
    });
    if ('cacheKey' in opts) findPropertyCache.set(opts.cacheKey, cached);
  }

  if (opts.assert) {
    if (!cached) throw opts.assert.createError();
  }

  return opts.returnKey ? cached : cached ? obj[cached] : undefined;
}

const deepSearchCache = new Map();

export function deepSearch(obj, searchTerm, opts) {
  const cacheKey = opts?.cacheKey;
  if (cacheKey) {
    const cached = deepSearchCache.get(cacheKey);
    if (cached) return cached;
  }

  const results = [];
  const ignorePatterns = opts?.ignore;
  const visited = new WeakSet();

  const hasArrow = searchTerm.includes('->');
  const arrowParent = hasArrow ? searchTerm.slice(0, searchTerm.indexOf('->')) : undefined;
  const arrowChild = hasArrow ? searchTerm.slice(searchTerm.indexOf('->') + 2) : undefined;

  const matchesKey = (key, parentPath) => {
    if (!key) return false;
    if (ignorePatterns?.some((p) => key.includes(p))) return false;
    if (opts?.type && !isOneOfType(obj[key], opts.type)) return false;
    if (hasArrow && key === arrowChild && parentPath.endsWith(arrowParent)) return true;
    return key.includes(searchTerm);
  };

  const addResult = (type, path, match, value) => {
    results.push({ type, path: path.split('->'), rawPath: path, match, value });
  };

  const walk = (node, path = '') => {
    const prefix = path ? path + '->' : '';

    if (opts?.mode !== 'depth') {
      if (visited.has(node)) return;
      if (typeof node === 'object' && node !== null) visited.add(node);
    } else {
      if (path.split('->').length > (opts?.depth ?? 10)) return;
    }

    if (ignorePatterns?.some((p) => path.includes(p))) return;

    const keys = Array.isArray(node)
      ? Object.keys(node)
      : opts?.listNonEnumerable
        ? getAllPropertyNames(node, true)
        : Object.keys(node);

    for (const key of keys) {
      if (opts?.ignoreType && isOneOfType(node[key], opts.ignoreType)) continue;

      if (matchesKey(key, path)) {
        addResult('key', `${prefix}${key}`, key, node[key]);
      }

      if (node[key] && typeof node[key] === 'object') {
        try { walk(node[key], `${prefix}${key}`); } catch {}
      } else if (node[key]?.toString && matchesKey(node[key].toString(), path)) {
        addResult('value', `${prefix}${key}`, node[key].toString(), node[key]);
      }
    }
  };

  walk(obj);
  if (cacheKey) deepSearchCache.set(cacheKey, results);
  return results;
}

export function accessPath(path, obj) {
  if (!path) return obj;
  if (path.includes('->')) {
    return path.split('->').reduce((acc, key) => acc?.[key], obj);
  }
  return obj[path];
}

export function mergeLazy(...sources) {
  const result = {};
  for (const src of sources) {
    for (const key of Object.keys(src)) {
      if (Object.prototype.hasOwnProperty.call(result, key)) {
        throw new Error(`Property ${key} already defined in source object`);
      }
      Object.defineProperty(result, key, { get: () => src[key] });
    }
  }
  return result;
}

export function defineHidden(obj, key, value) {
  Object.defineProperty(obj, key, { value, enumerable: false, writable: true, configurable: true });
  return obj;
}

export function indexBy(arr, key) {
  return arr.reduce((map, item) => { map[item[key]] = item; return map; }, {});
}

export function snakeToCamelCase(obj, opts = { deep: false, mutate: true }) {
  if (isOneOfType(obj, 'array')) return obj.map((item) => snakeToCamelCase(item, opts));
  if (isOneOfType(obj, 'object')) {
    const target = opts.mutate ? obj : {};
    for (const key in obj) {
      const val = obj[key];
      const camelKey = key.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
      target[camelKey] = opts.deep && typeof val === 'object' ? snakeToCamelCase(val, opts) : val;
      if (opts.mutate && key !== camelKey) delete target[key];
    }
    return target;
  }
  return obj;
}
