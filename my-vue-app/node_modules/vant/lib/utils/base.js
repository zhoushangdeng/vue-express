"use strict";

exports.__esModule = true;
exports.noop = noop;
exports.isDef = isDef;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isPromise = isPromise;
exports.get = get;
exports.pick = pick;
exports.UnknownProp = exports.inBrowser = void 0;

function noop() {}

var inBrowser = typeof window !== 'undefined'; // unknown type for Vue prop

exports.inBrowser = inBrowser;
var UnknownProp = null; // eslint-disable-next-line

exports.UnknownProp = UnknownProp;

function isDef(val) {
  return val !== undefined && val !== null;
} // eslint-disable-next-line @typescript-eslint/ban-types


function isFunction(val) {
  return typeof val === 'function';
}

function isObject(val) {
  return val !== null && typeof val === 'object';
}

function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(key => {
    var _result$key;

    result = (_result$key = result[key]) != null ? _result$key : '';
  });
  return result;
}

function pick(obj, keys, ignoreUndefined) {
  return keys.reduce((ret, key) => {
    if (!ignoreUndefined || obj[key] !== undefined) {
      ret[key] = obj[key];
    }

    return ret;
  }, {});
}