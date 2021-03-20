import { createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import classNames from '../../../_util/classNames';
import { isValidElement } from '../../../_util/props-util';

var Marks = function Marks(_, _ref) {
  var attrs = _ref.attrs;
  var className = attrs.class,
      vertical = attrs.vertical,
      reverse = attrs.reverse,
      marks = attrs.marks,
      included = attrs.included,
      upperBound = attrs.upperBound,
      lowerBound = attrs.lowerBound,
      max = attrs.max,
      min = attrs.min,
      onClickLabel = attrs.onClickLabel;
  var marksKeys = Object.keys(marks);
  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = typeof marks[point] === 'function' ? marks[point](h) : marks[point];
    var markPointIsObject = _typeof(markPoint) === 'object' && !isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;

    if (!markLabel && markLabel !== 0) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(className, "-text"), true), _defineProperty(_classNames, "".concat(className, "-text-active"), isActive), _classNames));

    var bottomStyle = _defineProperty({
      marginBottom: '-50%'
    }, reverse ? 'top' : 'bottom', "".concat((point - min) / range * 100, "%"));

    var leftStyle = _defineProperty({
      transform: "translateX(-50%)",
      msTransform: "translateX(-50%)"
    }, reverse ? 'right' : 'left', reverse ? "".concat((point - min / 4) / range * 100, "%") : "".concat((point - min) / range * 100, "%"));

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? _extends(_extends({}, style), markPoint.style) : style;
    return _createVNode("span", {
      "class": markClassName,
      "style": markStyle,
      "key": point,
      "onMousedown": function onMousedown(e) {
        return onClickLabel(e, point);
      },
      "onTouchstart": function onTouchstart(e) {
        return onClickLabel(e, point);
      }
    }, [markLabel]);
  });
  return _createVNode("div", {
    "class": className
  }, [elements]);
};

Marks.inheritAttrs = false;
export default Marks;