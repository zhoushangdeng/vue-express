"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Mentions = _interopRequireDefault(require("./src/Mentions"));

var _Option = _interopRequireDefault(require("./src/Option"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Mentions.default.Option = _Option.default;
var _default = _Mentions.default;
exports.default = _default;