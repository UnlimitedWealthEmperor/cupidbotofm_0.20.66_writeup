import { createAssertionGroup, assert } from '../utils/errors';
import { safeTry } from '../utils/misc';
import { forwardToSentry } from '../sentry';
import { ContentScriptBridge } from '../bridge';
import * as helpers from './helpers';

const registeredModules = {};

const webpackData = globalThis.webpackData || {
  webpackRequires: undefined,
  webpackChunkName: undefined,
};

const WebpackBase = {
  findChunkName() {
    let name;
    if ('__LOADABLE_LOADED_CHUNKS__' in window) {
      name = '__LOADABLE_LOADED_CHUNKS__';
    } else {
      name = Object.keys(window).find((k) => k.startsWith('webpackChunk'));
    }
    webpackData.webpackChunkName = name;
    return name;
  },

  getChunks() {
    const { assert$ } = createAssertionGroup('zfmz4dj');
    if (!webpackData.webpackChunkName) WebpackBase.findChunkName();
    assert$(1, webpackData.webpackChunkName, '', { sentry: 'veryRare' }, true);
    return window[webpackData.webpackChunkName];
  },

  getModulesEntries() {
    let modules = {};
    const chunkName = webpackData.webpackChunkName;

    const isSpecialChunk = ['telegram', 'of_vue', 'grindr_web', 'discord', 'twitter']
      .some((n) => chunkName?.includes(n)) || chunkName === 'webpackChunkweb';

    if (isSpecialChunk) {
      const reqModuleName = helpers.internalModuleName('req');
      for (const requireFn of WebpackBase.getRequires()) {
        const moduleWithReq = Object.values(requireFn)
          .find((m) => typeof m?.[reqModuleName] === 'function');
        if (moduleWithReq) {
          modules = { ...modules, ...moduleWithReq };
        }
      }
    } else {
      modules = WebpackBase.getChunks()
        .map((chunk) => chunk[1])
        .reduce((acc, m) => Object.assign(acc, m), {});
    }

    return Object.entries(modules);
  },

  getRequires() {
    const { assert$ } = createAssertionGroup('f4f489');
    if (webpackData.webpackRequires == null) {
      WebpackBase.registerModule('req', (_e, _t, requireFn) => {
        if (webpackData.webpackRequires?.includes(requireFn)) return;
        webpackData.webpackRequires = [...(webpackData.webpackRequires || []), requireFn];
      }, false);
      assert$(1, webpackData.webpackRequires, '', { sentry: false }, true);
    }
    return webpackData.webpackRequires;
  },

  module(moduleId) {
    for (const requireFn of WebpackBase.getRequires()) {
      try {
        const mod = requireFn(moduleId);
        if (mod) return mod;
      } catch { continue; }
    }
    return null;
  },

  async refactorExports(moduleKey, transform) {
    const { assert$, throw$ } = createAssertionGroup('e3eafb');
    const intName = helpers.internalModuleName(moduleKey);

    if (intName in registeredModules) return registeredModules[intName];

    const found = WebpackBase.findModule({ key: moduleKey, id: moduleKey });
    if (!found) throw$(1, '', { sentry: 'veryRare' }, true);

    let source = found.moduleInitiator.toString();
    const exports = transform(source);
    if (!exports) throw$(2, '', { sentry: 'veryRare' }, true);

    const failed = Object.entries(exports).filter(([, v]) => v == null);
    if (failed.length > 0) {
      throw$(3, '', { sentry: 'veryRare', extra: { moduleId: moduleKey, failedExports: failed.map(([k]) => k) } }, true);
    }

    if (/^\d+\s*\(/.test(source)) source = source.replace(/^\d+/, 'function');

    const lastBrace = source.lastIndexOf('}');
    const exportStatements = Object.entries(exports)
      .map(([name, localVar]) => `__int_t.${name} = ${localVar}`)
      .join(';\n');
    const patchedSource = source.slice(0, lastBrace) + `;${exportStatements}` + source.slice(lastBrace);

    const tmpVar = `__tmp_${moduleKey}`;
    const wrapperCode = `globalThis.${tmpVar} = ((__int_e, __int_t, __int_n) => {
      const original = ${patchedSource};
      return original(__int_e, __int_t, __int_n)
    })`;

    await ContentScriptBridge.evalCode({ code: wrapperCode });

    const result = globalThis[tmpVar];
    assert$(2, result, '', { sentry: 'veryRare', extra: { moduleId: moduleKey } }, true);

    return WebpackBase.registerModule(moduleKey, result);
  },

  registerModule(name, factory, resolveExports = true) {
    const intName = helpers.internalModuleName(name);
    if (intName in registeredModules) return registeredModules[intName];

    WebpackBase.getChunks().push([
      [intName],
      { [intName]: factory },
      (require) => require(intName),
    ]);

    if (!resolveExports) return null;

    const mod = WebpackBase.module(intName);
    registeredModules[intName] = mod;
    return mod;
  },

  hasLoadedModule(moduleId) {
    const requires = WebpackBase.getRequires();
    for (const requireFn of requires) {
      const keys = Object.keys(requireFn);
      const reqModuleName = helpers.internalModuleName('req');
      const cacheKey = keys.find((k) => {
        const m = requireFn[k];
        if (typeof m !== 'object') return false;
        return !!m[reqModuleName]?.loaded;
      });
      if (!cacheKey) return true;
      return !!requireFn[cacheKey][moduleId]?.loaded;
    }
    return false;
  },

  findModule(query) {
    const { assert$, message$ } = createAssertionGroup('ncaj37d');

    if (query.key && registeredModules[query.key]) return registeredModules[query.key];

    const results = [];
    const entries = WebpackBase.getModulesEntries();

    for (const [moduleKey, moduleInit] of entries) {
      if (moduleKey.startsWith(helpers.internalModuleName(''))) continue;

      const source = moduleInit?.toString();
      if (source == null) continue;

      if (query.id && moduleKey !== query.id.toString()) continue;
      if (query.importsModules?.some((m) => !source.includes(m))) continue;
      if (query.importCount != null && query.importCount !== helpers.findImportCount(source)) continue;
      if (query.includes?.some((inc) => typeof inc === 'string' ? !source.includes(inc) : !inc.test(source))) continue;
      if (!query.includeNonLoaded && !WebpackBase.hasLoadedModule(moduleKey)) continue;

      const exports = safeTry(() => WebpackBase.module(moduleKey));
      if (exports == window || exports == null) continue;

      const moduleData = { moduleKey, moduleInitiator: moduleInit, exports };

      if (query.exportsMeta) {
        const matched = helpers.findExport(moduleData, query.exportsMeta);
        if (Array.isArray(matched) ? !matched.length : !matched) continue;
        if (matched != null) moduleData.exportsMatched = matched;
      }

      if (query.predicate && !query.predicate({ ...moduleData, content: source })) continue;

      results.push(moduleData);
    }

    if (query.assert) assert(results.length, query.assert);
    if (query.assertExport) assert(results.every((r) => r.exportsMatched), query.assertExport);

    if (!query.accumulate && results.length > 1) {
      forwardToSentry(query.key, message$(1, '', { extra: { key: query.key }, sentry: 'always' }, true));
    }

    const final = query.accumulate ? results : results[0];
    if (query.key && results.length) registeredModules[query.key] = final;
    return final;
  },

  findExport(query) {
    const { assert$, message$ } = createAssertionGroup('jiyrs73');
    const mod = WebpackBase.findModule({ ...query, accumulate: false });
    assert$(1, !!mod, '', { sentry: 'rare' }, true);
    assert$(2, mod.exportsMatched, '', { extra: { key: query.key }, sentry: 'rare' }, true);
  },
};

window.WebpackBase = WebpackBase;

export default WebpackBase;
