"use strict";

exports.__esModule = true;
exports.popupSharedPropKeys = exports.popupSharedProps = void 0;

var _utils = require("../utils");

var popupSharedProps = {
  // whether to show popup
  show: Boolean,
  // z-index
  zIndex: [Number, String],
  // transition duration
  duration: [Number, String],
  // teleport
  teleport: [String, Object],
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: _utils.UnknownProp,
  // Initial rendering animation
  transitionAppear: Boolean,
  // whether to show overlay
  overlay: {
    type: Boolean,
    default: true
  },
  // prevent body scroll
  lockScroll: {
    type: Boolean,
    default: true
  },
  // whether to lazy render
  lazyRender: {
    type: Boolean,
    default: true
  },
  // whether to close popup when overlay is clicked
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
};
exports.popupSharedProps = popupSharedProps;
var popupSharedPropKeys = Object.keys(popupSharedProps);
exports.popupSharedPropKeys = popupSharedPropKeys;