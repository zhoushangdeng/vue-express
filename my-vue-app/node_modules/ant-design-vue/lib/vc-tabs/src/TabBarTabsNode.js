"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _warning = _interopRequireDefault(require("warning"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function noop() {}

var _default = {
  name: 'TabBarTabsNode',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    activeKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    panels: _vueTypes.default.any.def([]),
    prefixCls: _vueTypes.default.string.def(''),
    tabBarGutter: _vueTypes.default.any.def(null),
    onTabClick: _vueTypes.default.func,
    saveRef: _vueTypes.default.func.def(noop),
    getRef: _vueTypes.default.func.def(noop),
    renderTabBarNode: _vueTypes.default.func,
    tabBarPosition: _vueTypes.default.string,
    direction: _vueTypes.default.string
  },
  render: function render() {
    var _this = this;

    var _this$$props = this.$props,
        children = _this$$props.panels,
        activeKey = _this$$props.activeKey,
        prefixCls = _this$$props.prefixCls,
        tabBarGutter = _this$$props.tabBarGutter,
        saveRef = _this$$props.saveRef,
        tabBarPosition = _this$$props.tabBarPosition,
        direction = _this$$props.direction;
    var rst = [];
    var renderTabBarNode = this.renderTabBarNode || this.$slots.renderTabBarNode;
    children.forEach(function (child, index) {
      if (!child) {
        return;
      }

      var props = (0, _propsUtil.getPropsData)(child);
      var key = child.key;
      var cls = activeKey === key ? "".concat(prefixCls, "-tab-active") : '';
      cls += " ".concat(prefixCls, "-tab");
      var events = {};
      var disabled = props.disabled;

      if (disabled) {
        cls += " ".concat(prefixCls, "-tab-disabled");
      } else {
        events.onClick = function () {
          _this.__emit('tabClick', key);
        };
      }

      var tab = (0, _propsUtil.getComponent)(child, 'tab');
      var gutter = tabBarGutter && index === children.length - 1 ? 0 : tabBarGutter;
      gutter = typeof gutter === 'number' ? "".concat(gutter, "px") : gutter;
      var marginProperty = direction === 'rtl' ? 'marginLeft' : 'marginRight';

      var style = _defineProperty({}, (0, _utils.isVertical)(tabBarPosition) ? 'marginBottom' : marginProperty, gutter);

      (0, _warning.default)(tab !== undefined, 'There must be `tab` property or slot on children of Tabs.');
      var node = (0, _vue.createVNode)("div", _objectSpread(_objectSpread({
        "role": "tab",
        "aria-disabled": disabled ? 'true' : 'false',
        "aria-selected": activeKey === key ? 'true' : 'false'
      }, events), {}, {
        "class": cls.trim(),
        "key": key,
        "style": style,
        "ref": activeKey === key ? saveRef('activeTab') : noop
      }), [tab]);

      if (renderTabBarNode) {
        node = renderTabBarNode(node);
      }

      rst.push(node);
    });
    return (0, _vue.createVNode)("div", {
      "ref": this.saveRef('navTabsContainer')
    }, [rst]);
  }
};
exports.default = _default;