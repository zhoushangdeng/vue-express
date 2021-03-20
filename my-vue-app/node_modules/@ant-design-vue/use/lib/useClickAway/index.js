"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useClickAway;

var _vue = require("vue");

var _useEventListener = _interopRequireDefault(require("../useEventListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 鼠标点击事件，click 不会监听右键
var defaultEvent = 'click';

function useClickAway(ele, onClickAway) {
  var eventName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEvent;
  var container = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;

  function onClickAwayFn(e) {
    var dom = ele.value;

    if (!dom || dom.contains(e.target)) {
      return;
    }

    onClickAway(e);
  }

  var removeListener;

  if ((0, _vue.isRef)(container)) {
    removeListener = (0, _useEventListener["default"])(container, {
      type: eventName,
      listener: onClickAwayFn
    });
  } else {
    container.addEventListener(eventName, onClickAwayFn);

    removeListener = function removeListener() {
      container.removeEventListener(eventName, onClickAwayFn);
    };
  }

  return removeListener;
}