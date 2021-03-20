"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useExpose = useExpose;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = require("vue");

// expose public api
function useExpose(apis) {
  var instance = (0, _vue.getCurrentInstance)();

  if (instance) {
    (0, _extends2.default)(instance.proxy, apis);
  }
}