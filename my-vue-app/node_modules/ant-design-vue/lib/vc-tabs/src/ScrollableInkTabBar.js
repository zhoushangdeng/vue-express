"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _InkTabBarNode = _interopRequireDefault(require("./InkTabBarNode"));

var _TabBarTabsNode = _interopRequireDefault(require("./TabBarTabsNode"));

var _TabBarRootNode = _interopRequireDefault(require("./TabBarRootNode"));

var _ScrollableTabBarNode = _interopRequireDefault(require("./ScrollableTabBarNode"));

var _SaveRef = _interopRequireDefault(require("./SaveRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default2 = (0, _vue.defineComponent)({
  name: 'ScrollableInkTabBar',
  inheritAttrs: false,
  render: function render() {
    var _this = this;

    var renderTabBarNode = this.$attrs.children;
    return (0, _vue.createVNode)(_SaveRef.default, {
      "children": function children(saveRef, getRef) {
        return (0, _vue.createVNode)(_TabBarRootNode.default, _objectSpread({
          "saveRef": saveRef
        }, _this.$attrs), {
          default: function _default() {
            return [(0, _vue.createVNode)(_ScrollableTabBarNode.default, _objectSpread({
              "saveRef": saveRef,
              "getRef": getRef
            }, _this.$attrs), {
              default: function _default() {
                return [(0, _vue.createVNode)(_TabBarTabsNode.default, _objectSpread({
                  "saveRef": saveRef
                }, _extends(_extends({}, _this.$attrs), {
                  renderTabBarNode: renderTabBarNode
                })), null), (0, _vue.createVNode)(_InkTabBarNode.default, _objectSpread({
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

exports.default = _default2;