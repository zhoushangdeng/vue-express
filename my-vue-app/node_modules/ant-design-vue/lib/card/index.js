"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Card = _interopRequireDefault(require("./Card"));

var _Meta = _interopRequireDefault(require("./Meta"));

var _Grid = _interopRequireDefault(require("./Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Card.default.Meta = _Meta.default;
_Card.default.Grid = _Grid.default;
/* istanbul ignore next */

_Card.default.install = function (app) {
  app.component(_Card.default.name, _Card.default);
  app.component(_Meta.default.name, _Meta.default);
  app.component(_Grid.default.name, _Grid.default);
  return app;
};

var _default = _Card.default;
exports.default = _default;