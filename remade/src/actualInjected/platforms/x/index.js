/**
 * X/Twitter platform SDK
 * Supports two architectures:
 * - V1 (legacy Redux-based): location.href.includes("/messages")
 * - V2 (Kotlin/Compose DM graph): com.x.dms - newer DM system
 */

import { createAssertionGroup, assert } from '../../utils/errors';
import { isOneOfType } from '../../utils/types';
import { cleanFalsy, accessPath, deepSearch } from '../../utils/objects';
import { randomString, getReactFiber } from '../../utils/misc';
import { sleep, waitUntil } from '../../utils/async';
import { combineTimestamp } from '../../utils/misc';
import WebpackBase from '../../webpack/base';
import * as helpers from '../../webpack/helpers';

// --- Helpers ---

function isTruthy(val) {
  if (val == null) return false;
  if (typeof val === 'boolean') return val;
  if (typeof val === 'string') return val.trim().length > 0;
  if (Array.isArray(val)) return val.length > 0 && val.every(isTruthy);
  if (typeof val === 'object') return Object.keys(val).length > 0;
  if (typeof val === 'number') return val !== 0;
  return !!val;
}

function getReactFiberFromElement(element) {
  if (!element) return null;
  const reactKeys = ['__reactFiber', '__reactProps', '__reactContainer', '__reactInternalInstance', '_reactInternalFiber'];
  for (const key of Object.keys(element)) {
    if (reactKeys.some((prefix) => key.startsWith(prefix) || key === prefix)) {
      try {
        return element[key] || null;
      } catch {}
    }
  }
  return getReactFiber(element) ?? null;
}

const findInReactTreeCache = {};

function findInReactTree(opts) {
  const {
    key = '',
    accumulate = false,
    assert: assertMsg,
    element,
    mustHaveKeys,
    mustHaveNestedKeys,
    filter,
    maxDepth = 5,
  } = opts;
  const cacheKey = key.trim();
  const useCache = cacheKey.length > 0;
  if (useCache && cacheKey in findInReactTreeCache) return findInReactTreeCache[cacheKey];

  function findRootFiber() {
    if (element) {
      const fiber = getReactFiberFromElement(element);
      if (fiber) return fiber;
    }
    const roots = [document.querySelector('#react-root, [data-reactroot], #root, #app'), document.body].filter(Boolean);
    for (const root of roots) {
      const fiber = getReactFiberFromElement(root);
      if (fiber) return fiber;
    }
    const nodes = Array.from(document.querySelectorAll('body *')).slice(0, 2000);
    for (const node of nodes) {
      const fiber = getReactFiberFromElement(node);
      if (fiber) return fiber;
    }
    return null;
  }

  const rootFiber = findRootFiber();
  const stopOnFirst = !accumulate;

  function hasNestedKeys(obj, keys, depth = 0) {
    if (!obj || typeof obj !== 'object' || depth >= maxDepth) return false;
    for (const k of keys) {
      try {
        if (Object.prototype.hasOwnProperty.call(obj, k)) return true;
      } catch {
        continue;
      }
    }
    if (Array.isArray(obj)) {
      for (const item of obj) {
        try {
          if (hasNestedKeys(item, keys, depth + 1)) return true;
        } catch {
          continue;
        }
      }
    } else {
      for (const p of Object.keys(obj)) {
        try {
          if (hasNestedKeys(obj[p], keys, depth + 1)) return true;
        } catch {
          continue;
        }
      }
    }
    return false;
  }

  const visited = new Set();
  const extractCandidates = (fiber) => {
    if (!fiber || visited.has(fiber)) return [];
    if (
      mustHaveKeys &&
      !mustHaveKeys.every((k) => fiber[k]) &&
      mustHaveNestedKeys &&
      !hasNestedKeys(fiber, mustHaveNestedKeys)
    ) {
      return [];
    }
    if (filter && !filter(fiber)) return [];
    visited.add(fiber);
    return [fiber];
  };

  const collectFromFiber = (fiber) => {
    const out = [];
    if (fiber?.memoizedState) {
      let s = fiber.memoizedState;
      const seen = new Set();
      while (s && typeof s === 'object' && !seen.has(s)) {
        seen.add(s);
        out.push(...extractCandidates(s), ...extractCandidates(s.baseState), ...extractCandidates(s.memoizedState));
        s = s.next || null;
      }
    }
    if (fiber?.stateNode && typeof fiber.stateNode === 'object') {
      out.push(
        ...extractCandidates(fiber.stateNode),
        ...extractCandidates(fiber.stateNode?.state),
        ...extractCandidates(fiber.stateNode?.props),
        ...extractCandidates(fiber.stateNode?.context)
      );
    }
    if (fiber?.memoizedProps && typeof fiber.memoizedProps === 'object') {
      const p = fiber.memoizedProps;
      out.push(...extractCandidates(p));
      if (p.value) out.push(...extractCandidates(p.value));
    }
    if (fiber?.dependencies && typeof fiber.dependencies === 'object') {
      out.push(...extractCandidates(fiber.dependencies), ...extractCandidates(fiber.dependencies.memoizedState));
    }
    return out.filter(isTruthy);
  };

  const queue = [rootFiber];
  const seenFibers = new Set();
  const results = [];
  let iterations = 0;
  const maxIterations = 50000;

  while (queue.length && iterations < maxIterations) {
    const fiber = queue.shift();
    iterations++;
    if (!fiber || seenFibers.has(fiber)) continue;
    seenFibers.add(fiber);

    const candidates = collectFromFiber(fiber);
    for (const c of candidates) {
      results.push(c);
      if (stopOnFirst) break;
    }
    if (stopOnFirst && results.length) break;

    if (fiber.child) queue.push(fiber.child);
    if (fiber.sibling) queue.push(fiber.sibling);
    if (fiber.return) queue.push(fiber.return);
    if (fiber.alternate) queue.push(fiber.alternate);
  }

  const final = accumulate ? results : results[0] ?? null;
  const hasResult = accumulate ? results.length > 0 : Boolean(final);
  if (assertMsg && !hasResult) throw assertMsg.createError();
  if (hasResult && useCache) findInReactTreeCache[cacheKey] = final;
  return final;
}

function isKotlinInternalKey(key) {
  return (
    key.startsWith('$') ||
    key === 'constructor' ||
    key === 'equals' ||
    key === 'hashCode' ||
    key === 'toString' ||
    key === 'copy' ||
    key.startsWith('component') ||
    /_\d+$/.test(key) ||
    /^[a-z]{1,3}\d+_\d+$/.test(key)
  );
}

function tryKotlinLikeConversion(obj, visited, depth) {
  if (!obj) return null;
  if (obj instanceof Map) {
    const out = {};
    for (const [k, v] of obj.entries()) out[String(k)] = deepCloneKotlin(v, visited, depth + 1);
    return out;
  }
  if (typeof obj.asJsReadonlyMapView === 'function') {
    try {
      return tryKotlinLikeConversion(obj.asJsReadonlyMapView(), visited, depth);
    } catch {}
  }
  if (typeof obj.asJsReadonlyArrayView === 'function') {
    try {
      return deepCloneKotlin(obj.asJsReadonlyArrayView(), visited, depth + 1);
    } catch {}
  }
  if (typeof obj.getValue === 'function' && !('then' in obj)) {
    try {
      return deepCloneKotlin(obj.getValue(), visited, depth + 1);
    } catch {}
  }
  return null;
}

function deepCloneKotlin(obj, visited = new WeakMap(), depth = 0) {
  if (obj == null) return obj;
  if (typeof obj !== 'object' && typeof obj !== 'function') return obj;
  if (obj instanceof Date) return obj;
  if (depth > 10) return '[Max depth reached]';
  if (Array.isArray(obj)) return obj.map((x) => deepCloneKotlin(x, visited, depth + 1));
  if (visited.has(obj)) return visited.get(obj);

  const conv = tryKotlinLikeConversion(obj, visited, depth);
  if (conv !== null) return conv;

  const isEnumLike =
    typeof obj === 'object' &&
    obj !== null &&
    'name' in obj &&
    'ordinal' in obj &&
    typeof obj.name === 'string' &&
    typeof obj.ordinal === 'number';
  if (isEnumLike) return { name: obj.name, ordinal: obj.ordinal };

  const out = {};
  visited.set(obj, out);
  let copied = false;
  const copiedKeys = new Set();
  let proto = obj;
  let protoDepth = 0;

  while (proto && proto !== Object.prototype && protoDepth < 10) {
    const descriptors = Object.getOwnPropertyDescriptors(proto);
    for (const key in descriptors) {
      if (copiedKeys.has(key)) continue;
      const desc = descriptors[key];
      if (isKotlinInternalKey(key)) continue;
      try {
        if (typeof desc.get === 'function') {
          const val = desc.get.call(obj);
          if (typeof val !== 'function') {
            out[key] = deepCloneKotlin(val, visited, depth + 1);
            copied = true;
            copiedKeys.add(key);
          }
        } else if ('value' in desc && proto === obj) {
          const val = desc.value;
          if (typeof val !== 'function') {
            out[key] = deepCloneKotlin(val, visited, depth + 1);
            copied = true;
            copiedKeys.add(key);
          }
        }
      } catch {}
    }
    proto = Object.getPrototypeOf(proto);
    protoDepth++;
  }

  if (!copied) {
    try {
      if (typeof obj.toString === 'function' && obj.toString !== Object.prototype.toString) {
        const s = obj.toString();
        if (s && s !== '[object Object]' && !s.startsWith('[object ')) return s;
      }
    } catch {}
  }
  return out;
}

function annotateMessage(attrs) {
  attrs.ogMsg = attrs.msg;
  let msg = attrs.msg || '';
  if (attrs.hasGif) msg = '[GIF] ' + msg;
  else if (attrs.hasAudio) msg = '[audio-message] ' + msg;
  else if (attrs.hasVideo) msg = '[video] ' + msg;
  else if (attrs.hasPhoto) msg = '[photo] ' + msg;
  else if (attrs.isVideoCall || attrs.isCall) msg = '[tried-to-call-you]';
  else if (attrs.hasFile) msg = '[file] ' + msg;
  else if (attrs.hasTweet) {
    const prefix = attrs.hasTheirTweet
      ? '[reiplied-to-his-post]'
      : attrs.hasOurTweet
        ? '[reiplied-to-your-post]'
        : attrs.tweetCreator
          ? `[attached-post-from-username-${attrs.tweetCreator}]`
          : '[attached-post]';
    msg = attrs.tweetText ? `${prefix} ${attrs.tweetText}\n\n${msg}` : prefix + ' ' + msg;
  } else if (attrs.msg) {
    msg = attrs.msg;
  }
  msg = msg?.trim();
  if (attrs.isReply) msg = '[replied] ' + (msg || '') + ' ';
  attrs.msg = msg?.trim();
  return attrs;
}

// --- XPlatform (extends WebpackBase) ---

let stateModuleCache = null;
let stateApiCache = null;
let kotlinExportsCache = null;
let dmSessionsMap = new Map();
let conversationListSessionCache = null;

const graphState = { graph: null, patched: false };

const XPlatform = {
  ...WebpackBase,

  findModule(query) {
    return WebpackBase.findModule.call(this, { ...query, key: query.key ? `$x-${query.key}` : query.key });
  },

  state: {
    get() {
      const { assert$, message$ } = createAssertionGroup('x-state');
      if (stateModuleCache) return stateModuleCache;
      const found = XPlatform.findModule({
        key: 'state',
        assert: message$(1, '', { sentry: 'rare' }, true),
        assertExport: message$(2, '', { sentry: 'rare' }, true),
        includes: ['this.withEndpoint', 'get api', 'get relayEnvironment'],
        exportsMeta: { matchesType: 'function' },
      });
      stateModuleCache = found.exportsMatched.value({});
      return stateModuleCache;
    },
    api() {
      const { assert$ } = createAssertionGroup('x-state-api');
      if (stateApiCache) return stateApiCache;
      const createFn = XPlatform.state.createAppContextFn();
      const initialState = XPlatform.state.getInitialState();
      const userId = XPlatform.users.getCurrentUserId();
      assert(createFn, '', { sentry: 'rare' });
      assert(initialState, '', { sentry: 'rare' });
      assert(userId, '', { sentry: 'rare' });
      const { api } = createFn({ initialState, loggedInUserId: userId });
      stateApiCache = api;
      return api;
    },
    createAppContextFn() {
      const { message$ } = createAssertionGroup('x-create-app-context');
      const found = XPlatform.findModule({
        key: 'create-app-context',
        assert: message$(1, '', { sentry: 'rare' }, true),
        assertExport: message$(2, '', { sentry: 'rare' }, true),
        includes: ['getApi:', 'getStore:', 'loggedInUserId:'],
        exportsMeta: { matchesType: 'function', includes: ['api:'] },
      });
      return found.exportsMatched.value;
    },
    getInitialState() {
      if (globalThis.__INITIAL_STATE_CACHE__) return globalThis.__INITIAL_STATE_CACHE__;
      const script = [...document.scripts].find((s) => s.textContent?.includes('window.__INITIAL_STATE__'));
      if (!script) throw new Error('Initial state script tag not found');
      const m = script.textContent.match(/window\.__INITIAL_STATE__\s*=\s*(\{[\s\S]*?\})\s*;/);
      if (!m) throw new Error('Unable to parse __INITIAL_STATE__');
      const parsed = JSON.parse(m[1]);
      globalThis.__INITIAL_STATE_CACHE__ = parsed;
      return parsed;
    },
  },

  store: {
    get() {
      const { assert$ } = createAssertionGroup('x-store');
      return assert(
        XPlatform.store.module()?.store?.getState(),
        '',
        { sentry: 'rare' }
      );
    },
    access(path = '') {
      return accessPath(path, XPlatform.store.get());
    },
    module() {
      const { message$ } = createAssertionGroup('x-store-module');
      const found = XPlatform.findModule({
        key: 'store',
        accumulate: true,
        assert: message$(1, '', { sentry: 'rare' }, true),
        assertExport: message$(2, '', { sentry: 'rare' }, true),
        exportsMeta: { matchesType: 'object', matchesProps: ['store', 'usersInApp'] },
      });
      return found[0]?.exportsMatched?.value;
    },
    search(term, opts = { cacheKey: null }) {
      return deepSearch(XPlatform.store.get(), term, opts);
    },
    dispatch(action) {
      return XPlatform.store.module().store.dispatch(action);
    },
  },

  reducers: {
    get(path) {
      const { message$ } = createAssertionGroup('x-reducers');
      const found = XPlatform.findModule({
        key: `reducers-${path}`,
        assert: message$(1, '', { sentry: 'rare' }, true),
        assertExport: message$(2, '', { sentry: 'rare' }, true),
        includes: ['getReducers(){'],
        exportsMeta: { predicate: (x) => x.getReducers },
      });
      return accessPath(path, found.exportsMatched.value.getReducers());
    },
  },

  dispatchers: {
    entities: {
      get(path) {
        return accessPath(path, XPlatform.dispatchers.entities.module().exportsMatched.value.entities);
      },
      module() {
        const { message$ } = createAssertionGroup('x-dispatchers-entities');
        return XPlatform.findModule({
          key: 'dispatchers-entities',
          assert: message$(1, '', { sentry: 'rare' }, true),
          assertExport: message$(2, '', { sentry: 'rare' }, true),
          includes: ['getRegisteredModules', 'this.entities'],
          exportsMeta: { predicate: (x) => 'entities' in x },
        });
      },
      call(path, ...args) {
        const { assert$ } = createAssertionGroup('x-dispatchers-entities-call');
        const fn = assert(XPlatform.dispatchers.entities.get(path), '', { sentry: 'rare' });
        return XPlatform.store.dispatch(fn(...args));
      },
    },
    conversation: {
      get(path) {
        return accessPath(path, XPlatform.dispatchers.conversation.module().exports);
      },
      module() {
        const { message$ } = createAssertionGroup('x-dispatchers-conv');
        return XPlatform.findModule({
          key: 'dispatchers-conversation',
          assert: message$(1, '', { sentry: 'rare' }, true),
          exportsMeta: { names: ['acceptConversation'] },
        });
      },
      call(name, ...args) {
        const { assert$ } = createAssertionGroup('x-dispatchers-conv-call');
        const fn = assert(XPlatform.dispatchers.conversation.get(name), '', { sentry: 'rare' });
        return XPlatform.store.dispatch(fn(...args));
      },
    },
    get(name) {
      const found = XPlatform.dispatchers.find(name);
      return found?.exportsMatched?.value;
    },
    find(name) {
      const { message$ } = createAssertionGroup('x-dispatchers-find');
      const re = new RegExp(`\\.withEndpoint\\([\\w$].[\\w$]+?\\)\\.${name}`);
      const found = XPlatform.findModule({
        key: `dispatchers-${name}`,
        accumulate: true,
        assert: message$(1, '', { sentry: 'rare' }, true),
        assertExport: message$(2, '', { sentry: 'rare' }, true),
        includes: [re],
        exportsMeta: { includes: [re] },
      });
      return found[found.length - 1];
    },
    call(name, ...args) {
      const fn = XPlatform.dispatchers.get(name);
      return XPlatform.store.dispatch(fn(...args));
    },
  },

  endpoint: {
    get(name) {
      const api = XPlatform.state.api();
      const found = XPlatform.endpoint.find();
      const out = {};
      for (const m of found) {
        try {
          Object.assign(out, api.withEndpoint(m.exportsMatched.value));
        } catch {}
      }
      return name ? out[name] : out;
    },
    find() {
      const { message$ } = createAssertionGroup('x-endpoint-find');
      const filters = [/apiClient:/, /featureSwitches:/].filter(Boolean);
      return XPlatform.findModule({
        key: 'endpoint-find',
        assert: message$(1, '', { sentry: 'rare' }, true),
        assertExport: message$(3, '', { sentry: 'rare' }, true),
        accumulate: true,
        includes: filters,
        exportsMeta: { matchesType: 'function', includes: filters },
      });
    },
    bind(fn) {
      return XPlatform.state.api().withEndpoint(fn);
    },
    call(name, ...args) {
      const { assert$ } = createAssertionGroup('x-endpoint-call');
      const fn = XPlatform.endpoint.get(name);
      assert(typeof fn === 'function', '', { sentry: 'rare' });
      return fn(...args);
    },
  },

  requestId() {
    const { message$ } = createAssertionGroup('x-uuid');
    const found = XPlatform.findModule({
      key: 'uuid',
      accumulate: true,
      assert: message$(1, '', { sentry: 'rare' }, true),
      exportsMeta: { names: ['v1'], includes: ['.rng', '.random'], count: [1, 5], matchesType: 'function' },
    });
    return found[0].exportsMatched.value();
  },

  isV1() {
    return globalThis.location?.href?.includes('/messages') ?? false;
  },

  // --- Kotlin (V2) ---
  _collectUsersFromPreviews(previews) {
    const map = new Map();
    for (const p of previews) {
      const users = p.metadata?.metadata?.usersByIdAllTime;
      if (users) {
        for (const [id, u] of Object.entries(users)) {
          if (id && u) {
            u.userId = id;
            map.set(id, u);
          }
        }
      }
    }
    return Array.from(map.values());
  },

  kotlin: {
    getExports() {
      const { assert$, message$ } = createAssertionGroup('x-kotlin');
      if (kotlinExportsCache) return kotlinExportsCache;
      const found = XPlatform.findModule({
        key: 'dm-kotlin',
        assert: message$(1, '', { sentry: 'rare' }, true),
        predicate: ({ exports }) => exports?.com?.x?.dms && exports?.kotlin,
      });
      kotlinExportsCache = found.exports;
      return kotlinExportsCache;
    },
    get(path) {
      const { assert$ } = createAssertionGroup('x-kotlin-get');
      const v = accessPath(path, XPlatform.kotlin.getExports());
      assert(v, '', { sentry: 'rare' });
      return v;
    },
    getCancellationSignal() {
      return XPlatform.kotlin.get('com->x->export->CancellationSignal');
    },
    getChatComposerEvent() {
      return XPlatform.kotlin.get('com->x->dms->components->composer->ChatComposerEvent');
    },
    getDmEvent() {
      return XPlatform.kotlin.get('com->x->dms->components->chat->DmEvent');
    },
  },

  flow: {
    readFlowValue(flow) {
      if (!flow) return null;
      if (flow.state?.state) return flow.state.state;
      if (typeof flow.getValue === 'function') return flow.getValue();
      if (typeof flow.b1 === 'function') return flow.b1();
      if ('value' in flow) return flow.value;
      if ('_value' in flow) return flow._value;
      return null;
    },
    toJsArray(col) {
      if (!col) return [];
      if (Array.isArray(col)) return col;
      const methods = ['asJsReadonlyArrayView', 'asJsReadonlyArray', 'toArray', 'values'];
      for (const m of methods) {
        const fn = col[m];
        if (typeof fn === 'function') {
          try {
            const result = fn.call(col);
            return result ? Array.from(result) : [];
          } catch {
            continue;
          }
        }
      }
      try {
        if (Symbol.iterator in Object(col)) return Array.from(col);
      } catch {}
      return [];
    },
  },

  waitFor({ shouldResolve, timeoutMs = 20000, pollMs = 100, assert: assertMsg }) {
    return new Promise((resolve, reject) => {
      const start = performance.now();
      const poll = () => {
        try {
          if (shouldResolve()) return void resolve();
          if (performance.now() - start > timeoutMs) {
            return void reject(assertMsg ? assertMsg.createError() : new Error('Timeout while waiting for condition'));
          }
        } catch (e) {
          return void reject(e);
        }
        setTimeout(poll, pollMs);
      };
      poll();
    });
  },

  getDmGraph() {
    const { message$ } = createAssertionGroup('x-dm-graph');
    const required = ['dmComponent', 'conversationListComponent'];
    return findInReactTree({
      key: 'x:dm-graph',
      mustHaveKeys: required,
      filter: (node) =>
        node &&
        typeof node === 'object' &&
        required.every((k) => k in node && typeof node[k] === 'function'),
      assert: message$(1, '', { sentry: 'rare' }, true),
    });
  },

  _initGraph() {
    if (graphState.patched) return graphState.graph;
    const buildFn = XPlatform.kotlin.get('com->x->dms->buildWebDmObjectGraph');
    if (typeof buildFn === 'function' && !buildFn.__patched_by_console) {
      const wrapped = function (...args) {
        const result = buildFn.apply(this, args);
        graphState.graph = result;
        return result;
      };
      wrapped.__patched_by_console = true;
      XPlatform.kotlin.getExports().com.x.dms.buildWebDmObjectGraph = wrapped;
    }
    graphState.patched = true;
    return graphState.graph;
  },

  // --- Conversations (V2) ---
  conversationsV2: {
    async getInboxConversations(opts = {}) {
      const { assert$ } = createAssertionGroup('x-inbox-v2');
      async function getPreviews() {
        const state = await XPlatform.conversationsV2.conversationListSession.waitForConversationStateCondition();
        return state.previews ?? [];
      }
      for (; opts.loadAll && XPlatform.conversationsV2.conversationListSession.getConversationListState().hasMore; ) {
        const prev = await getPreviews();
        await sleep(1000);
        await XPlatform.conversationsV2.loadMoreInboxConversations();
      }
      const previews = await getPreviews();
      return [...previews]
        .reverse()
        .filter((p) => !p.isGroup)
        .map((p) => XPlatform.conversationsV2._serializeConversation(p));
    },
    async loadMoreInboxConversations() {
      const { component } = XPlatform.conversationsV2.conversationListSession.ensureConversationListSession();
      const state = XPlatform.conversationsV2.conversationListSession.getConversationListState();
      const len = state.previews.length;
      if (!state.hasMore) return state.previews;
      const evt = XPlatform.kotlin.get('com->x->dms->components->convlist->ConversationListEvent->ScrolledToBottomOfConversations');
      component.onEvent(evt);
      await XPlatform.conversationsV2.conversationListSession.waitForConversationStateCondition({
        shouldResolve: ({ previews, hasMore }) => previews.length > len || !hasMore,
      });
      return XPlatform.conversationsV2.conversationListSession.getConversationListState().previews;
    },
    async getConversation({ conversationId }) {
      const { assert$ } = createAssertionGroup('x-get-conv-v2');
      assert(conversationId, '', { sentry: false });
      assert(typeof conversationId === 'string', '', { sentry: false });
      const inbox = await XPlatform.conversationsV2.getInboxConversations();
      const conv = inbox.find((c) => c.conversation_id === conversationId);
      assert(conv, '', { sentry: 'never' });
      return conv;
    },
    _serializeConversation(preview) {
      const p = deepCloneKotlin(preview);
      p.conversation_id = (p.conversationId?.id ?? '').replace(':', '-');
      p.sort_timestamp = null;
      if (p.preview?.timestamp?.epochSeconds != null) {
        p.sort_timestamp = combineTimestamp(p.preview.timestamp.epochSeconds, p.preview.timestamp.nanosecondsOfSecond);
      } else if (p.preview?.timestamp) {
        p.sort_timestamp = new Date(p.preview.timestamp).getTime() / 1000;
      }
      p.dmPermissions = p.metadata?.metadata?.dmPermissions;
      p.readOnlyReason = p.metadata?.readOnlyReason?.name;
      const other = p.metadata?.metadata?.otherUsers?.[0];
      if (other) {
        other.userId = other.id?.userId ?? other.id;
        p.otherUser = other;
      }
      return p;
    },
    react: {
      findConversationListComponent() {
        const { message$, assert$ } = createAssertionGroup('x-conv-list-component');
        const found = findInReactTree({
          key: 'x:conversation-list-component',
          filter: (node) => {
            const comp = node?.component;
            if (!comp || typeof comp.onEvent !== 'function') return false;
            try {
              const state = XPlatform.flow.readFlowValue(comp);
              return state && ['previews', 'conversations'].some((k) => k in state);
            } catch {
              return false;
            }
          },
          mustHaveKeys: ['component'],
          mustHaveNestedKeys: ['previews', 'conversations'],
        });
        if (!found) return null;
        assert(found.component, '', { sentry: 'rare' });
        return found.component;
      },
    },
    conversationListSession: {
      getConversationListState() {
        const { assert$ } = createAssertionGroup('x-cls-state');
        const { component } = XPlatform.conversationsV2.conversationListSession.ensureConversationListSession();
        assert(component, '', { sentry: 'rare' });
        const state = XPlatform.flow.readFlowValue(component);
        assert(state, '', { sentry: 'rare' });
        const previews = XPlatform.flow.toJsArray(state.previews ?? state.conversations);
        assert(previews, '', { sentry: 'rare' });
        return {
          state,
          previews,
          isInitializing: Boolean(state?.isInitializing),
          hasMore: Boolean(state?.hasMoreItemsInfo),
          hasLoaded: (!state?.isInitializing && !state?.isLoadingConversations) || previews.length > 0,
        };
      },
      ensureConversationListSession(opts = { allowComponentCreation: true }) {
        const { assert$ } = createAssertionGroup('x-cls-ensure');
        if (conversationListSessionCache) return conversationListSessionCache;
        const comp = XPlatform.conversationsV2.react.findConversationListComponent();
        assert(comp || opts.allowComponentCreation, '', { sentry: 'rare' });
        if (comp) {
          conversationListSessionCache = { component: comp, isOriginal: true };
          return conversationListSessionCache;
        }
        const graph = XPlatform.getDmGraph();
        const CancellationSignal = XPlatform.kotlin.getCancellationSignal();
        const Callbacks = XPlatform.kotlin.get('com->x->dms->components->convlist->ConversationListCallbacks');
        const noop = () => {};
        const callbacks = new Callbacks(...Array.from({ length: Callbacks.length }, () => noop));
        const signal = new CancellationSignal();
        const clc = graph.conversationListComponent(callbacks, signal);
        conversationListSessionCache = { component: clc, cancellation: signal, isOriginal: false };
        return conversationListSessionCache;
      },
      async waitForConversationStateCondition(opts = {}) {
        const { message$ } = createAssertionGroup('x-cls-wait');
        await XPlatform.waitFor({
          shouldResolve: () => {
            const s = XPlatform.conversationsV2.conversationListSession.getConversationListState();
            return s.hasLoaded && (!opts.shouldResolve || opts.shouldResolve(s));
          },
          assert: message$(1, '', { sentry: 'never' }, true),
          timeoutMs: opts.timeoutMs,
          pollMs: opts.pollMs,
        });
        return XPlatform.conversationsV2.conversationListSession.getConversationListState();
      },
      releaseConversationListSession() {
        if (conversationListSessionCache) {
          if (!conversationListSessionCache.isOriginal) {
            conversationListSessionCache.cancellation?.cancel?.();
            conversationListSessionCache.component?.dispose?.();
          }
          conversationListSessionCache = null;
        }
      },
    },
  },

  // --- Users (shared) ---
  users: {
    getCurrentUserId() {
      const { assert$ } = createAssertionGroup('x-current-user-id');
      return assert(XPlatform.store.access('session->user_id'), '', { sentry: 'veryRare' });
    },
    getCurrentUser() {
      const { assert$ } = createAssertionGroup('x-current-user');
      const id = XPlatform.users.getCurrentUserId();
      return assert(XPlatform.users.getUserById({ userId: id }), '', { sentry: false });
    },
    getUserById({ userId }) {
      const { assert$ } = createAssertionGroup('x-user-by-id');
      assert(userId, '', { sentry: false });
      assert(typeof userId === 'string', '', { sentry: false });
      return XPlatform.store.access(`entities->users->entities->${userId}`);
    },
    getUserByName({ username }) {
      const { assert$ } = createAssertionGroup('x-user-by-name');
      assert(username && typeof username === 'string', '', { sentry: false });
      const entities = XPlatform.store.access('entities->users->entities');
      return Object.values(entities ?? {}).find((u) => u.screen_name === username);
    },
    async fetchUserById({ userId }) {
      const { assert$ } = createAssertionGroup('x-fetch-user-id');
      assert(userId && typeof userId === 'string', '', { sentry: false });
      let u = XPlatform.users.getUserById({ userId });
      if (u) return u;
      await XPlatform.dispatchers.entities.call('users->fetchOneIfNeeded', userId);
      return XPlatform.users.getUserById({ userId });
    },
    async fetchUserByName({ username }) {
      const { assert$ } = createAssertionGroup('x-fetch-user-name');
      assert(username && typeof username === 'string', '', { sentry: false });
      await XPlatform.dispatchers.entities.call('users->fetchOneByScreenNameIfNeeded', username);
      return XPlatform.users.getUserByName({ username });
    },
    async getUsers() {
      if (XPlatform.isV1()) {
        return XPlatform.store.access('entities->users->entities') ?? {};
      }
      const inbox = await XPlatform.conversationsV2.getInboxConversations();
      return XPlatform._collectUsersFromPreviews(inbox).reduce((acc, u) => {
        if (u?.userId) acc[u.userId] = u;
        return acc;
      }, {});
    },
    async getPermissions({ userId }) {
      const { assert$ } = createAssertionGroup('x-permissions');
      assert(userId && typeof userId === 'string', '', { sentry: false });
      const res = await XPlatform.endpoint.call('fetchPermissions', { recipient_ids: [userId] });
      return res?.permissions?.id_keys?.[userId];
    },
    async hasPremium() {
      const tiers = ['premium_standard', 'premium_plus', 'premium_basic'];
      for (const tier of tiers) {
        const v = await XPlatform.store.access(`userClaim->config->subscriptions->${tier}`);
        if (v?.value === 'true') return true;
      }
      return false;
    },
  },

  // --- DM Sessions (V2) ---
  dmSessions: {
    startSession({ conversationId }) {
      if (XPlatform.isV1()) return;
      const { assert$ } = createAssertionGroup('x-dm-start');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: 'veryRare' });
      if (dmSessionsMap.size >= 25) {
        const toRelease = Array.from(dmSessionsMap.values()).slice(0, dmSessionsMap.size - 25 + 1);
        for (const s of toRelease) {
          XPlatform.dmSessions.releaseDmSession({ conversationId: s.conversationId });
        }
      }
      XPlatform.dmSessions.ensureDmSession({ conversationId });
    },
    stopSession({ conversationId }) {
      if (XPlatform.isV1()) return;
      const { assert$ } = createAssertionGroup('x-dm-stop');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: 'veryRare' });
      XPlatform.dmSessions.releaseDmSession({ conversationId });
    },
    ensureDmSession({ conversationId }) {
      const { assert$ } = createAssertionGroup('x-dm-ensure');
      const existing = dmSessionsMap.get(conversationId);
      if (existing) return existing;
      const graph = XPlatform.getDmGraph();
      const DmCallbacks = XPlatform.kotlin.get('com->x->dms->components->chat->DmCallbacks');
      const XConvId = XPlatform.kotlin.get('com->x->models->dm->XConversationId->Companion');
      const CancellationSignal = XPlatform.kotlin.getCancellationSignal();
      const convId = assert(XConvId.fromStringRequired(conversationId), '', { sentry: 'rare' });
      const callbacks = new DmCallbacks(...Array.from({ length: 19 }, () => () => {}));
      const cancel = new CancellationSignal();
      const component = graph.dmComponent(convId, callbacks, cancel, null);
      const entry = { component, cancellation: cancel, conversationId };
      dmSessionsMap.set(conversationId, entry);
      return entry;
    },
    releaseDmSession({ conversationId }) {
      const entry = dmSessionsMap.get(conversationId);
      if (!entry) return false;
      dmSessionsMap.delete(conversationId);
      entry.cancellation?.cancel?.();
      entry.component?.dispose?.();
      return true;
    },
  },

  // --- Messages V2 ---
  messagesV2: {
    async processMessages({ conversationId }) {
      const { assert$ } = createAssertionGroup('x-msg-v2-process');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: false });
      const conv = await XPlatform.conversationsV2.getConversation({ conversationId });
      const otherUserId = conv.otherUser.userId;
      const items = await XPlatform.messagesV2.getMessages({ conversationId });
      const types = ['sentmessage', 'receivedmessage', 'pendingmessage'];
      const msgs = items.filter((m) =>
        types.some((t) => (m.contentType ?? '').toLowerCase().includes(t))
      );
      const currentUserId = XPlatform.users.getCurrentUserId();
      return msgs.map((m) =>
        XPlatform.messagesV2._processMessage({
          ir: { message: m, currentUserId, otherUserId },
        })
      );
    },
    _processMessage({ ir: { message, currentUserId, otherUserId } }) {
      const id = message.id ?? message.sequenceNumber?.str;
      const textContent = message.textContent;
      let timestamp = null;
      if (message.created?.epochSeconds != null) {
        timestamp = combineTimestamp(message.created.epochSeconds, message.created.nanosecondsOfSecond);
      } else if (message.created) {
        timestamp = new Date(message.created).getTime() / 1000;
      }
      const isIncoming = message.senderInfo?.userId?.userId !== currentUserId;
      const att = message.attachment;
      const attType = (att?.type?.name ?? '').toLowerCase();
      const hasGif = (att?.previewUrl?.includes('dm_gif')) || attType === 'gif';
      const hasPhoto = attType === 'image';
      const hasVideo = attType === 'video';
      const hasAudio = attType === 'audio';
      const hasFile = attType === 'file';
      const postState = att?.postState;
      const post = postState?.post;
      const author = post?.author;
      const tweetCreator = author?.screenName;
      const tweetText = post?.text?.slice(0, 100);
      const mediaTags = post?.media?.map((m) => `</${m.type}>`) ?? [];
      let tweetTextFull = null;
      if (tweetText) tweetTextFull = `<post> ${tweetText}</post> ` + mediaTags.join(' ');
      const hasOurTweet = author?.id === currentUserId;
      const hasTheirTweet = author?.id === otherUserId;
      return annotateMessage(
        cleanFalsy(
          {
            id,
            msg: textContent,
            isIncoming,
            timestamp,
            hasGif,
            hasPhoto,
            hasVideo,
            hasAudio,
            hasFile,
            isReply: !!message.replyPreview,
            hasTweet: !!postState,
            tweetText: tweetTextFull,
            tweetCreator,
            hasOurTweet,
            hasTheirTweet,
          },
          { deep: false }
        )
      );
    },
    async getMessages({ conversationId }) {
      const { assert$ } = createAssertionGroup('x-msg-v2-get');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: 'veryRare' });
      const { component } = XPlatform.dmSessions.ensureDmSession({ conversationId });
      let data = await XPlatform.messagesV2.waitForChatItems({ component });
      if (data.hasMore && !data.items?.length) {
        await XPlatform.messagesV2.paginateMessages({ conversationId });
        data = await XPlatform.messagesV2.waitForChatItems({ component });
      }
      return data.items.map((i) => deepCloneKotlin(i)).reverse();
    },
    async paginateMessages({ conversationId }) {
      const { assert$ } = createAssertionGroup('x-msg-v2-paginate');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: 'veryRare' });
      const { component } = XPlatform.dmSessions.ensureDmSession({ conversationId });
      const data = await XPlatform.messagesV2.waitForChatItems({ component });
      if (!data.hasMore) return data.items;
      const DmEvent = XPlatform.kotlin.getDmEvent();
      component.onEvent(new DmEvent.ScrolledToTop(data.olderItemsInfo));
      const minItems = data.items.length + 1;
      await XPlatform.messagesV2.waitForChatItems({ component, minItems, minDelta: minItems });
      const next = await XPlatform.messagesV2.waitForChatItems({ component, timeoutMs: 1 });
      return next.items;
    },
    getChatItemsData({ component }) {
      const state = XPlatform.flow.readFlowValue(component);
      const holder = state?.chatItems;
      const items = XPlatform.flow.toJsArray(holder?.items);
      return {
        state,
        holder,
        items,
        isLoading: holder?.isLoading ?? null,
        didPullFail: holder?.didPullFail ?? null,
        hasMore: Boolean(holder?.olderItemsInfo),
        olderItemsInfo: holder?.olderItemsInfo ?? null,
      };
    },
    async waitForChatItems({ component, timeoutMs, pollMs, minItems, minDelta }) {
      const { message$ } = createAssertionGroup('x-msg-v2-wait');
      await XPlatform.waitFor({
        shouldResolve: () => {
          const d = XPlatform.messagesV2.getChatItemsData({ component });
          const ready = d.items && (d.isLoading === false || d.didPullFail || d.items.length > 0);
          const minOk = minItems == null || d.items.length >= minItems;
          const deltaOk = minDelta == null || d.items.length >= minDelta;
          return ready && minOk && deltaOk;
        },
        assert: message$(1, '', { sentry: 'never' }, true),
        timeoutMs,
        pollMs,
      });
      return XPlatform.messagesV2.getChatItemsData({ component });
    },
    async sendMessage({ conversationId, message, blob, blobExtension }) {
      const { assert$ } = createAssertionGroup('x-msg-v2-send');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: 'veryRare' });
      assert(message != null || blob != null, '', { sentry: 'veryRare' });
      assert(message == null || typeof message === 'string', '', { sentry: 'veryRare' });
      assert(blob == null || blob instanceof Blob, '', { sentry: 'veryRare' });
      assert(!(blob && message), '', { sentry: 'veryRare' });
      const composer = XPlatform.dmSessions.ensureDmSession({ conversationId }).component.composer;
      const ChatComposerEvent = XPlatform.kotlin.getChatComposerEvent();
      if (blob) {
        await XPlatform.messagesV2.attachMedia({ composer, blob, extension: blobExtension });
      }
      if (message) {
        composer.onEvent(new ChatComposerEvent.UserChangedText(message, message.length));
      }
      const rightBtn = await XPlatform.messagesV2.waitForSendReady({ composer });
      composer.onEvent(new ChatComposerEvent.RightButtonClicked(rightBtn));
      return { conversationId, text: message, hasAttachment: Boolean(blob), didSend: true };
    },
    async attachMedia({ composer, blob, extension }) {
      const { assert$ } = createAssertionGroup('x-msg-v2-attach');
      assert(blob instanceof Blob, '', { sentry: 'veryRare' });
      const ChatComposerEvent = XPlatform.kotlin.getChatComposerEvent();
      const ext = extension || 'bin';
      const mime = blob.type || 'application/octet-stream';
      const filename = `${randomString(10)}-${Date.now()}.${ext}`.replace(/[^\w.-]/g, '_');
      const file = new File([blob], filename, { type: mime });
      composer.onEvent(ChatComposerEvent.OnFileAttachmentStarted);
      const tempPath = await XPlatform.messagesV2.createTempPath({ file });
      composer.onEvent(new ChatComposerEvent.OnFileAttached(tempPath));
      return tempPath;
    },
    async createTempPath({ file }) {
      const { message$ } = createAssertionGroup('x-write-file');
      const writeFile = XPlatform.findModule({
        key: 'writeFile',
        assert: message$(1, '', { sentry: 'rare' }, true),
        assertExport: message$(2, '', { sentry: 'rare' }, true),
        exportsMeta: { includes: ['action:"write'], matchesType: 'function' },
      })?.exportsMatched?.value;
      assert(writeFile, '', { sentry: 'rare' });
      const folder = 'temp-files';
      const name = `${Date.now()}-${file.name}`.replace(/\s/g, '_');
      await writeFile({ filename: name, folderLocation: { relativePath: folder } }, file);
      return `${folder}/${name}`;
    },
    async waitForSendReady({ composer }) {
      const { message$, throw$ } = createAssertionGroup('x-send-ready');
      const RightButtonState = XPlatform.kotlin.get('com->x->dms->components->composer->RightButtonState');
      await XPlatform.waitFor({
        shouldResolve: () => {
          const state = XPlatform.flow.readFlowValue(composer);
          if (state?.readOnlyReason) throw throw$(1, '', { sentry: 'never' }, true);
          return state?.rightButton === RightButtonState.SendActive;
        },
        assert: message$(2, '', { sentry: 'never' }, true),
        timeoutMs: 10000,
      });
      return XPlatform.flow.readFlowValue(composer).rightButton;
    },
    async markConversationAsRead({ conversationId }) {
      const { assert$ } = createAssertionGroup('x-mark-read-v2');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: 'veryRare' });
      const { component } = XPlatform.dmSessions.ensureDmSession({ conversationId });
      const data = await XPlatform.messagesV2.waitForChatItems({ component });
      const MsgReceived = XPlatform.kotlin.get('com->x->dm->api->model->MessageItemReceived');
      const MsgSent = XPlatform.kotlin.get('com->x->dm->api->model->MessageItemSent');
      const MsgPending = XPlatform.kotlin.get('com->x->dm->api->model->MessageItemPending');
      const sequences = data.items
        .filter((i) => i instanceof MsgReceived || i instanceof MsgSent || i instanceof MsgPending)
        .map((i) => i.sequenceNumber)
        .filter(Boolean);
      if (sequences.length === 0) return;
      const KtList = XPlatform.kotlin.get('kotlin->collections->KtList');
      const list = KtList.fromJsArray(sequences);
      const DmEvent = XPlatform.kotlin.getDmEvent();
      component.onEvent(new DmEvent.VisibleReadableItemsChanged(true, list));
      return { conversationId, markedSequences: sequences.length };
    },
  },

  // --- Messages V1 ---
  messagesV1: {
    getEvent({ eventId }) {
      const { assert$ } = createAssertionGroup('x-msg-v1-event');
      assert(eventId && typeof eventId === 'string', '', { sentry: false });
      const entry = XPlatform.store.access(`directMessages->entries->entries->${eventId}`);
      return assert(entry?.data, '', { sentry: 'rare' });
    },
    getEvents({ conversationId }) {
      const { assert$ } = createAssertionGroup('x-msg-v1-events');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: false });
      const entries = assert(
        XPlatform.store.access('directMessages->entries'),
        '',
        { sentry: 'rare' }
      );
      const ids = assert(
        entries.entryIdsByConversationId[conversationId],
        '',
        { sentry: 'rare' }
      );
      const list = ids.map((id) => entries.entries[id]);
      return {
        loaded: list.filter((e) => e.isLoaded).map((e) => e.data),
        loading: list.filter((e) => !e.isLoaded),
      };
    },
  },

  // --- Unified Messages ---
  async sendMessageV1({ conversationId, text = '', localMediaId }) {
    const { assert$ } = createAssertionGroup('x-send-v1');
    assert(conversationId && typeof conversationId === 'string', '', { sentry: false });
    const requestId = XPlatform.requestId();
    try {
      const result = await XPlatform.dispatchers.call('sendMessage', {
        text,
        conversationId,
        senderId: XPlatform.users.getCurrentUserId(),
        requestId,
        localMediaId,
      });
      return { requestId, sendResult: result, didSend: result?.conversationId === conversationId };
    } catch (e) {
      return { requestId, didSend: false, error: e };
    }
  },

  // --- Conversations V1 ---
  conversationsV1: {
    sortConversations(convs, order) {
      return order === 'new-to-old'
        ? [...convs].sort((a, b) => b.sort_event_id - a.sort_event_id)
        : [...convs].sort((a, b) => a.sort_event_id - b.sort_event_id);
    },
    trusted(convs) {
      return convs.filter((c) => c.trusted);
    },
    untrusted(convs) {
      return convs.filter((c) => !c.trusted && !c.low_quality);
    },
    untrustedLowQuality(convs) {
      return convs.filter((c) => !c.trusted && c.low_quality);
    },
    async acceptConversation({ conversationId }) {
      const { assert$ } = createAssertionGroup('x-accept-conv');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: false });
      if (XPlatform.isV1()) {
        return XPlatform.dispatchers.conversation.call('acceptConversation', conversationId);
      }
      return XPlatform.dispatchers.call('acceptConversation', { conversationId });
    },
    async ignoreConversation({ conversationId }) {
      const { assert$ } = createAssertionGroup('x-ignore-conv');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: false });
      if (XPlatform.isV1()) {
        return XPlatform.dispatchers.conversation.call('leaveConversation', { conversationId });
      }
      return XPlatform.dispatchers.call('leaveConversation', { conversationId });
    },
    getOpenConversationId() {
      const { assert$ } = createAssertionGroup('x-open-conv-id');
      const m = window.location.href.match(/(\d+-\d+)/);
      return assert(m, '', { sentry: false })[1];
    },
    async fetchConversation({ conversationId }) {
      const { assert$ } = createAssertionGroup('x-fetch-conv');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: false });
      const res = await XPlatform.dispatchers.call('fetchConversation', { conversationId });
      return res?.result?.conversation_timeline?.conversations?.[conversationId];
    },
    async getInboxConversations(opts = {}) {
      if (XPlatform.isV1()) {
        const { assert$ } = createAssertionGroup('x-inbox-v1');
        const hasMore = () =>
          XPlatform.store.access('directMessages->inbox->cursors->trusted->status') !== 'HAS_MORE';
        const getConvs = () => XPlatform.store.access('directMessages->conversations');
        for (; opts.loadAll && !hasMore(); ) {
          await XPlatform.dispatchers.conversation.call('fetchTrustedInboxHistory');
          await sleep(1000);
        }
        const convs = assert(getConvs(), '', { sentry: 'rare' });
        const keys = Object.keys(convs ?? {});
        const list = keys
          .map((k) => convs[k])
          .map((c) => c.data)
          .filter((c) => c?.trusted);
        return XPlatform.conversationsV1.sortConversations(list, 'old-to-new');
      }
      return XPlatform.conversationsV2.getInboxConversations(opts);
    },
    async getInitialRequestsTimeline() {
      const { assert$ } = createAssertionGroup('x-initial-requests');
      const res = await XPlatform.endpoint.call('fetchUserInbox', {
        filter_low_quality: true,
        include_quality: 'all',
      });
      const state = assert(res?.result?.inbox_initial_state, '', {
        sentry: 'rare',
        networkResponse: res,
      });
      const timelines = assert(state.inbox_timelines, '', { sentry: 'rare', networkResponse: res });
      const trustedCursor =
        timelines.trusted?.status === 'HAS_MORE' ? timelines.trusted.min_entry_id : null;
      const untrustedCursor =
        timelines.untrusted?.status === 'HAS_MORE' ? timelines.untrusted.min_entry_id : null;
      const untrustedLqCursor =
        timelines.untrusted_low_quality?.status === 'HAS_MORE'
          ? timelines.untrusted_low_quality.min_entry_id
          : null;
      const convs = Object.values(state.conversations ?? {});
      return {
        trusted: {
          conversations: XPlatform.conversationsV1.sortConversations(
            XPlatform.conversationsV1.trusted(convs),
            'new-to-old'
          ),
          cursor: trustedCursor,
        },
        untrusted: {
          conversations: XPlatform.conversationsV1.sortConversations(
            XPlatform.conversationsV1.untrusted(convs),
            'new-to-old'
          ),
          cursor: untrustedCursor,
        },
        untrusted_low_quality: {
          conversations: XPlatform.conversationsV1.sortConversations(
            XPlatform.conversationsV1.untrustedLowQuality(convs),
            'new-to-old'
          ),
          cursor: untrustedLqCursor,
        },
      };
    },
    async getConversationRequests(opts = {}) {
      const { assert$ } = createAssertionGroup('x-conv-requests');
      if (!opts.cursor) {
        const timeline = await XPlatform.conversationsV1.getInitialRequestsTimeline();
        return opts.spam ? timeline.untrusted_low_quality : timeline.untrusted;
      }
      const res = await XPlatform.endpoint.call('fetchInboxHistory', {
        timelineType: 'untrusted',
        filter_low_quality: true,
        include_quality: opts.spam ? 'low' : 'high',
        max_id: opts.cursor,
      });
      const timeline = assert(res?.result?.inbox_timeline, '', {
        sentry: 'rare',
        extra: { fetchResult: res },
      });
      const convs = Object.values(timeline.conversations ?? {});
      const list = opts.spam
        ? XPlatform.conversationsV1.untrustedLowQuality(convs)
        : XPlatform.conversationsV1.untrusted(convs);
      return {
        cursor: timeline.status === 'HAS_MORE' ? timeline.min_entry_id : null,
        conversations: XPlatform.conversationsV1.sortConversations(list, 'new-to-old'),
      };
    },
    async getConversation({ conversationId, loadMessages }) {
      const { assert$ } = createAssertionGroup('x-get-conv');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: false });
      if (XPlatform.isV1()) {
        const convs = XPlatform.store.access('directMessages->conversations');
        const data = assert(convs?.[conversationId]?.data, '', { sentry: 'rare' });
        return {
          ...data,
          messages: loadMessages
            ? XPlatform.messagesV1.getEvents({ conversationId })
            : [],
        };
      }
      return XPlatform.conversationsV2.getConversation({ conversationId });
    },
    async getLastReadTimestamp({ conversationId }) {
      const { assert$ } = createAssertionGroup('x-last-read');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: false });
      if (!XPlatform.isV1()) return null;
      const conv = await XPlatform.conversationsV1.fetchConversation({ conversationId });
      const otherParticipant = assert(
        conv?.participants?.find((p) => p.user_id !== XPlatform.users.getCurrentUserId()),
        '',
        { sentry: 'rare' }
      );
      const lastReadId = otherParticipant?.last_read_event_id;
      if (!lastReadId) return null;
      const events = XPlatform.messagesV1.getEvents({ conversationId });
      const ev = events.loaded.find((e) => e.id === lastReadId);
      return ev?.time ?? null;
    },
    async recentlyActive({ conversationId }) {
      const ts = await XPlatform.conversationsV1.getLastReadTimestamp({ conversationId });
      return !!ts && Math.abs(Date.now() - ts) <= 30000;
    },
    encodeConversationId({ userId }) {
      const currentId = XPlatform.users.getCurrentUserId();
      if (XPlatform.isV1()) {
        const mod = XPlatform._getUserIdsToConversationModule();
        return mod.exportsMatched.value(userId, currentId);
      }
      return `${currentId}-${userId}`;
    },
    async conversationViewed({ conversationId }) {
      const { assert$ } = createAssertionGroup('x-conv-viewed');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: false });
      if (XPlatform.isV1()) {
        return XPlatform.dispatchers.call('markRead', conversationId);
      }
      return XPlatform.messagesV2.markConversationAsRead({ conversationId });
    },
  },

  _getUserIdsToConversationModule() {
    const { message$ } = createAssertionGroup('x-userids-conv');
    return XPlatform.findModule({
      key: 'userids-to-conversation',
      assert: message$(1, '', { sentry: 'rare' }, true),
      assertExport: message$(2, '', { sentry: 'rare' }, true),
      includes: ['.join("-")', /\[[\w$]+\s*,\s*[\w$]+\]\s*\.sort\s*\([^)]+\)\s*\.join\s*\(\s*"-"\s*\)/],
      includeNonLoaded: true,
      exportsMeta: { includes: ['join'] },
    });
  },

  // --- Followers ---
  followers: {
    async getPendingFollowers(opts = {}) {
      const res = await XPlatform.endpoint.call('fetchPendingFollowers', {
        cursor: opts.cursor ?? '-1',
      });
      return {
        cursor: res?.result?.next_cursor_str || null,
        ids: res?.result?.ids ?? [],
      };
    },
    async acceptPendingFollower({ userId }) {
      const { assert$ } = createAssertionGroup('x-accept-follower');
      assert(userId && typeof userId === 'string', '', { sentry: false });
      return XPlatform.dispatchers.call('acceptPendingFollower', { id_str: userId });
    },
    async declinePendingFollower({ userId }) {
      const { assert$ } = createAssertionGroup('x-decline-follower');
      assert(userId && typeof userId === 'string', '', { sentry: false });
      return XPlatform.dispatchers.call('declinePendingFollower', { id_str: userId });
    },
    async getFollowers(opts = {}) {
      const res = await XPlatform.endpoint.call('fetchFollowers', {
        count: 22,
        cursor: opts.cursor,
        userId: XPlatform.users.getCurrentUserId(),
      });
      const addEntries = res?.instructions?.find((i) => i.type === 'TimelineAddEntries');
      const users = addEntries?.entries
        ?.filter((e) => e.content?.itemContent?.itemType === 'TimelineUser')
        ?.map((e) => e.content.itemContent.user_results.result) ?? null;
      const bottom = addEntries?.entries?.find((e) => e.content?.cursorType === 'Bottom');
      return { users, cursor: bottom?.content?.value ?? null };
    },
    async getVerifiedFollowers(opts = {}) {
      const res = await XPlatform.endpoint.call('fetchVerifiedFollowers', {
        count: 22,
        cursor: opts.cursor,
        userId: XPlatform.users.getCurrentUserId(),
      });
      const addEntries = res?.instructions?.find((i) => i.type === 'TimelineAddEntries');
      const users = addEntries?.entries
        ?.filter((e) => e.content?.itemContent?.itemType === 'TimelineUser')
        ?.map((e) => e.content.itemContent.user_results.result) ?? null;
      const bottom = addEntries?.entries?.find((e) => e.content?.cursorType === 'Bottom');
      return { users, cursor: bottom?.content?.value ?? null };
    },
  },

  // --- Notifications ---
  notifications: {
    async fetchNotifications(opts = {}) {
      const res = await XPlatform.endpoint.call('fetchNotifications', {
        count: opts.count ?? 20,
        cursor: opts.cursor,
        timelineType: opts.timelineType ?? 'All',
      });
      const instructions = res?.timeline?.instructions;
      assert(instructions, '', { sentry: 'rare', extra: { fetchResult: res } });
      const addEntries = instructions.find((i) => i.addEntries?.entries?.length);
      assert(addEntries, '', { sentry: 'rare', extra: { instructions } });
      const bottom = (addEntries.addEntries?.entries ?? [])
        .map((e) => e.content?.operation?.cursor)
        .find((c) => c?.cursorType === 'Bottom');
      return { result: res, cursor: bottom?.value ?? null };
    },
    async fetchNotificationsForFollowers({ cursor, newerThanMs = 0 } = {}) {
      const { assert$ } = createAssertionGroup('x-notif-followers');
      const { result, cursor: nextCursor } = await XPlatform.notifications.fetchNotifications({ cursor });
      const addEntries = result?.timeline?.instructions?.find((i) => i.addEntries);
      assert(addEntries, '', { sentry: 'rare', extra: { notificationResult: result } });
      const entries = (result?.timeline?.instructions ?? [])
        .filter((i) => i.addEntries?.entries?.length)
        .flatMap((i) => i.addEntries.entries);
      const followEntries = entries.filter((e) =>
        e?.content?.item?.clientEventInfo?.element?.toLowerCase?.()?.includes('follow')
      );
      const users = result?.globalObjects?.users ?? {};
      const notifs = result?.globalObjects?.notifications ?? {};
      const byNotif = {};
      const notifData = {};
      let oldestMs = null;
      for (const ent of followEntries) {
        const notifId = ent?.content?.item?.content?.notification?.id;
        const fromUsers = ent?.content?.item?.content?.notification?.fromUsers;
        const n = notifs[notifId];
        const ts = n?.timestampMs;
        if (ts && (!oldestMs || ts < oldestMs)) oldestMs = ts;
        if (!ts || ts < newerThanMs) continue;
        if (notifId && fromUsers?.length) {
          byNotif[notifId] = fromUsers.map((uid) => ({
            ...users[uid],
            followedAtMs: ts,
          }));
        }
        if (notifId && n) notifData[notifId] = n;
      }
      const followers = Object.values(byNotif).flat();
      return {
        cursor: nextCursor,
        shouldContinue: nextCursor && (!oldestMs || oldestMs > newerThanMs),
        followers,
      };
    },
  },

  // --- Presence (V2) ---
  presence: {
    async startTyping({ conversationId }) {
      const { assert$ } = createAssertionGroup('x-presence-typing');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: 'veryRare' });
      const composer = XPlatform.dmSessions.ensureDmSession({ conversationId }).component.composer;
      const ChatComposerEvent = XPlatform.kotlin.getChatComposerEvent();
      const text = randomString(10);
      composer.onEvent(new ChatComposerEvent.UserChangedText(text, text.length));
      return { conversationId, text };
    },
    async isRecipientTyping({ conversationId }) {
      if (XPlatform.isV1()) return false;
      const { assert$ } = createAssertionGroup('x-presence-recipient');
      assert(conversationId && typeof conversationId === 'string', '', { sentry: 'veryRare' });
      const { component } = XPlatform.dmSessions.ensureDmSession({ conversationId });
      const state = XPlatform.flow.readFlowValue(component);
      return Boolean(state?.typingIndicatorItem);
    },
  },

  // --- hasLoaded ---
  hasLoadedV2() {
    try {
      return (
        !!XPlatform.kotlin.getExports() &&
        !!XPlatform.getDmGraph() &&
        !!XPlatform.conversationsV2.conversationListSession.getConversationListState().hasLoaded
      );
    } catch {
      return false;
    }
  },
  hasLoaded() {
    if (XPlatform.isV1()) {
      try {
        return (
          !!XPlatform.store.module() &&
          !!XPlatform.store.access('directMessages->conversations') &&
          XPlatform.store.access('directMessages->updates->isLoaded') != null
        );
      } catch {
        return false;
      }
    }
    return XPlatform.hasLoadedV2();
  },

  // --- Unified high-level API ---
  async getInboxConversations(opts = {}) {
    return XPlatform.conversationsV1.getInboxConversations(opts);
  },
  async getRequests(opts = {}) {
    return XPlatform.conversationsV1.getConversationRequests(opts);
  },
  async getConversation(opts) {
    return XPlatform.conversationsV1.getConversation(opts);
  },
  async acceptConversation({ conversationId }) {
    return XPlatform.conversationsV1.acceptConversation({ conversationId });
  },
  async ignoreConversation({ conversationId }) {
    return XPlatform.conversationsV1.ignoreConversation({ conversationId });
  },
  async processMessages({ conversationId }) {
    if (XPlatform.isV1()) {
      const conv = await XPlatform.conversationsV1.getConversation({ conversationId });
      const events = XPlatform.messagesV1.getEvents({ conversationId });
      const currentUser = XPlatform.users.getCurrentUser();
      const otherId = conv?.participants?.find((p) => p.user_id !== currentUser?.id_str)?.user_id;
      const conversationUser = otherId
        ? await XPlatform.users.getUserById({ userId: otherId })
        : null;
      assert(otherId, '', { sentry: 'rare' });
      assert(conversationUser, '', { sentry: 'rare' });
      const processed = await Promise.all(
        events.loaded.map(async (ev) =>
          XPlatform.messagesV1._processEvent({
            ir: { conversation: conv, event: ev, currentUser, conversationUser },
          })
        )
      );
      return processed.sort((a, b) => a.timestamp - b.timestamp);
    }
    return XPlatform.messagesV2.processMessages({ conversationId });
  },
  async sendMessage({ conversationId, message, blob, blobExtension }) {
    const { assert$ } = createAssertionGroup('x-send-msg');
    assert(conversationId && typeof conversationId === 'string', '', { sentry: false });
    if (XPlatform.isV1()) {
      if (blob) {
        return XPlatform.messagesV1.sendMedia({
          conversationId,
          blob,
          blobExtension,
          message,
        });
      }
      return XPlatform.sendMessageV1({ conversationId, text: message });
    }
    return XPlatform.messagesV2.sendMessage({
      conversationId,
      message,
      blob,
      blobExtension,
    });
  },
  async paginateMessages({ conversationId }) {
    if (XPlatform.isV1()) {
      return XPlatform.dispatchers.conversation.call('fetchConversationHistory', { conversationId });
    }
    return XPlatform.messagesV2.paginateMessages({ conversationId });
  },
  async markConversationAsRead({ conversationId }) {
    return XPlatform.conversationsV1.conversationViewed({ conversationId });
  },
  async retryMessage({ requestId }) {
    if (XPlatform.isV1()) return XPlatform.messagesV1.retryMessage({ requestId });
    throw new Error('V2 retry not implemented');
  },
  async startTyping({ conversationId }) {
    return XPlatform.presence.startTyping({ conversationId });
  },
  async isRecipientTyping({ conversationId }) {
    return XPlatform.presence.isRecipientTyping({ conversationId });
  },
};

// V1 event processing - placeholder (full impl requires tweet/card parsing)
XPlatform.messagesV1._processEvent = async function _processEvent({ ir: { event, currentUser, conversationUser } }) {
  const attrs = {
    id: event.id,
    msg: event.message_data?.text?.trim?.() ?? '',
    timestamp: event.time / 1000,
    isIncoming: currentUser?.id_str !== event.message_data?.sender_id,
    isReply: !!event.message_data?.reply_data,
    isReaction: event.type === 'reaction_create',
    hasPhoto: !!event.message_data?.attachment?.photo,
    hasVideo: !!event.message_data?.attachment?.video && !event.message_data?.attachment?.video?.audio_only,
    hasAudio: !!event.message_data?.attachment?.video?.audio_only,
    hasGif: !!event.message_data?.attachment?.animated_gif,
    hasTweet: !!event.message_data?.attachment?.tweet,
    hasOurTweet: false,
    hasTheirTweet: false,
    tweetCreator: null,
    isEvent: false,
    isCall: event.type === 'end_av_broadcast',
    isVideoCall: event.type === 'end_av_broadcast' && event.call_type === 'AUDIO_AND_VIDEO',
  };
  return annotateMessage(cleanFalsy(attrs, { deep: false }));
};

XPlatform.messagesV1.sendMedia = async function sendMedia({ conversationId, blob, blobExtension, message }) {
  const { assert$, message$ } = createAssertionGroup('x-send-media-v1');
  assert(blob instanceof Blob, '', { sentry: false });
  assert(conversationId, '', { sentry: false });
  assert(blobExtension && typeof blobExtension === 'string', '', { sentry: false });
  const uploadMod = XPlatform.findModule({
    key: 'uploadMedia',
    assert: message$(7, '', { sentry: 'rare' }, true),
    assertExport: message$(8, '', { sentry: 'rare' }, true),
    exportsMeta: { includes: ['allowDownloadStatus:'] },
  });
  const upload = uploadMod.exportsMatched.value;
  const file = new File([blob], `${randomString(5)}.${blobExtension}`, { type: blob.type });
  const mediaResult = await XPlatform.store.dispatch(upload([file], { location: 'dm' }));
  assert(mediaResult?.length === 1, '', { sentry: 'rare' });
  await XPlatform.store.dispatch({
    type: 'rweb/dmComposer/ADD_MEDIA',
    conversationId,
    payload: { mediaId: mediaResult[0].id },
  });
  return XPlatform.sendMessageV1({ conversationId, text: message });
};

XPlatform.messagesV1.retryMessage = async function retryMessage({ requestId }) {
  const { assert$ } = createAssertionGroup('x-retry-msg');
  assert(requestId && typeof requestId === 'string', '', { sentry: false });
  const ev = await XPlatform.messagesV1.getEvent({ eventId: requestId });
  return XPlatform.sendMessageV1({
    conversationId: ev.conversation_id,
    text: ev.message_data?.text,
    localMediaId: ev.message_data?.localMediaId,
  });
};

export default XPlatform;
