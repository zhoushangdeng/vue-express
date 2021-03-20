"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ColorPicker = _interopRequireDefault(require("./ColorPicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_ColorPicker.default.install = function (app) {
  app.component(_ColorPicker.default.name, _ColorPicker.default);
  return app;
};

var _default = _ColorPicker.default;
exports.default = _default;