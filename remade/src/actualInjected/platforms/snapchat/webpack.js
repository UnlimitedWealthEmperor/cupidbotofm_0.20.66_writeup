import WebpackBase from '../../webpack/base';
import { createAssertionGroup } from '../../utils/errors';
import { accessPath } from '../../utils/objects';

let cachedFetcher = null;

const SnapchatWebpack = {
  ...WebpackBase,
  store: undefined,

  getSnapchatStoreModule() {
    const { message$ } = createAssertionGroup('13913f');
    if (SnapchatWebpack.store != null) return SnapchatWebpack.store;

    const results = WebpackBase.findModule({
      key: 'store-module',
      accumulate: true,
      assert: message$(1, '', { sentry: 'rare' }, true),
      assertExport: message$(2, '', { sentry: 'rare' }, true),
      includes: ['broadcastTypingActivity'],
      exportsMeta: { matchesProps: ['getState', 'setState'] },
    });

    SnapchatWebpack.store = results[0];
    return results[0];
  },

  accessSnapchatStore(path = '') {
    return accessPath(path, SnapchatWebpack.getSnapchatStoreModule().exportsMatched.value.getState());
  },

  async callSnapchatStore(fnPath, ...args) {
    const { assert$ } = createAssertionGroup('5ba0d9');
    assert$(1, fnPath != null, '', { sentry: 'rare' }, true);
    assert$(2, typeof fnPath === 'string', '', { sentry: 'rare' }, true);

    const store = (await SnapchatWebpack.getSnapchatStoreModule()).exportsMatched.value.getState();
    const fn = accessPath(fnPath, store);
    assert$(3, typeof fn === 'function', '', { extra: { fn, path: fnPath }, sentry: 'rare' }, true);
    return fn(...args);
  },

  ContentEncoding() {
    const { message$ } = createAssertionGroup('f8b2a4');
    return WebpackBase.findModule({
      key: 'content-encoding',
      assert: message$(1, '', { sentry: 'rare' }, true),
      assertExport: message$(2, '', { sentry: 'rare' }, true),
      includes: ['text', 'share', 'statusMessage', 'location', 'snapReply']
        .map((f) => `"${f}"===e.content?.$case`),
      exportsMeta: { matchesProps: ['encode'] },
    });
  },

  React() {
    return WebpackBase.findModule({
      key: 'react-module',
      includes: ['react.strict_mode'],
    });
  },

  Rpc() {
    const { message$ } = createAssertionGroup('b06b33');
    const storeModule = SnapchatWebpack.getSnapchatStoreModule();
    const matched = storeModule.exportsMatched;

    return WebpackBase.findModule({
      key: 'rpc-client',
      assert: message$(1, '', { sentry: 'rare' }, true),
      assertExport: message$(2, '', { sentry: 'rare' }, true),
      includes: [
        new RegExp(
          `(([\\w$])\\s*=\\s*n\\(${storeModule.moduleKey}\\)).*(\\2.${matched.key}.getState\\(\\).auth.refreshToken)`,
          'igs'
        ),
      ],
      exportsMeta: { includes: ['API_ERROR_GRPC_7_16'] },
    });
  },

  Locale() {
    const { message$ } = createAssertionGroup('788003');
    return WebpackBase.findModule({
      key: 'locale-handler',
      assert: message$(1, '', { sentry: 'rare' }, true),
      assertExport: message$(2, '', { sentry: 'rare' }, true),
      includes: ['getLocale='],
      exportsMeta: { key: 'getLocale' },
    });
  },

  Http: {
    getExportKeyForAuthedFetch(source, fetchName) {
      const exportMap = {};
      const exportRegex = /n\.d\s*\(\s*t\s*,\s*\{([\s\S]*?)\}\s*\)/g;
      const pairRegex = /([$\w]+)\s*:\s*\(\s*\)\s*=>\s*([$\w]+)/g;
      let exportMatch;
      while ((exportMatch = exportRegex.exec(source))) {
        let pairMatch;
        const block = exportMatch[1];
        while ((pairMatch = pairRegex.exec(block))) {
          exportMap[pairMatch[1]] = pairMatch[2];
        }
      }

      const namedFunctions = {};
      const fnRegex = /([$\w]+)\s*=\s*\(0\s*,\s*a\.Jr\)\s*\(\s*\{\s*name\s*:\s*(['"])(.*?)\2/gs;
      let fnMatch;
      while ((fnMatch = fnRegex.exec(source))) {
        namedFunctions[fnMatch[1]] = fnMatch[3];
      }

      const localVar = Object.keys(namedFunctions).find((k) => namedFunctions[k] === fetchName);
      if (!localVar) return null;

      return Object.keys(exportMap).find((k) => exportMap[k] === localVar) ?? null;
    },

    getFetcher() {
      const { message$ } = createAssertionGroup('xqmof4h8d');
      if (cachedFetcher) return cachedFetcher;

      const mod = WebpackBase.findModule({
        key: 'http-functions-module',
        assert: message$(1, '', { sentry: 'rare' }, true),
        includes: ['default-authed-fetch'],
      });

      const exportKey = SnapchatWebpack.Http.getExportKeyForAuthedFetch(
        mod.moduleInitiator.toString(),
        'default-authed-fetch'
      );

      cachedFetcher = mod.exports[exportKey];
      return cachedFetcher;
    },

    fetch(options) {
      return SnapchatWebpack.Http.getFetcher()(options);
    },
  },
};

export default SnapchatWebpack;
