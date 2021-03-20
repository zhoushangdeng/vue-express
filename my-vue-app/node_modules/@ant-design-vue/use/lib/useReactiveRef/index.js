"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

function useReactiveRef() {
  var prevEle = null;
  var eleRef = (0, _vue.ref)(prevEle);

  function setEle(ele) {
    if (prevEle === ele) return;
    prevEle = ele;
    eleRef.value = prevEle;
  }

  return [eleRef, setEle];
}

var _default = useReactiveRef;
exports["default"] = _default;