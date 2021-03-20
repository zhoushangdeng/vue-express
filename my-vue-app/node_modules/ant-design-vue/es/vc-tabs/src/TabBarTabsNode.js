import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import warning from 'warning';
import PropTypes from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
import { getComponent, getPropsData } from '../../_util/props-util';
import { isVertical } from './utils';

function noop() {}

export default {
  name: 'TabBarTabsNode',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    panels: PropTypes.any.def([]),
    prefixCls: PropTypes.string.def(''),
    tabBarGutter: PropTypes.any.def(null),
    onTabClick: PropTypes.func,
    saveRef: PropTypes.func.def(noop),
    getRef: PropTypes.func.def(noop),
    renderTabBarNode: PropTypes.func,
    tabBarPosition: PropTypes.string,
    direction: PropTypes.string
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

      var props = getPropsData(child);
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

      var tab = getComponent(child, 'tab');
      var gutter = tabBarGutter && index === children.length - 1 ? 0 : tabBarGutter;
      gutter = typeof gutter === 'number' ? "".concat(gutter, "px") : gutter;
      var marginProperty = direction === 'rtl' ? 'marginLeft' : 'marginRight';

      var style = _defineProperty({}, isVertical(tabBarPosition) ? 'marginBottom' : marginProperty, gutter);

      warning(tab !== undefined, 'There must be `tab` property or slot on children of Tabs.');

      var node = _createVNode("div", _objectSpread(_objectSpread({
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
    return _createVNode("div", {
      "ref": this.saveRef('navTabsContainer')
    }, [rst]);
  }
};