"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _classNames = _interopRequireDefault(require("../../../../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../../../../_util/vue-types"));

var _util = require("../../util");

var _propsUtil = require("../../../../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../../../../_util/BaseMixin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Selection = {
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    prefixCls: _vueTypes.default.string,
    maxTagTextLength: _vueTypes.default.number,
    // onRemove: PropTypes.func,
    label: _vueTypes.default.any,
    value: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    removeIcon: _vueTypes.default.any
  },
  methods: {
    onRemove: function onRemove(event) {
      var value = this.$props.value;

      this.__emit('remove', event, value);

      event.stopPropagation();
    }
  },
  render: function render() {
    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        maxTagTextLength = _this$$props.maxTagTextLength,
        label = _this$$props.label,
        value = _this$$props.value;
    var content = label || value;

    if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
      content = "".concat(content.slice(0, maxTagTextLength), "...");
    }

    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        style = _this$$attrs.style,
        onRemove = _this$$attrs.onRemove;
    return (0, _vue.createVNode)("span", _objectSpread(_objectSpread({
      "style": _extends(_extends({}, _util.UNSELECTABLE_STYLE), style)
    }, _util.UNSELECTABLE_ATTRIBUTE), {}, {
      "role": "menuitem",
      "class": (0, _classNames.default)("".concat(prefixCls, "-selection-item"), className),
      "title": (0, _util.toTitle)(label)
    }), [(0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-selection-item-content")
    }, [content]), onRemove && (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-selection-item-remove"),
      "onClick": this.onRemove
    }, [(0, _propsUtil.getComponent)(this, 'removeIcon')])]);
  }
};
var _default = Selection;
exports.default = _default;