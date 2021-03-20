export function noop() {}
export var inBrowser = typeof window !== 'undefined'; // unknown type for Vue prop

export var UnknownProp = null; // eslint-disable-next-line

export function isDef(val) {
  return val !== undefined && val !== null;
} // eslint-disable-next-line @typescript-eslint/ban-types

export function isFunction(val) {
  return typeof val === 'function';
}
export function isObject(val) {
  return val !== null && typeof val === 'object';
}
export function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
export function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(key => {
    var _result$key;

    result = (_result$key = result[key]) != null ? _result$key : '';
  });
  return result;
}
export function pick(obj, keys, ignoreUndefined) {
  return keys.reduce((ret, key) => {
    if (!ignoreUndefined || obj[key] !== undefined) {
      ret[key] = obj[key];
    }

    return ret;
  }, {});
}