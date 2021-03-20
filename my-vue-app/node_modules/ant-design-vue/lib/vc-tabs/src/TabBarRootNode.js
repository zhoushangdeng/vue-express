"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vnode = require("../../_util/vnode");

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function noop() {}

var _default = {
  name: 'TabBarRootNode',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    saveRef: _vueTypes.default.func.def(noop),
    getRef: _vueTypes.default.func.def(noop),
    prefixCls: _vueTypes.default.string.def(''),
    tabBarPosition: _vueTypes.default.string.def('top'),
    extraContent: _vueTypes.default.any
  },
  methods: {
    onKeyDown: function onKeyDown(e) {
      this.__emit('keydown', e);
    }
  },
  render: function render() {
    var _cls;

    var prefixCls = this.prefixCls,
        onKeyDown = this.onKeyDown,
        tabBarPosition = this.tabBarPosition,
        extraContent = this.extraContent;

    var _a = this.$attrs,
        className = _a.class,
        style = _a.style,
        onKeydown = _a.onKeydown,
        restProps = __rest(_a, ["class", "style", "onKeydown"]);

    var cls = (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-bar"), true), _defineProperty(_cls, className, !!className), _cls);
    var topOrBottom = tabBarPosition === 'top' || tabBarPosition === 'bottom';
    var tabBarExtraContentStyle = topOrBottom ? {
      float: 'right'
    } : {};
    var children = (0, _propsUtil.getSlot)(this);
    var newChildren = children;

    if (extraContent) {
      newChildren = [(0, _vnode.cloneElement)(extraContent, {
        key: 'extra',
        style: _extends({}, tabBarExtraContentStyle)
      }), (0, _vnode.cloneElement)(children, {
        key: 'content'
      })];
      newChildren = topOrBottom ? newChildren : newChildren.reverse();
    }

    return (0, _vue.createVNode)("div", _objectSpread({
      "role": "tablist",
      "class": cls,
      "tabindex": "0",
      "onKeydown": onKeyDown,
      "style": style,
      "ref": this.saveRef('root')
    }, (0, _utils.getDataAttr)(restProps)), [newChildren]);
  }
};
exports.default = _default;