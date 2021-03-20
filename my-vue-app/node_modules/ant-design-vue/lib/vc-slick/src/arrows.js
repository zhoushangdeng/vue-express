"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextArrow = exports.PrevArrow = void 0;

var _vue = require("vue");

var _classNames = _interopRequireDefault(require("../../_util/classNames"));

var _vnode = require("../../_util/vnode");

var _innerSliderUtils = require("./utils/innerSliderUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function noop() {}

function handler(options, handle, e) {
  if (e) {
    e.preventDefault();
  }

  handle(options, e);
}

var PrevArrow = function PrevArrow(_, _ref) {
  var attrs = _ref.attrs;
  var clickHandler = attrs.clickHandler,
      infinite = attrs.infinite,
      currentSlide = attrs.currentSlide,
      slideCount = attrs.slideCount,
      slidesToShow = attrs.slidesToShow;
  var prevClasses = {
    'slick-arrow': true,
    'slick-prev': true
  };

  var prevHandler = function prevHandler(e) {
    handler({
      message: 'previous'
    }, clickHandler, e);
  };

  if (!infinite && (currentSlide === 0 || slideCount <= slidesToShow)) {
    prevClasses['slick-disabled'] = true;
    prevHandler = noop;
  }

  var prevArrowProps = {
    key: '0',
    'data-role': 'none',
    class: prevClasses,
    style: {
      display: 'block'
    },
    onClick: prevHandler
  };
  var customProps = {
    currentSlide: currentSlide,
    slideCount: slideCount
  };
  var prevArrow;

  if (attrs.prevArrow) {
    prevArrow = (0, _vnode.cloneElement)(attrs.prevArrow(_extends(_extends({}, prevArrowProps), customProps)), {
      key: '0',
      class: prevClasses,
      style: {
        display: 'block'
      },
      onClick: prevHandler
    }, false);
  } else {
    prevArrow = (0, _vue.createVNode)("button", _objectSpread({
      "key": "0",
      "type": "button"
    }, prevArrowProps), [' ', (0, _vue.createTextVNode)("Previous")]);
  }

  return prevArrow;
};

exports.PrevArrow = PrevArrow;
PrevArrow.inheritAttrs = false;

var NextArrow = function NextArrow(_, _ref2) {
  var attrs = _ref2.attrs;
  var clickHandler = attrs.clickHandler,
      currentSlide = attrs.currentSlide,
      slideCount = attrs.slideCount;
  var nextClasses = {
    'slick-arrow': true,
    'slick-next': true
  };

  var nextHandler = function nextHandler(e) {
    handler({
      message: 'next'
    }, clickHandler, e);
  };

  if (!(0, _innerSliderUtils.canGoNext)(attrs)) {
    nextClasses['slick-disabled'] = true;
    nextHandler = noop;
  }

  var nextArrowProps = {
    key: '1',
    'data-role': 'none',
    class: (0, _classNames.default)(nextClasses),
    style: {
      display: 'block'
    },
    onClick: nextHandler
  };
  var customProps = {
    currentSlide: currentSlide,
    slideCount: slideCount
  };
  var nextArrow;

  if (attrs.nextArrow) {
    nextArrow = (0, _vnode.cloneElement)(attrs.nextArrow(_extends(_extends({}, nextArrowProps), customProps)), {
      key: '1',
      class: (0, _classNames.default)(nextClasses),
      style: {
        display: 'block'
      },
      onClick: nextHandler
    }, false);
  } else {
    nextArrow = (0, _vue.createVNode)("button", _objectSpread({
      "key": "1",
      "type": "button"
    }, nextArrowProps), [' ', (0, _vue.createTextVNode)("Next")]);
  }

  return nextArrow;
};

exports.NextArrow = NextArrow;
NextArrow.inheritAttrs = false;