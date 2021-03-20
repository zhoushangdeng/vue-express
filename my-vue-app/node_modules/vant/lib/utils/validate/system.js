"use strict";

exports.__esModule = true;
exports.isAndroid = isAndroid;
exports.isIOS = isIOS;

var _base = require("../base");

function isAndroid() {
  return _base.inBrowser ? /android/.test(navigator.userAgent.toLowerCase()) : false;
}

function isIOS() {
  return _base.inBrowser ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;
}