// src/utils/deep-clone.ts
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  if (obj instanceof Map) {
    return new Map(Array.from(obj.entries()).map(
      ([key, val]) => [deepClone(key), deepClone(val)]
    ));
  }
  if (obj instanceof Set) {
    return new Set(Array.from(obj.values()).map(
      (val) => deepClone(val)
    ));
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  const clonedObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

// src/utils/create-event-emmiter.ts
function createEventEmitter() {
  const listeners = {};
  return {
    on(event, listener) {
      (listeners[event] ?? (listeners[event] = [])).push(listener);
    },
    off(event, listener) {
      const arr = listeners[event];
      if (arr) {
        listeners[event] = arr.filter((l) => l !== listener);
      }
    },
    emit(event, ...args) {
      listeners[event]?.forEach((listener) => listener(...args));
    }
  };
}

// src/utils/memoize.ts
function memoize(fn) {
  const cache = /* @__PURE__ */ new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// src/utils/is-equal.ts
function isEqual(a, b) {
  if (Object.is(a, b))
    return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
    return false;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length)
    return false;
  return aKeys.every(
    (key) => isEqual(a[key], b[key])
  );
}

// src/utils/once.ts
function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

// src/utils/debounce.ts
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer)
      clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// src/utils/group-by.ts
function groupBy(array, key) {
  return array.reduce((acc, item) => {
    const k = item[key];
    const groupKey = String(k);
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});
}

// src/utils/merge-deep.ts
function mergeDeep(a, b) {
  const result = { ...a };
  for (const key in b) {
    if (typeof b[key] === "object" && b[key] !== null && !Array.isArray(b[key]) && typeof result[key] === "object" && result[key] !== null) {
      result[key] = mergeDeep(result[key], b[key]);
    } else {
      result[key] = b[key];
    }
  }
  return result;
}
export {
  createEventEmitter,
  debounce,
  deepClone,
  groupBy,
  isEqual,
  memoize,
  mergeDeep,
  once
};
//# sourceMappingURL=index.mjs.map