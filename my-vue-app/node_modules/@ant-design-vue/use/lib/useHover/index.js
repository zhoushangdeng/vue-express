"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

/**
 * useHover
 *
 * @param {Ref<HTMLElement>)} ele
 * @param {Options} [options]
 * @returns
 */
function useHover(target, options) {
  if (!target) {
    console.warn("fucntiuon useHover first parameter expect HTMLElement | Ref<HTMLElement>,bug got ".concat(target));
    return;
  }

  var isHovering = (0, _vue.ref)(null);

  var _ref = options || {},
      onEnter = _ref.onEnter,
      onLeave = _ref.onLeave;

  var onMouseEnter = function onMouseEnter(e) {
    if (onEnter) {
      onEnter(e);
    }

    isHovering.value = true;
  };

  var onMouseLeave = function onMouseLeave(e) {
    if (onLeave) {
      onLeave(e);
    }

    isHovering.value = false;
  };

  var _addListeners = function _addListeners(ele) {
    if (ele) {
      ele.addEventListener('mouseenter', onMouseEnter);
      ele.addEventListener('mouseleave', onMouseLeave);
    }
  };

  var _removeListeners = function _removeListeners(ele) {
    if (ele) {
      ele.removeEventListener('mouseenter', onMouseEnter);
      ele.removeEventListener('mouseleave', onMouseLeave);
    }
  };

  var removelistener = function removelistener() {
    _removeListeners(target.value);

    destoryWatcher();
  };

  var destoryWatcher = (0, _vue.watch)(target, function (newValue, oldValue) {
    if (newValue) {
      _addListeners(newValue);
    }

    if (oldValue) {
      _removeListeners(oldValue);
    }
  }, {
    flush: 'post'
  });
  return [isHovering, {
    actions: {
      removelistener: removelistener
    }
  }];
}

var _default = useHover;
exports["default"] = _default;