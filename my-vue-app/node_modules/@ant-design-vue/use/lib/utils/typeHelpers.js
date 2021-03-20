"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isComponentPublicInstance = isComponentPublicInstance;

function isComponentPublicInstance(instance) {
  return instance.$ !== undefined;
}