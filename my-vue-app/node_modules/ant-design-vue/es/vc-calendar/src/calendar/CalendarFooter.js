import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from '../../../_util/vue-types';
import BaseMixin from '../../../_util/BaseMixin';
import { getOptionProps, findDOMNode } from '../../../_util/props-util';
import TodayButton from './TodayButton';
import OkButton from './OkButton';
import TimePickerButton from './TimePickerButton';
var CalendarFooter = {
  name: 'CalendarFooter',
  inheritAttrs: false,
  mixins: [BaseMixin],
  props: {
    prefixCls: PropTypes.string,
    showDateInput: PropTypes.looseBool,
    disabledTime: PropTypes.any,
    timePicker: PropTypes.any,
    selectedValue: PropTypes.any,
    showOk: PropTypes.looseBool,
    // onSelect: PropTypes.func,
    value: PropTypes.object,
    renderFooter: PropTypes.func,
    defaultValue: PropTypes.object,
    locale: PropTypes.object,
    showToday: PropTypes.looseBool,
    disabledDate: PropTypes.func,
    showTimePicker: PropTypes.looseBool,
    okDisabled: PropTypes.looseBool,
    mode: PropTypes.string
  },
  methods: {
    onSelect: function onSelect(value) {
      this.__emit('select', value);
    },
    getRootDOMNode: function getRootDOMNode() {
      return findDOMNode(this);
    }
  },
  render: function render() {
    var props = getOptionProps(this);
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
        nowEl = _createVNode(TodayButton, _objectSpread({
          "key": "todayButton"
        }, btnProps), null);
      }

      delete btnProps.value;
      var okBtn = null;

      if (showOk === true || showOk !== false && !!timePicker) {
        okBtn = _createVNode(OkButton, _objectSpread({
          "key": "okButton"
        }, btnProps), null);
      }

      var timePickerBtn = null;

      if (timePicker) {
        timePickerBtn = _createVNode(TimePickerButton, _objectSpread({
          "key": "timePickerButton"
        }, btnProps), null);
      }

      var footerBtn;

      if (nowEl || timePickerBtn || okBtn || extraFooter) {
        footerBtn = _createVNode("span", {
          "class": "".concat(prefixCls, "-footer-btn")
        }, [extraFooter, nowEl, timePickerBtn, okBtn]);
      }

      var cls = (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-footer"), true), _defineProperty(_cls, "".concat(prefixCls, "-footer-show-ok"), !!okBtn), _cls);
      footerEl = _createVNode("div", {
        "class": cls
      }, [footerBtn]);
    }

    return footerEl;
  }
};
export default CalendarFooter;