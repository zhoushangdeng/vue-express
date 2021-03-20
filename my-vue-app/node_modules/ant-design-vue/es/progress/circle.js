import { createVNode as _createVNode } from "vue";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { defineComponent } from 'vue';
import { Circle as VCCircle } from '../vc-progress';
import PropTypes from '../_util/vue-types';
import { validProgress } from './utils';
import { ProgressProps } from './props';

var CircleProps = _extends(_extends({}, ProgressProps), {
  progressStatus: PropTypes.string
});

var statusColorMap = {
  normal: '#108ee9',
  exception: '#ff5500',
  success: '#87d068'
};

function getPercentage(_ref) {
  var percent = _ref.percent,
      successPercent = _ref.successPercent;
  var ptg = validProgress(percent);
  if (!successPercent) return ptg;
  var successPtg = validProgress(successPercent);
  return [successPercent, validProgress(ptg - successPtg)];
}

function getStrokeColor(_ref2) {
  var progressStatus = _ref2.progressStatus,
      successPercent = _ref2.successPercent,
      strokeColor = _ref2.strokeColor;
  var color = strokeColor || statusColorMap[progressStatus];
  if (!successPercent) return color;
  return [statusColorMap.success, color];
}

var Circle = defineComponent({
  props: CircleProps,
  setup: function setup(props, _ref3) {
    var slots = _ref3.slots;
    return function () {
      var _wrapperClassName;

      var prefixCls = props.prefixCls,
          width = props.width,
          strokeWidth = props.strokeWidth,
          trailColor = props.trailColor,
          strokeLinecap = props.strokeLinecap,
          gapPosition = props.gapPosition,
          gapDegree = props.gapDegree,
          type = props.type;
      var circleSize = width || 120;
      var circleStyle = {
        width: typeof circleSize === 'number' ? "".concat(circleSize, "px") : circleSize,
        height: typeof circleSize === 'number' ? "".concat(circleSize, "px") : circleSize,
        fontSize: "".concat(circleSize * 0.15 + 6, "px")
      };
      var circleWidth = strokeWidth || 6;
      var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
      var gapDeg = gapDegree || type === 'dashboard' && 75;
      var strokeColor = getStrokeColor(props);
      var isGradient = Object.prototype.toString.call(strokeColor) === '[object Object]';
      var wrapperClassName = (_wrapperClassName = {}, _defineProperty(_wrapperClassName, "".concat(prefixCls, "-inner"), true), _defineProperty(_wrapperClassName, "".concat(prefixCls, "-circle-gradient"), isGradient), _wrapperClassName);
      return _createVNode("div", {
        "class": wrapperClassName,
        "style": circleStyle
      }, [_createVNode(VCCircle, {
        "percent": getPercentage(props),
        "strokeWidth": circleWidth,
        "trailWidth": circleWidth,
        "strokeColor": strokeColor,
        "strokeLinecap": strokeLinecap,
        "trailColor": trailColor,
        "prefixCls": prefixCls,
        "gapDegree": gapDeg,
        "gapPosition": gapPos
      }, null), slots === null || slots === void 0 ? void 0 : slots.default()]);
    };
  }
});
export default Circle;