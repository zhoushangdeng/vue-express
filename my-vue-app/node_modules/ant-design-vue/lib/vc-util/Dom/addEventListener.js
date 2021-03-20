"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addEventListenerWrap;

var _supportsPassive = _interopRequireDefault(require("../../_util/supportsPassive"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addEventListenerWrap(target, eventType, cb, option) {
  if (target.addEventListener) {
    var opt = option;

    if (opt === undefined && _supportsPassive.default && (eventType === 'touchstart' || eventType === 'touchmove' || eventType === 'wheel')) {
      opt = {
        passive: false
      };
    }

    target.addEventListener(eventType, cb, opt);
  }

  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, cb);
      }
    }
  };
}