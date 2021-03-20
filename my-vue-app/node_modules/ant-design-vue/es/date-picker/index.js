function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import VcCalendar from '../vc-calendar';
import MonthCalendar from '../vc-calendar/src/MonthCalendar';
import createPicker from './createPicker';
import wrapPicker from './wrapPicker';
import RangePicker from './RangePicker';
import WeekPicker from './WeekPicker';
import { DatePickerProps, MonthPickerProps, WeekPickerProps, RangePickerProps } from './props';
var WrappedRangePicker = wrapPicker(RangePicker, RangePickerProps, 'date');
var WrappedWeekPicker = wrapPicker(WeekPicker, WeekPickerProps, 'week');
var DatePicker = wrapPicker(createPicker(VcCalendar, DatePickerProps, 'ADatePicker'), DatePickerProps, 'date');
var MonthPicker = wrapPicker(createPicker(MonthCalendar, MonthPickerProps, 'AMonthPicker'), MonthPickerProps, 'month');

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

export default DatePicker;