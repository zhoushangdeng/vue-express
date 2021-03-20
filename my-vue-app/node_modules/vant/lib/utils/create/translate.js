"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.createTranslate = createTranslate;

var _base = require("../base");

var _string = require("../format/string");

var _locale = _interopRequireDefault(require("../../locale"));

function createTranslate(name) {
  var prefix = (0, _string.camelize)(name) + '.';
  return function (path, ...args) {
    var messages = _locale.default.messages();

    var message = (0, _base.get)(messages, prefix + path) || (0, _base.get)(messages, path);
    return (0, _base.isFunction)(message) ? message(...args) : message;
  };
}