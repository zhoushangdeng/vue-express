"use strict";

exports.__esModule = true;

var _base = require("./base");

Object.keys(_base).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _base[key]) return;
  exports[key] = _base[key];
});

var _create = require("./create");

Object.keys(_create).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _create[key]) return;
  exports[key] = _create[key];
});

var _unit = require("./format/unit");

Object.keys(_unit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _unit[key]) return;
  exports[key] = _unit[key];
});

var _number = require("./format/number");

Object.keys(_number).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _number[key]) return;
  exports[key] = _number[key];
});

var _string = require("./format/string");

Object.keys(_string).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _string[key]) return;
  exports[key] = _string[key];
});

var _style = require("./dom/style");

Object.keys(_style).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _style[key]) return;
  exports[key] = _style[key];
});

var _event = require("./dom/event");

Object.keys(_event).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _event[key]) return;
  exports[key] = _event[key];
});

var _scroll = require("./dom/scroll");

Object.keys(_scroll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _scroll[key]) return;
  exports[key] = _scroll[key];
});