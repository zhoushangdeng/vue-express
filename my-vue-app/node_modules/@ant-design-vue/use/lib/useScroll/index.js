"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useScroll;

var _vue = require("vue");

var _useEventListener = _interopRequireDefault(require("../useEventListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useScroll(target) {
  var position = (0, _vue.ref)({
    left: 0,
    top: 0
  });

  var updatePosition = function updatePosition(currentTarget) {
    var newPosition;

    if (currentTarget === document) {
      if (!document.scrollingElement) return;
      newPosition = {
        left: document.scrollingElement.scrollLeft,
        top: document.scrollingElement.scrollTop
      };
    } else {
      newPosition = {
        left: currentTarget.scrollLeft,
        top: currentTarget.scrollTop
      };
    }

    position.value = newPosition;
  };

  var listener = function listener(event) {
    if (!event.target) return;
    updatePosition(event.target);
  };

  (0, _useEventListener["default"])(target, {
    type: 'scroll',
    listener: listener
  });
  return position;
}