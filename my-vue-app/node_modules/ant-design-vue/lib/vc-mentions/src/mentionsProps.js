"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultProps = exports.vcMentionsProps = exports.mentionsProps = void 0;

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _propsUtil = require("../../_util/props-util");

var _util = require("./util");

var _placement = require("./placement");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var mentionsProps = {
  autofocus: _vueTypes.default.looseBool,
  prefix: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.array]),
  prefixCls: _vueTypes.default.string,
  value: _vueTypes.default.string,
  defaultValue: _vueTypes.default.string,
  disabled: _vueTypes.default.looseBool,
  notFoundContent: _vueTypes.default.VNodeChild,
  split: _vueTypes.default.string,
  transitionName: _vueTypes.default.string,
  placement: _vueTypes.default.oneOf(_placement.PlaceMent),
  character: _vueTypes.default.any,
  characterRender: _vueTypes.default.func,
  filterOption: _vueTypes.default.func,
  validateSearch: _vueTypes.default.func,
  getPopupContainer: {
    type: Function
  }
};
exports.mentionsProps = mentionsProps;

var vcMentionsProps = _extends(_extends({}, mentionsProps), {
  children: _vueTypes.default.any
});

exports.vcMentionsProps = vcMentionsProps;
var defaultProps = {
  prefix: '@',
  split: ' ',
  validateSearch: _util.validateSearch,
  filterOption: _util.filterOption
};
exports.defaultProps = defaultProps;

var _default = (0, _propsUtil.initDefaultProps)(vcMentionsProps, defaultProps);

exports.default = _default;