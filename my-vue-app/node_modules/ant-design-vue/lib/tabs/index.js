"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TabPane", {
  enumerable: true,
  get: function get() {
    return _TabPane.default;
  }
});
Object.defineProperty(exports, "TabContent", {
  enumerable: true,
  get: function get() {
    return _TabContent.default;
  }
});
exports.default = void 0;

var _tabs = _interopRequireDefault(require("./tabs"));

var _TabPane = _interopRequireDefault(require("../vc-tabs/src/TabPane"));

var _TabContent = _interopRequireDefault(require("../vc-tabs/src/TabContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_tabs.default.TabPane = _extends(_extends({}, _TabPane.default), {
  name: 'ATabPane',
  __ANT_TAB_PANE: true
});
_tabs.default.TabContent = _extends(_extends({}, _TabContent.default), {
  name: 'ATabContent'
});
/* istanbul ignore next */

_tabs.default.install = function (app) {
  app.component(_tabs.default.name, _tabs.default);
  app.component(_tabs.default.TabPane.name, _tabs.default.TabPane);
  app.component(_tabs.default.TabContent.name, _tabs.default.TabContent);
  return app;
};

var _default = _tabs.default;
exports.default = _default;