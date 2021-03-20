"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useSize(target) {
  var elRef = target || (0, _vue.ref)(null);
  var state = (0, _vue.reactive)({
    width: (elRef || {}).clientWidth,
    height: (elRef || {}).clientHeight
  });
  (0, _vue.onMounted)(function () {
    var resizeObserver = null;
    (0, _vue.watch)(elRef, function (el, preElm, onInvalidate) {
      if (!el) return;
      resizeObserver && resizeObserver.disconnect();
      resizeObserver = new _resizeObserverPolyfill["default"](function (entries) {
        entries.forEach(function (entry) {
          state.width = entry.target.clientWidth;
          state.height = entry.target.clientHeight;
        });
      });
      resizeObserver.observe(el);
      onInvalidate(function () {
        resizeObserver && resizeObserver.disconnect();
      });
    }, {
      immediate: true
    });
  });
  return [state, elRef];
}

var _default = useSize;
exports["default"] = _default;