"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vcCalendar = _interopRequireDefault(require("../vc-calendar"));

var _MonthCalendar = _interopRequireDefault(require("../vc-calendar/src/MonthCalendar"));

var _createPicker = _interopRequireDefault(require("./createPicker"));

var _wrapPicker = _interopRequireDefault(require("./wrapPicker"));

var _RangePicker = _interopRequireDefault(require("./RangePicker"));

var _WeekPicker = _interopRequireDefault(require("./WeekPicker"));

var _props = require("./props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var WrappedRangePicker = (0, _wrapPicker.default)(_RangePicker.default, _props.RangePickerProps, 'date');
var WrappedWeekPicker = (0, _wrapPicker.default)(_WeekPicker.default, _props.WeekPickerProps, 'week');
var DatePicker = (0, _wrapPicker.default)((0, _createPicker.default)(_vcCalendar.default, _props.DatePickerProps, 'ADatePicker'), _props.DatePickerProps, 'date');
var MonthPicker = (0, _wrapPicker.default)((0, _createPicker.default)(_MonthCalendar.default, _props.MonthPickerProps, 'AMonthPicker'), _props.MonthPickerProps, 'month');

_extends(DatePicker, {
  RangePicker: WrappedRangePicker,
  MonthPicker: MonthPicker,
  WeekPicker: WrappedWeekPicker
});
/* istanbul ignore next */


DatePicker.install = function (app) {
  app.component(DatePicker.name, DatePicker);
  app.component(DatePicker.RangePicker.name, DatePicker.RangePicker);
  app.component(DatePicker.MonthPicker.name, DatePicker.MonthPicker);
  app.component(DatePicker.WeekPicker.name, DatePicker.WeekPicker);
  return app;
};

var _default = DatePicker;
exports.default = _default;