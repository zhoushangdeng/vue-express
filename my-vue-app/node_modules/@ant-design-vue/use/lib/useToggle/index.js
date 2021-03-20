"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

function useToggle() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var reverseValue = arguments.length > 1 ? arguments[1] : undefined;
  reverseValue = reverseValue === undefined ? !defaultValue : reverseValue;
  var stateRef = (0, _vue.ref)(defaultValue);

  function toggle(value) {
    if (value === undefined) {
      stateRef.value = stateRef.value === defaultValue ? reverseValue : defaultValue;
      return;
    }

    if (value === defaultValue || value === reverseValue) {
      stateRef.value = value;
    } else {
      stateRef.value = stateRef.value === defaultValue ? reverseValue : defaultValue;
      console.warn("Function toggle parameter must be ".concat(defaultValue, " or ").concat(reverseValue));
    }

    return;
  }

  function setLeft() {
    stateRef.value = defaultValue;
  }

  function setRight() {
    stateRef.value = reverseValue;
  }

  var actions = {
    toggle: toggle,
    setLeft: setLeft,
    setRight: setRight
  };
  return [stateRef, actions];
}

var _default = useToggle;
exports["default"] = _default;