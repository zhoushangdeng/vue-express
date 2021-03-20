"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../../_util/BaseMixin"));

var _propsUtil = require("../../../_util/props-util");

var _TodayButton = _interopRequireDefault(require("./TodayButton"));

var _OkButton = _interopRequireDefault(require("./OkButton"));

var _TimePickerButton = _interopRequireDefault(require("./TimePickerButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CalendarFooter = {
  name: 'CalendarFooter',
  inheritAttrs: false,
  mixins: [_BaseMixin.default],
  props: {
    prefixCls: _vueTypes.default.string,
    showDateInput: _vueTypes.default.looseBool,
    disabledTime: _vueTypes.default.any,
    timePicker: _vueTypes.default.any,
    selectedValue: _vueTypes.default.any,
    showOk: _vueTypes.default.looseBool,
    // onSelect: PropTypes.func,
    value: _vueTypes.default.object,
    renderFooter: _vueTypes.default.func,
    defaultValue: _vueTypes.default.object,
    locale: _vueTypes.default.object,
    showToday: _vueTypes.default.looseBool,
    disabledDate: _vueTypes.default.func,
    showTimePicker: _vueTypes.default.looseBool,
    okDisabled: _vueTypes.default.looseBool,
    mode: _vueTypes.default.string
  },
  methods: {
    onSelect: function onSelect(value) {
      this.__emit('select', value);
    },
    getRootDOMNode: function getRootDOMNode() {
      return (0, _propsUtil.findDOMNode)(this);
    }
  },
  render: function render() {
    var props = (0, _propsUtil.getOptionProps)(this);
    var value = props.value,
        prefixCls = props.prefixCls,
        showOk = props.showOk,
        timePicker = props.timePicker,
        renderFooter = props.renderFooter,
        showToday = props.showToday,
        mode = props.mode;
    var footerEl = null;
    var extraFooter = renderFooter && renderFooter(mode);

    if (showToday || timePicker || extraFooter) {
      var _cls;

      var btnProps = _extends(_extends(_extends({}, props), this.$attrs), {
        value: value
      });

      var nowEl = null;

      if (showToday) {
        nowEl = (0, _vue.createVNode)(_TodayButton.default, _objectSpread({
          "key": "todayButton"
        }, btnProps), null);
      }

      delete btnProps.value;
      var okBtn = null;

      if (showOk === true || showOk !== false && !!timePicker) {
        okBtn = (0, _vue.createVNode)(_OkButton.default, _objectSpread({
          "key": "okButton"
        }, btnProps), null);
      }

      var timePickerBtn = null;

      if (timePicker) {
        timePickerBtn = (0, _vue.createVNode)(_TimePickerButton.default, _objectSpread({
          "key": "timePickerButton"
        }, btnProps), null);
      }

      var footerBtn;

      if (nowEl || timePickerBtn || okBtn || extraFooter) {
        footerBtn = (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-footer-btn")
        }, [extraFooter, nowEl, timePickerBtn, okBtn]);
      }

      var cls = (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-footer"), true), _defineProperty(_cls, "".concat(prefixCls, "-footer-show-ok"), !!okBtn), _cls);
      footerEl = (0, _vue.createVNode)("div", {
        "class": cls
      }, [footerBtn]);
    }

    return footerEl;
  }
};
var _default = CalendarFooter;
exports.default = _default;