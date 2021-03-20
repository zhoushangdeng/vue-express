"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable */
var Track = function Track(_, _ref) {
  var _ref2, _ref3;

  var attrs = _ref.attrs;
  var included = attrs.included,
      vertical = attrs.vertical,
      offset = attrs.offset,
      length = attrs.length,
      reverse = attrs.reverse,
      style = attrs.style,
      className = attrs.class;
  var positonStyle = vertical ? (_ref2 = {}, _defineProperty(_ref2, reverse ? 'top' : 'bottom', "".concat(offset, "%")), _defineProperty(_ref2, reverse ? 'bottom' : 'top', 'auto'), _defineProperty(_ref2, "height", "".concat(length, "%")), _ref2) : (_ref3 = {}, _defineProperty(_ref3, reverse ? 'right' : 'left', "".concat(offset, "%")), _defineProperty(_ref3, reverse ? 'left' : 'right', 'auto'), _defineProperty(_ref3, "width", "".concat(length, "%")), _ref3);

  var elStyle = _extends(_extends({}, style), positonStyle);

  return included ? (0, _vue.createVNode)("div", {
    "class": className,
    "style": elStyle
  }, null) : null;
};

Track.inheritAttrs = false;
var _default = Track;
exports.default = _default;