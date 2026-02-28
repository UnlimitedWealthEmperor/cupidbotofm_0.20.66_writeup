export function createStore(name, defaults = {}) {
  let state = { ...defaults };
  let listeners = {};
  let nextId = 0;

  return {
    has: (key) => key in state,
    get: (key) => state[key],

    set(key, value, allowFn = true) {
      const resolved = typeof value === 'function' && allowFn ? value(state[key]) : value;
      state[key] = resolved;
      listeners[key]?.forEach(({ fn }) => fn(resolved));
      return resolved;
    },

    dispatch: (key, ...args) => state[key](...args),

    subscribe(key, fn) {
      if (!listeners[key]) listeners[key] = [];
      const id = nextId++;
      listeners[key].push({ id, fn });
      return {
        unsubscribe: () => {
          listeners[key] = listeners[key].filter((l) => l.id !== id);
        },
      };
    },

    delete(key) {
      delete state[key];
    },

    restore() {
      state = { ...defaults };
    },
  };
}
