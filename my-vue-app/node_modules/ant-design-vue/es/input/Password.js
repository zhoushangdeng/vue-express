import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import classNames from '../_util/classNames';
import { getComponent, getOptionProps } from '../_util/props-util';
import { cloneElement } from '../_util/vnode';
import Input from './Input';
import EyeOutlined from '@ant-design/icons-vue/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons-vue/EyeInvisibleOutlined';
import inputProps from './inputProps';
import PropTypes from '../_util/vue-types';
import BaseMixin from '../_util/BaseMixin';
import { defineComponent } from 'vue';
var ActionMap = {
  click: 'onClick',
  hover: 'onMouseover'
};
export default defineComponent({
  name: 'AInputPassword',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps), {
    prefixCls: PropTypes.string.def('ant-input-password'),
    inputPrefixCls: PropTypes.string.def('ant-input'),
    action: PropTypes.string.def('click'),
    visibilityToggle: PropTypes.looseBool.def(true),
    iconRender: PropTypes.func.def(function (visible) {
      return visible ? _createVNode(EyeOutlined, null, null) : _createVNode(EyeInvisibleOutlined, null, null);
    })
  }),
  setup: function setup() {
    return {
      input: null
    };
  },
  data: function data() {
    return {
      visible: false
    };
  },
  methods: {
    saveInput: function saveInput(node) {
      this.input = node;
    },
    focus: function focus() {
      this.input.focus();
    },
    blur: function blur() {
      this.input.blur();
    },
    onVisibleChange: function onVisibleChange() {
      if (this.disabled) {
        return;
      }

      this.setState({
        visible: !this.visible
      });
    },
    getIcon: function getIcon() {
      var _iconProps;

      var _this$$props = this.$props,
          prefixCls = _this$$props.prefixCls,
          action = _this$$props.action;
      var iconTrigger = ActionMap[action] || '';
      var iconRender = this.$slots.iconRender || this.$props.iconRender;
      var icon = iconRender(this.visible);
      var iconProps = (_iconProps = {}, _defineProperty(_iconProps, iconTrigger, this.onVisibleChange), _defineProperty(_iconProps, "onMousedown", function onMousedown(e) {
        // Prevent focused state lost
        // https://github.com/ant-design/ant-design/issues/15173
        e.preventDefault();
      }), _defineProperty(_iconProps, "onMouseup", function onMouseup(e) {
        // Prevent focused state lost
        // https://github.com/ant-design/ant-design/pull/23633/files
        e.preventDefault();
      }), _defineProperty(_iconProps, "class", "".concat(prefixCls, "-icon")), _defineProperty(_iconProps, "key", 'passwordIcon'), _iconProps);
      return cloneElement(icon, iconProps);
    }
  },
  render: function render() {
    var _a = getOptionProps(this),
        prefixCls = _a.prefixCls,
        inputPrefixCls = _a.inputPrefixCls,
        size = _a.size,
        suffix = _a.suffix,
        action = _a.action,
        visibilityToggle = _a.visibilityToggle,
        iconRender = _a.iconRender,
        restProps = __rest(_a, ["prefixCls", "inputPrefixCls", "size", "suffix", "action", "visibilityToggle", "iconRender"]);

    var className = this.$attrs.class;
    var suffixIcon = visibilityToggle && this.getIcon();
    var inputClassName = classNames(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-").concat(size), !!size));

    var inputProps = _extends(_extends(_extends(_extends({}, restProps), {
      prefixCls: inputPrefixCls,
      size: size,
      suffix: suffixIcon,
      prefix: getComponent(this, 'prefix'),
      addonAfter: getComponent(this, 'addonAfter'),
      addonBefore: getComponent(this, 'addonBefore')
    }), this.$attrs), {
      type: this.visible ? 'text' : 'password',
      class: inputClassName,
      ref: 'input'
    });

    return _createVNode(Input, _objectSpread(_objectSpread({}, inputProps), {}, {
      "ref": this.saveInput
    }), null);
  }
});