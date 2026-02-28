import { safeTry } from '../utils/misc';

export function internalModuleName(name) {
  return `__int:${name}`;
}

export function findImports(source) {
  return source.match(/[\w$]=n(\d*?)/gi) || [];
}

export function findImportName(source, moduleId) {
  return new RegExp(`(([\\w$]))=n\\(${moduleId}\\)`, 'imgs').exec(source)?.[1];
}

export function findImportCount(source) {
  return source.match(/[\w$]=n(\d*?)/gi)?.length || 0;
}

export function findExportCount(exports) {
  return Object.keys(exports).length;
}

export function findExport(moduleData, criteria) {
  if (!moduleData.exports) return null;

  const results = [];
  const exportKeys = Object.keys(moduleData.exports);

  if (criteria.names?.some((n) => !exportKeys.includes(n))) return null;

  if (criteria.count != null) {
    if (Array.isArray(criteria.count)) {
      const [min, max] = criteria.count;
      if (exportKeys.length < min || exportKeys.length > max) return null;
    } else if (criteria.count !== exportKeys.length) return null;
  }

  for (const key of exportKeys) {
    const value = safeTry(() => moduleData.exports[key]);
    if (value == null) continue;
    if (criteria.key && key !== criteria.key) continue;
    if (criteria.predicate != null && !criteria.predicate(value)) continue;
    if (criteria.matchesProps?.some((p) => safeTry(() => value[p]) == null)) continue;
    if (criteria.matches && !Object.entries(criteria.matches).every(([k, v]) => safeTry(() => value[k]) === v)) continue;
    if (criteria.includes?.some((inc) => {
      if (typeof value !== 'function' || typeof value.toString !== 'function') return true;
      const str = value.toString();
      return typeof inc === 'string' ? !str.includes(inc) : !inc.test(str);
    })) continue;
    if (criteria.matchesType != null && typeof value !== criteria.matchesType) continue;

    const match = { key, value };
    if (!criteria.accumulate) return match;
    results.push(match);
  }

  return criteria.accumulate ? results : null;
}
