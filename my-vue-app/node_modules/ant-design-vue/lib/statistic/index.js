"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Statistic = _interopRequireDefault(require("./Statistic"));

var _Countdown = _interopRequireDefault(require("./Countdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Statistic.default.Countdown = _Countdown.default;
/* istanbul ignore next */

_Statistic.default.install = function (app) {
  app.component(_Statistic.default.name, _Statistic.default);
  app.component(_Statistic.default.Countdown.name, _Statistic.default.Countdown);
  return app;
};

var _default = _Statistic.default;
exports.default = _default;