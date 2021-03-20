"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTargetElement = getTargetElement;

function getTargetElement(target, defaultElement) {
  if (!target) {
    return defaultElement;
  }

  var targetElement;

  if (typeof target === 'function') {
    targetElement = target();
  } else {
    targetElement = target;
  }

  return targetElement;
}