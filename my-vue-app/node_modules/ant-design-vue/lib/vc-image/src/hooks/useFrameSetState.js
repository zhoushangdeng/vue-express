"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFrameSetState;

var _raf = _interopRequireDefault(require("../../../_util/raf"));

var _vue = require("vue");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function useFrameSetState(initial) {
  var frame = (0, _vue.ref)(null);
  var state = (0, _vue.reactive)(_extends({}, initial));
  var queue = (0, _vue.ref)([]);

  var setFrameState = function setFrameState(newState) {
    if (frame.value === null) {
      queue.value = [];
      frame.value = (0, _raf.default)(function () {
        var memoState;
        queue.value.forEach(function (queueState) {
          memoState = _extends(_extends({}, memoState), queueState);
        });

        _extends(state, memoState);

        frame.value = null;
      });
    }

    queue.value.push(newState);
  };

  (0, _vue.onMounted)(function () {
    frame.value && _raf.default.cancel(frame.value);
  });
  return [state, setFrameState];
}