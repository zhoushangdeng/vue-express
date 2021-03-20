"use strict";

exports.__esModule = true;
exports.addUnit = addUnit;
exports.getSizeStyle = getSizeStyle;
exports.unitToPx = unitToPx;

var _base = require("../base");

var _number = require("../validate/number");

function addUnit(value) {
  if (!(0, _base.isDef)(value)) {
    return undefined;
  }

  return (0, _number.isNumeric)(value) ? value + "px" : String(value);
}

function getSizeStyle(originSize) {
  if ((0, _base.isDef)(originSize)) {
    var size = addUnit(originSize);
    return {
      width: size,
      height: size
    };
  }
} // cache


var rootFontSize;

function getRootFontSize() {
  if (!rootFontSize) {
    var doc = document.documentElement;
    var fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
    rootFontSize = parseFloat(fontSize);
  }

  return rootFontSize;
}

function convertRem(value) {
  value = value.replace(/rem/g, '');
  return +value * getRootFontSize();
}

function convertVw(value) {
  value = value.replace(/vw/g, '');
  return +value * window.innerWidth / 100;
}

function convertVh(value) {
  value = value.replace(/vh/g, '');
  return +value * window.innerHeight / 100;
}

function unitToPx(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (_base.inBrowser) {
    if (value.indexOf('rem') !== -1) {
      return convertRem(value);
    }

    if (value.indexOf('vw') !== -1) {
      return convertVw(value);
    }

    if (value.indexOf('vh') !== -1) {
      return convertVh(value);
    }
  }

  return parseFloat(value);
}