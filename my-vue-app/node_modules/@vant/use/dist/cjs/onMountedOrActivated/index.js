"use strict";

exports.__esModule = true;
exports.onMountedOrActivated = onMountedOrActivated;

var _vue = require("vue");

function onMountedOrActivated(hook) {
  var mounted;
  (0, _vue.onMounted)(function () {
    hook();
    (0, _vue.nextTick)(function () {
      mounted = true;
    });
  });
  (0, _vue.onActivated)(function () {
    if (mounted) {
      hook();
    }
  });
}