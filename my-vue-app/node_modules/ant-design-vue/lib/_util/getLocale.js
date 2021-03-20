"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComponentLocale = getComponentLocale;
exports.getLocaleCode = getLocaleCode;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function getComponentLocale(props, context, componentName, getDefaultLocale) {
  var locale = {};

  if (context && context.antLocale && context.antLocale[componentName]) {
    locale = context.antLocale[componentName];
  } else {
    var defaultLocale = getDefaultLocale(); // TODO: make default lang of antd be English
    // https://github.com/ant-design/ant-design/issues/6334

    locale = defaultLocale.default || defaultLocale;
  }

  var result = _extends(_extends({}, locale), props.locale);

  result.lang = _extends(_extends({}, locale.lang), props.locale.lang);
  return result;
}

function getLocaleCode(context) {
  var localeCode = context.antLocale && context.antLocale.locale; // Had use LocaleProvide but didn't set locale

  if (context.antLocale && context.antLocale.exist && !localeCode) {
    return 'zh-cn';
  }

  return localeCode;
}