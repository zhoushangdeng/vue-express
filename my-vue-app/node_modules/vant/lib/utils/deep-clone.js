"use strict";

exports.__esModule = true;
exports.deepClone = deepClone;

var _deepAssign = require("./deep-assign");

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  if (typeof obj === 'object') {
    return (0, _deepAssign.deepAssign)({}, obj);
  }

  return obj;
}