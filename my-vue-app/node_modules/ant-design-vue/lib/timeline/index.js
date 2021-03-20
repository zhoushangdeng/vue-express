"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Timeline = _interopRequireDefault(require("./Timeline"));

var _TimelineItem = _interopRequireDefault(require("./TimelineItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Timeline.default.Item = _TimelineItem.default;
/* istanbul ignore next */

_Timeline.default.install = function (app) {
  app.component(_Timeline.default.name, _Timeline.default);
  app.component(_TimelineItem.default.name, _TimelineItem.default);
  return app;
};

var _default = _Timeline.default;
exports.default = _default;