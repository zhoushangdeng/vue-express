"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Tree = _interopRequireDefault(require("./Tree"));

var _DirectoryTree = _interopRequireDefault(require("./DirectoryTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Tree.default.TreeNode.name = 'ATreeNode';
_Tree.default.DirectoryTree = _DirectoryTree.default;
/* istanbul ignore next */

_Tree.default.install = function (app) {
  app.component(_Tree.default.name, _Tree.default);
  app.component(_Tree.default.TreeNode.name, _Tree.default.TreeNode);
  app.component(_DirectoryTree.default.name, _DirectoryTree.default);
  return app;
};

var _default = _Tree.default;
exports.default = _default;