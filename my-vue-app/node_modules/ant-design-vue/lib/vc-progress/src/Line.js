"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _propsUtil = require("../../_util/props-util");

var _enhancer = _interopRequireDefault(require("./enhancer"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Line = (0, _vue.defineComponent)({
  name: 'Line',
  props: (0, _propsUtil.initDefaultProps)(_types.propTypes, _types.defaultProps),
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
    return (0, _vue.createVNode)("svg", _objectSpread({
      "class": "".concat(prefixCls, "-line"),
      "viewBox": viewBoxString,
      "preserveAspectRatio": "none"
    }, restProps), [(0, _vue.createVNode)("path", pathFirst, null), percentList.map(function (ptg, index) {
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
      return (0, _vue.createVNode)("path", _objectSpread({
        "ref": function ref(c) {
          return _this.paths[index] = c;
        }
      }, pathProps), null);
    })]);
  }
});

var _default = (0, _enhancer.default)(Line);

exports.default = _default;