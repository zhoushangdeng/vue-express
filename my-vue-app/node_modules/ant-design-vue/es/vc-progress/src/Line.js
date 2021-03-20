import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { defineComponent } from 'vue';
import { initDefaultProps } from '../../_util/props-util';
import enhancer from './enhancer';
import { propTypes, defaultProps } from './types';
var Line = defineComponent({
  name: 'Line',
  props: initDefaultProps(propTypes, defaultProps),
  created: function created() {
    this.paths = {};
  },
  render: function render() {
    var _this = this;

    var _a = this.$props,
        percent = _a.percent,
        prefixCls = _a.prefixCls,
        strokeColor = _a.strokeColor,
        strokeLinecap = _a.strokeLinecap,
        strokeWidth = _a.strokeWidth,
        trailColor = _a.trailColor,
        trailWidth = _a.trailWidth,
        transition = _a.transition,
        restProps = __rest(_a, ["percent", "prefixCls", "strokeColor", "strokeLinecap", "strokeWidth", "trailColor", "trailWidth", "transition"]);

    delete restProps.gapPosition;
    var percentList = Array.isArray(percent) ? percent : [percent];
    var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];
    var center = strokeWidth / 2;
    var right = 100 - strokeWidth / 2;
    var pathString = "M ".concat(strokeLinecap === 'round' ? center : 0, ",").concat(center, "\n           L ").concat(strokeLinecap === 'round' ? right : 100, ",").concat(center);
    var viewBoxString = "0 0 100 ".concat(strokeWidth);
    var stackPtg = 0;
    var pathFirst = {
      d: pathString,
      'stroke-linecap': strokeLinecap,
      stroke: trailColor,
      'stroke-width': trailWidth || strokeWidth,
      'fill-opacity': '0',
      class: "".concat(prefixCls, "-line-trail")
    };
    return _createVNode("svg", _objectSpread({
      "class": "".concat(prefixCls, "-line"),
      "viewBox": viewBoxString,
      "preserveAspectRatio": "none"
    }, restProps), [_createVNode("path", pathFirst, null), percentList.map(function (ptg, index) {
      var pathStyle = {
        strokeDasharray: "".concat(ptg, "px, 100px"),
        strokeDashoffset: "-".concat(stackPtg, "px"),
        transition: transition || 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
      };
      var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
      stackPtg += ptg;
      var pathProps = {
        key: index,
        d: pathString,
        'stroke-linecap': strokeLinecap,
        stroke: color,
        'stroke-width': strokeWidth,
        'fill-opacity': '0',
        class: "".concat(prefixCls, "-line-path"),
        style: pathStyle
      };
      return _createVNode("path", _objectSpread({
        "ref": function ref(c) {
          return _this.paths[index] = c;
        }
      }, pathProps), null);
    })]);
  }
});
export default enhancer(Line);