"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _button = _interopRequireDefault(require("./button"));

var _buttonGroup = _interopRequireDefault(require("./button-group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_button.default.Group = _buttonGroup.default;
/* istanbul ignore next */

_button.default.install = function (app) {
  app.component(_button.default.name, _button.default);
  app.component(_buttonGroup.default.name, _buttonGroup.default);
  return app;
};

var _default = _button.default;
exports.default = _default;