"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _Group = _interopRequireDefault(require("./Group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Checkbox.default.Group = _Group.default;
/* istanbul ignore next */

_Checkbox.default.install = function (app) {
  app.component(_Checkbox.default.name, _Checkbox.default);
  app.component(_Group.default.name, _Group.default);
  return app;
};

var _default = _Checkbox.default;
exports.default = _default;