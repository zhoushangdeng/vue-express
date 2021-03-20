"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _layout = _interopRequireDefault(require("./layout"));

var _Sider = _interopRequireDefault(require("./Sider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_layout.default.Sider = _Sider.default;
/* istanbul ignore next */

_layout.default.install = function (app) {
  app.component(_layout.default.name, _layout.default);
  app.component(_layout.default.Header.name, _layout.default.Header);
  app.component(_layout.default.Footer.name, _layout.default.Footer);
  app.component(_layout.default.Sider.name, _layout.default.Sider);
  app.component(_layout.default.Content.name, _layout.default.Content);
  return app;
};

var _default = _layout.default;
exports.default = _default;