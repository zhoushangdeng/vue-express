"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNowByCurrentStateValue = getNowByCurrentStateValue;
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../../_util/BaseMixin"));

var _propsUtil = require("../../../_util/props-util");

var _moment = _interopRequireDefault(require("moment"));

var _index = require("../util/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function noop() {}

function getNowByCurrentStateValue(value) {
  var ret;

  if (value) {
    ret = (0, _index.getTodayTime)(value);
  } else {
    ret = (0, _moment.default)();
  }

  return ret;
}

function isMoment(value) {
  if (Array.isArray(value)) {
    return value.length === 0 || value.findIndex(function (val) {
      return val === undefined || _moment.default.isMoment(val);
    }) !== -1;
  } else {
    return value === undefined || _moment.default.isMoment(value);
  }
}

var MomentType = _vueTypes.default.custom(isMoment);

var CalendarMixin = {
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  name: 'CalendarMixinWrapper',
  props: {
    value: MomentType,
    defaultValue: MomentType
  },
  data: function data() {
    if (this.onKeyDown === undefined) {
      this.onKeyDown = noop;
    }

    if (this.onBlur === undefined) {
      this.onBlur = noop;
    }

    var props = this.$props;
    var sValue = props.value || props.defaultValue || getNowByCurrentStateValue();
    return {
      sValue: sValue,
      sSelectedValue: props.selectedValue || props.defaultSelectedValue
    };
  },
  watch: {
    value: function value(val) {
      var sValue = val || this.defaultValue || getNowByCurrentStateValue(this.sValue);
      this.setState({
        sValue: sValue
      });
    },
    selectedValue: function selectedValue(val) {
      this.setState({
        sSelectedValue: val
      });
    }
  },
  methods: {
    onSelect: function onSelect(value, cause) {
      if (value) {
        this.setValue(value);
      }

      this.setSelectedValue(value, cause);
    },
    renderRoot: function renderRoot(newProps) {
      var _className;

      var props = _extends(_extends({}, this.$props), this.$attrs);

      var prefixCls = props.prefixCls;
      var className = (_className = {}, _defineProperty(_className, prefixCls, 1), _defineProperty(_className, "".concat(prefixCls, "-hidden"), !props.visible), _defineProperty(_className, props.class, !!props.class), _defineProperty(_className, newProps.class, !!newProps.class), _className);
      return (0, _vue.createVNode)("div", {
        "ref": this.saveRoot,
        "class": className,
        "tabindex": "0",
        "onKeydown": this.onKeyDown || noop,
        "onBlur": this.onBlur || noop
      }, [newProps.children]);
    },
    setSelectedValue: function setSelectedValue(selectedValue, cause) {
      // if (this.isAllowedDate(selectedValue)) {
      if (!(0, _propsUtil.hasProp)(this, 'selectedValue')) {
        this.setState({
          sSelectedValue: selectedValue
        });
      }

      this.__emit('select', selectedValue, cause); // }

    },
    setValue: function setValue(value) {
      var originalValue = this.sValue;

      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.setState({
          sValue: value
        });
      }

      if (originalValue && value && !originalValue.isSame(value) || !originalValue && value || originalValue && !value) {
        this.__emit('change', value);
      }
    },
    isAllowedDate: function isAllowedDate(value) {
      var disabledDate = this.disabledDate;
      var disabledTime = this.disabledTime;
      return (0, _index.isAllowedDate)(value, disabledDate, disabledTime);
    }
  }
};
var _default = CalendarMixin;
exports.default = _default;