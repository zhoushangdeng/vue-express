"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _deepAssign = require("../utils/deep-assign");

var _zhCN = _interopRequireDefault(require("./lang/zh-CN"));

var lang = (0, _vue.ref)('zh-CN');
var messages = (0, _vue.reactive)({
  'zh-CN': _zhCN.default
});
var _default = {
  messages() {
    return messages[lang.value];
  },

  use(newLang, newMessages) {
    lang.value = newLang;
    this.add({
      [newLang]: newMessages
    });
  },

  add(newMessages = {}) {
    (0, _deepAssign.deepAssign)(messages, newMessages);
  }

};
exports.default = _default;