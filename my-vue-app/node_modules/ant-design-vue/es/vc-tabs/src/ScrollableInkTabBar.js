import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { defineComponent } from 'vue';
import InkTabBarNode from './InkTabBarNode';
import TabBarTabsNode from './TabBarTabsNode';
import TabBarRootNode from './TabBarRootNode';
import ScrollableTabBarNode from './ScrollableTabBarNode';
import SaveRef from './SaveRef';
export default defineComponent({
  name: 'ScrollableInkTabBar',
  inheritAttrs: false,
  render: function render() {
    var _this = this;

    var renderTabBarNode = this.$attrs.children;
    return _createVNode(SaveRef, {
      "children": function children(saveRef, getRef) {
        return _createVNode(TabBarRootNode, _objectSpread({
          "saveRef": saveRef
        }, _this.$attrs), {
          default: function _default() {
            return [_createVNode(ScrollableTabBarNode, _objectSpread({
              "saveRef": saveRef,
              "getRef": getRef
            }, _this.$attrs), {
              default: function _default() {
                return [_createVNode(TabBarTabsNode, _objectSpread({
                  "saveRef": saveRef
                }, _extends(_extends({}, _this.$attrs), {
                  renderTabBarNode: renderTabBarNode
                })), null), _createVNode(InkTabBarNode, _objectSpread({
                  "saveRef": saveRef,
                  "getRef": getRef
                }, _this.$attrs), null)];
              }
            })];
          }
        });
      }
    }, null);
  }
});