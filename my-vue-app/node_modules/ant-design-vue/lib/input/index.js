"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Input = _interopRequireDefault(require("./Input"));

var _Group = _interopRequireDefault(require("./Group"));

var _Search = _interopRequireDefault(require("./Search"));

var _TextArea = _interopRequireDefault(require("./TextArea"));

var _Password = _interopRequireDefault(require("./Password"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Input.default.Group = _Group.default;
_Input.default.Search = _Search.default;
_Input.default.TextArea = _TextArea.default;
_Input.default.Password = _Password.default;
/* istanbul ignore next */

_Input.default.install = function (app) {
  app.component(_Input.default.name, _Input.default);
  app.component(_Input.default.Group.name, _Input.default.Group);
  app.component(_Input.default.Search.name, _Input.default.Search);
  app.component(_Input.default.TextArea.name, _Input.default.TextArea);
  app.component(_Input.default.Password.name, _Input.default.Password);
  return app;
};

var _default = _Input.default;
exports.default = _default;