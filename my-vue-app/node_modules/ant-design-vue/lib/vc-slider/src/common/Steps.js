"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _classNames2 = _interopRequireDefault(require("../../../_util/classNames"));

var _warning = _interopRequireDefault(require("../../../_util/warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  (0, _warning.default)(dots ? step > 0 : true, 'Slider', '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat).sort(function (a, b) {
    return a - b;
  });

  if (dots && step) {
    for (var i = min; i <= max; i += step) {
      if (points.indexOf(i) === -1) {
        points.push(i);
      }
    }
  }

  return points;
};

var Steps = function Steps(_, _ref) {
  var attrs = _ref.attrs;
  var prefixCls = attrs.prefixCls,
      vertical = attrs.vertical,
      reverse = attrs.reverse,
      marks = attrs.marks,
      dots = attrs.dots,
      step = attrs.step,
      included = attrs.included,
      lowerBound = attrs.lowerBound,
      upperBound = attrs.upperBound,
      max = attrs.max,
      min = attrs.min,
      dotStyle = attrs.dotStyle,
      activeDotStyle = attrs.activeDotStyle;
  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = "".concat(Math.abs(point - min) / range * 100, "%");
    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? _extends(_extends({}, dotStyle), _defineProperty({}, reverse ? 'top' : 'bottom', offset)) : _extends(_extends({}, dotStyle), _defineProperty({}, reverse ? 'right' : 'left', offset));

    if (isActived) {
      style = _extends(_extends({}, style), activeDotStyle);
    }

    var pointClassName = (0, _classNames2.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-dot"), true), _defineProperty(_classNames, "".concat(prefixCls, "-dot-active"), isActived), _defineProperty(_classNames, "".concat(prefixCls, "-dot-reverse"), reverse), _classNames));
    return (0, _vue.createVNode)("span", {
      "class": pointClassName,
      "style": style,
      "key": point
    }, null);
  });
  return (0, _vue.createVNode)("div", {
    "class": "".concat(prefixCls, "-step")
  }, [elements]);
};

Steps.inheritAttrs = false;
var _default = Steps;
exports.default = _default;