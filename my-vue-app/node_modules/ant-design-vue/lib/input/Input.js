"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixControlledValue = fixControlledValue;
exports.resolveOnChange = resolveOnChange;
exports.getInputClassName = getInputClassName;
exports.default = void 0;

var _vue = require("vue");

var _antInputDirective = _interopRequireDefault(require("../_util/antInputDirective"));

var _classNames3 = _interopRequireDefault(require("../_util/classNames"));

var _omit = _interopRequireDefault(require("omit.js"));

var _inputProps = _interopRequireDefault(require("./inputProps"));

var _propsUtil = require("../_util/props-util");

var _configProvider = require("../config-provider");

var _ClearableLabeledInput = _interopRequireDefault(require("./ClearableLabeledInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value;
}

function resolveOnChange(target, e, onChange) {
  if (onChange) {
    var event = e;

    if (e.type === 'click') {
      // click clear icon
      //event = Object.create(e);
      Object.defineProperty(event, 'target', {
        writable: true
      });
      Object.defineProperty(event, 'currentTarget', {
        writable: true
      });
      event.target = target;
      event.currentTarget = target;
      var originalInputValue = target.value; // change target ref value cause e.target.value should be '' when clear input

      target.value = '';
      onChange(event); // reset target ref value

      target.value = originalInputValue;
      return;
    }

    onChange(event);
  }
}

function getInputClassName(prefixCls, size, disabled) {
  var _classNames;

  return (0, _classNames3.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
}

var _default = (0, _vue.defineComponent)({
  name: 'AInput',
  inheritAttrs: false,
  props: _extends({}, _inputProps.default),
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      removePasswordTimeout: undefined,
      input: null,
      clearableInput: null
    };
  },
  data: function data() {
    var props = this.$props;
    var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    return {
      stateValue: typeof value === 'undefined' ? '' : value,
      isFocused: false
    };
  },
  watch: {
    value: function value(val) {
      this.stateValue = val;
    }
  },
  mounted: function mounted() {
    var _this = this;

    (0, _vue.nextTick)(function () {
      if (process.env.NODE_ENV === 'test') {
        if (_this.autofocus) {
          _this.focus();
        }
      }

      _this.clearPasswordValueAttribute();
    });
  },
  beforeUnmount: function beforeUnmount() {
    if (this.removePasswordTimeout) {
      clearTimeout(this.removePasswordTimeout);
    }
  },
  methods: {
    handleInputFocus: function handleInputFocus(e) {
      this.isFocused = true;
      this.onFocus && this.onFocus(e);
    },
    handleInputBlur: function handleInputBlur(e) {
      this.isFocused = false;
      this.onBlur && this.onBlur(e);
    },
    focus: function focus() {
      this.input.focus();
    },
    blur: function blur() {
      this.input.blur();
    },
    select: function select() {
      this.input.select();
    },
    saveClearableInput: function saveClearableInput(input) {
      this.clearableInput = input;
    },
    saveInput: function saveInput(input) {
      this.input = input;
    },
    setValue: function setValue(value, callback) {
      if (this.stateValue === value) {
        return;
      }

      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.stateValue = value;
      } else {
        this.$forceUpdate();
      }

      (0, _vue.nextTick)(function () {
        callback && callback();
      });
    },
    triggerChange: function triggerChange(e) {
      this.$emit('update:value', e.target.value);
      this.$emit('change', e);
      this.$emit('input', e);
    },
    handleReset: function handleReset(e) {
      var _this2 = this;

      this.setValue('', function () {
        _this2.focus();
      });
      resolveOnChange(this.input, e, this.triggerChange);
    },
    renderInput: function renderInput(prefixCls, _ref) {
      var addonBefore = _ref.addonBefore,
          addonAfter = _ref.addonAfter;
      var otherProps = (0, _omit.default)(this.$props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear', 'defaultValue', 'lazy', 'size', 'inputPrefixCls', 'loading']);
      var handleKeyDown = this.handleKeyDown,
          handleChange = this.handleChange,
          handleInputFocus = this.handleInputFocus,
          handleInputBlur = this.handleInputBlur,
          size = this.size,
          disabled = this.disabled,
          $attrs = this.$attrs;

      var inputProps = _extends(_extends(_extends({}, otherProps), $attrs), {
        onKeydown: handleKeyDown,
        class: (0, _classNames3.default)(getInputClassName(prefixCls, size, disabled), _defineProperty({}, $attrs.class, $attrs.class && !addonBefore && !addonAfter)),
        ref: this.saveInput,
        key: 'ant-input',
        onInput: handleChange,
        onChange: handleChange,
        onFocus: handleInputFocus,
        onBlur: handleInputBlur
      });

      if (!inputProps.autofocus) {
        delete inputProps.autofocus;
      }

      var inputNode = (0, _vue.createVNode)("input", inputProps, null);
      return (0, _vue.withDirectives)(inputNode, [[_antInputDirective.default]]);
    },
    clearPasswordValueAttribute: function clearPasswordValueAttribute() {
      var _this3 = this;

      // https://github.com/ant-design/ant-design/issues/20541
      this.removePasswordTimeout = setTimeout(function () {
        if (_this3.input && _this3.input.getAttribute && _this3.input.getAttribute('type') === 'password' && _this3.input.hasAttribute('value')) {
          _this3.input.removeAttribute('value');
        }
      });
    },
    handleChange: function handleChange(e) {
      var _e$target = e.target,
          value = _e$target.value,
          composing = _e$target.composing,
          isComposing = _e$target.isComposing; // https://github.com/vueComponent/ant-design-vue/issues/2203

      if ((isComposing || composing) && this.lazy || this.stateValue === value) return;
      this.setValue(value, this.clearPasswordValueAttribute);
      resolveOnChange(this.input, e, this.triggerChange);
    },
    handleKeyDown: function handleKeyDown(e) {
      if (e.keyCode === 13) {
        this.$emit('pressEnter', e);
      }

      this.$emit('keydown', e);
    }
  },
  render: function render() {
    var customizePrefixCls = this.$props.prefixCls;
    var _this$$data = this.$data,
        stateValue = _this$$data.stateValue,
        isFocused = _this$$data.isFocused;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('input', customizePrefixCls);
    var addonAfter = (0, _propsUtil.getComponent)(this, 'addonAfter');
    var addonBefore = (0, _propsUtil.getComponent)(this, 'addonBefore');
    var suffix = (0, _propsUtil.getComponent)(this, 'suffix');
    var prefix = (0, _propsUtil.getComponent)(this, 'prefix');

    var props = _extends(_extends(_extends({}, this.$attrs), (0, _propsUtil.getOptionProps)(this)), {
      prefixCls: prefixCls,
      inputType: 'input',
      value: fixControlledValue(stateValue),
      element: this.renderInput(prefixCls, {
        addonAfter: addonAfter,
        addonBefore: addonBefore
      }),
      handleReset: this.handleReset,
      addonAfter: addonAfter,
      addonBefore: addonBefore,
      suffix: suffix,
      prefix: prefix,
      isFocused: isFocused
    });

    return (0, _vue.createVNode)(_ClearableLabeledInput.default, _objectSpread(_objectSpread({}, props), {}, {
      "ref": this.saveClearableInput
    }), null);
  }
});

exports.default = _default;