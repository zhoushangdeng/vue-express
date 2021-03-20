"use strict";

exports.__esModule = true;
exports.isNumeric = isNumeric;
exports.isNaN = isNaN;

function isNumeric(val) {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
}

function isNaN(val) {
  if (Number.isNaN) {
    return Number.isNaN(val);
  } // eslint-disable-next-line no-self-compare


  return val !== val;
}