"use strict";

exports.__esModule = true;
exports.useClickAway = useClickAway;

var _vue = require("vue");

var _utils = require("../utils");

var _useEventListener = require("../useEventListener");

function useClickAway(target, listener, options) {
  if (options === void 0) {
    options = {};
  }

  if (!_utils.inBrowser) {
    return;
  }

  var _options = options,
      _options$eventName = _options.eventName,
      eventName = _options$eventName === void 0 ? 'click' : _options$eventName;

  var onClick = function onClick(event) {
    var element = (0, _vue.unref)(target);

    if (element && !element.contains(event.target)) {
      listener(event);
    }
  };

  (0, _useEventListener.useEventListener)(eventName, onClick, {
    target: document
  });
}