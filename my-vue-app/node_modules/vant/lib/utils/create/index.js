"use strict";

exports.__esModule = true;
exports.createNamespace = createNamespace;

var _bem = require("./bem");

var _component = require("./component");

var _translate = require("./translate");

function createNamespace(name) {
  name = 'van-' + name;
  return [(0, _component.createComponent)(name), (0, _bem.createBEM)(name), (0, _translate.createTranslate)(name)];
}