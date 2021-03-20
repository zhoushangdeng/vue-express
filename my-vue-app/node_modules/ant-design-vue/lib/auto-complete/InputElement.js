"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vnode = require("../_util/vnode");

var _propsUtil = require("../_util/props-util");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var InputElement = function InputElement(_, _ref) {
  var attrs = _ref.attrs,
      slots = _ref.slots;

  var _a;

  var children = (0, _propsUtil.flattenChildren)((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))[0];
  return (0, _vnode.cloneElement)(children, _extends({}, attrs));
};

InputElement.inheritAttrs = false;
var _default = InputElement;
exports.default = _default;