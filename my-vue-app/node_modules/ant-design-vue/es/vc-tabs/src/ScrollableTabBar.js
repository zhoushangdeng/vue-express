import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import ScrollableTabBarNode from './ScrollableTabBarNode';
import TabBarRootNode from './TabBarRootNode';
import TabBarTabsNode from './TabBarTabsNode';
import SaveRef from './SaveRef';

var ScrollableTabBar = function ScrollableTabBar(_, _ref) {
  var attrs = _ref.attrs;
  return _createVNode(SaveRef, {
    "children": function children(saveRef, getRef) {
      return _createVNode(TabBarRootNode, _objectSpread({
        "saveRef": saveRef
      }, attrs), {
        default: function _default() {
          return [_createVNode(ScrollableTabBarNode, _objectSpread({
            "saveRef": saveRef,
            "getRef": getRef
          }, attrs), {
            default: function _default() {
              return [_createVNode(TabBarTabsNode, _objectSpread({
                "saveRef": saveRef
              }, attrs), null)];
            }
          })];
        }
      });
    }
  }, null);
};

ScrollableTabBar.inheritAttrs = false;
export default ScrollableTabBar;