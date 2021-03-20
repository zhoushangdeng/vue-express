"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Collapse = _interopRequireDefault(require("./Collapse"));

var _CollapsePanel = _interopRequireDefault(require("./CollapsePanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Collapse.default.Panel = _CollapsePanel.default;
/* istanbul ignore next */

_Collapse.default.install = function (app) {
  app.component(_Collapse.default.name, _Collapse.default);
  app.component(_CollapsePanel.default.name, _CollapsePanel.default);
  return app;
};

var _default = _Collapse.default;
exports.default = _default;