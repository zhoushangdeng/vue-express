"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _InkTabBarNode = _interopRequireDefault(require("./InkTabBarNode"));

var _TabBarTabsNode = _interopRequireDefault(require("./TabBarTabsNode"));

var _TabBarRootNode = _interopRequireDefault(require("./TabBarRootNode"));

var _SaveRef = _interopRequireDefault(require("./SaveRef"));

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

function noop() {}

var InkTabBar = function InkTabBar(_, _ref) {
  var attrs = _ref.attrs;

  var _attrs$onTabClick = attrs.onTabClick,
      onTabClick = _attrs$onTabClick === void 0 ? noop : _attrs$onTabClick,
      props = __rest(attrs, ["onTabClick"]);

  return (0, _vue.createVNode)(_SaveRef.default, {
    "children": function children(saveRef, getRef) {
      return (0, _vue.createVNode)(_TabBarRootNode.default, _objectSpread({
        "saveRef": saveRef
      }, props), {
        default: function _default() {
          return [(0, _vue.createVNode)(_TabBarTabsNode.default, _objectSpread({
            "onTabClick": onTabClick,
            "saveRef": saveRef
          }, props), null), (0, _vue.createVNode)(_InkTabBarNode.default, _objectSpread({
            "saveRef": saveRef,
            "getRef": getRef
          }, props), null)];
        }
      });
    }
  }, null);
};

InkTabBar.inheritAttrs = false;
var _default2 = InkTabBar;
exports.default = _default2;