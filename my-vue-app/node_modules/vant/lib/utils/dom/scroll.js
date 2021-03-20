"use strict";

exports.__esModule = true;
exports.getScrollTop = getScrollTop;
exports.setScrollTop = setScrollTop;
exports.getRootScrollTop = getRootScrollTop;
exports.setRootScrollTop = setRootScrollTop;
exports.getElementTop = getElementTop;
exports.getVisibleHeight = getVisibleHeight;
exports.getVisibleTop = getVisibleTop;
exports.resetScroll = resetScroll;

var _system = require("../validate/system");

function isWindow(val) {
  return val === window;
}

function getScrollTop(el) {
  var top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset; // iOS scroll bounce cause minus scrollTop

  return Math.max(top, 0);
}

function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}

function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
} // get distance from element top to page top or scroller top


function getElementTop(el, scroller) {
  if (isWindow(el)) {
    return 0;
  }

  var scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
  return el.getBoundingClientRect().top + scrollTop;
}

function getVisibleHeight(el) {
  if (isWindow(el)) {
    return el.innerHeight;
  }

  return el.getBoundingClientRect().height;
}

function getVisibleTop(el) {
  if (isWindow(el)) {
    return 0;
  }

  return el.getBoundingClientRect().top;
}

var isIOS = (0, _system.isIOS)(); // hack for iOS12 page scroll
// see: https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800

function resetScroll() {
  if (isIOS) {
    setRootScrollTop(getRootScrollTop());
  }
}