"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Breadcrumb = _interopRequireDefault(require("./Breadcrumb"));

var _BreadcrumbItem = _interopRequireDefault(require("./BreadcrumbItem"));

var _BreadcrumbSeparator = _interopRequireDefault(require("./BreadcrumbSeparator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Breadcrumb.default.Item = _BreadcrumbItem.default;
_Breadcrumb.default.Separator = _BreadcrumbSeparator.default;
/* istanbul ignore next */

_Breadcrumb.default.install = function (app) {
  app.component(_Breadcrumb.default.name, _Breadcrumb.default);
  app.component(_BreadcrumbItem.default.name, _BreadcrumbItem.default);
  app.component(_BreadcrumbSeparator.default.name, _BreadcrumbSeparator.default);
  return app;
};

var _default = _Breadcrumb.default;
exports.default = _default;