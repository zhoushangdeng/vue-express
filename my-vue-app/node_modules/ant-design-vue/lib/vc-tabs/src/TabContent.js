"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _vnode = require("../../_util/vnode");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _vue.defineComponent)({
  name: 'TabContent',
  inheritAttrs: false,
  props: {
    animated: _vueTypes.default.looseBool.def(true),
    animatedWithMargin: _vueTypes.default.looseBool.def(true),
    prefixCls: _vueTypes.default.string.def('ant-tabs'),
    activeKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    tabBarPosition: _vueTypes.default.string,
    direction: _vueTypes.default.string,
    destroyInactiveTabPane: _vueTypes.default.looseBool,
    children: _vueTypes.default.any
  },
  computed: {
    classes: function classes() {
      var _ref;

      var animated = this.animated,
          prefixCls = this.prefixCls;
      var className = this.$attrs.class;
      return _ref = {}, _defineProperty(_ref, className, !!className), _defineProperty(_ref, "".concat(prefixCls, "-content"), true), _defineProperty(_ref, animated ? "".concat(prefixCls, "-content-animated") : "".concat(prefixCls, "-content-no-animated"), true), _ref;
    }
  },
  methods: {
    getTabPanes: function getTabPanes(children) {
      var props = this.$props;
      var activeKey = props.activeKey;
      var newChildren = [];
      children.forEach(function (child) {
        if (!child) {
          return;
        }

        var key = child.key;
        var active = activeKey === key;
        newChildren.push((0, _vnode.cloneElement)(child, {
          active: active,
          destroyInactiveTabPane: props.destroyInactiveTabPane,
          rootPrefixCls: props.prefixCls
        }));
      });
      return newChildren;
    }
  },
  render: function render() {
    var activeKey = this.activeKey,
        tabBarPosition = this.tabBarPosition,
        animated = this.animated,
        animatedWithMargin = this.animatedWithMargin,
        direction = this.direction,
        classes = this.classes,
        children = this.children;
    var style = {};

    if (animated && children) {
      var activeIndex = (0, _utils.getActiveIndex)(children, activeKey);

      if (activeIndex !== -1) {
        var animatedStyle = animatedWithMargin ? (0, _utils.getMarginStyle)(activeIndex, tabBarPosition) : (0, _utils.getTransformPropValue)((0, _utils.getTransformByIndex)(activeIndex, tabBarPosition, direction));
        style = _extends(_extends({}, this.$attrs.style), animatedStyle);
      } else {
        style = _extends(_extends({}, this.$attrs.style), {
          display: 'none'
        });
      }
    }

    return (0, _vue.createVNode)("div", {
      "class": classes,
      "style": style
    }, [this.getTabPanes(children || [])]);
  }
});

exports.default = _default;