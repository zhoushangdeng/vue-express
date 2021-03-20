"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isString(str) {
  return typeof str === 'string';
}

function noop() {}

var _default = (0, _vue.defineComponent)({
  name: 'Step',
  mixins: [_BaseMixin.default],
  props: {
    prefixCls: _vueTypes.default.string,
    wrapperStyle: _vueTypes.default.object,
    itemWidth: _vueTypes.default.string,
    active: _vueTypes.default.looseBool,
    disabled: _vueTypes.default.looseBool,
    status: _vueTypes.default.string,
    iconPrefix: _vueTypes.default.string,
    icon: _vueTypes.default.any,
    adjustMarginRight: _vueTypes.default.string,
    stepNumber: _vueTypes.default.string,
    stepIndex: _vueTypes.default.number,
    description: _vueTypes.default.any,
    title: _vueTypes.default.any,
    subTitle: _vueTypes.default.any,
    progressDot: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.func])),
    tailContent: _vueTypes.default.any,
    icons: _vueTypes.default.shape({
      finish: _vueTypes.default.any,
      error: _vueTypes.default.any
    }).loose,
    onClick: _vueTypes.default.func,
    onStepClick: _vueTypes.default.func
  },
  methods: {
    onItemClick: function onItemClick() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.__emit.apply(this, ['click'].concat(args));

      this.__emit('stepClick', this.stepIndex);
    },
    renderIconNode: function renderIconNode() {
      var _iconClassName;

      var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
          prefixCls = _getOptionProps.prefixCls,
          stepNumber = _getOptionProps.stepNumber,
          status = _getOptionProps.status,
          iconPrefix = _getOptionProps.iconPrefix,
          icons = _getOptionProps.icons,
          progressDot = _getOptionProps.progressDot;

      var icon = (0, _propsUtil.getComponent)(this, 'icon');
      var title = (0, _propsUtil.getComponent)(this, 'title');
      var description = (0, _propsUtil.getComponent)(this, 'description');
      var iconNode;
      var iconClassName = (_iconClassName = {}, _defineProperty(_iconClassName, "".concat(prefixCls, "-icon"), true), _defineProperty(_iconClassName, "".concat(iconPrefix, "icon"), true), _defineProperty(_iconClassName, "".concat(iconPrefix, "icon-").concat(icon), icon && isString(icon)), _defineProperty(_iconClassName, "".concat(iconPrefix, "icon-check"), !icon && status === 'finish' && icons && !icons.finish), _defineProperty(_iconClassName, "".concat(iconPrefix, "icon-close"), !icon && status === 'error' && icons && !icons.error), _iconClassName);
      var iconDot = (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-icon-dot")
      }, null); // `progressDot` enjoy the highest priority

      if (progressDot) {
        if (typeof progressDot === 'function') {
          iconNode = (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-icon")
          }, [progressDot({
            index: stepNumber - 1,
            status: status,
            title: title,
            description: description,
            prefixCls: prefixCls
          })]);
        } else {
          iconNode = (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-icon")
          }, [iconDot]);
        }
      } else if (icon && !isString(icon)) {
        iconNode = (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [icon]);
      } else if (icons && icons.finish && status === 'finish') {
        iconNode = (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [icons.finish]);
      } else if (icons && icons.error && status === 'error') {
        iconNode = (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [icons.error]);
      } else if (icon || status === 'finish' || status === 'error') {
        iconNode = (0, _vue.createVNode)("span", {
          "class": iconClassName
        }, null);
      } else {
        iconNode = (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [stepNumber]);
      }

      return iconNode;
    }
  },
  render: function render() {
    var _classString;

    var _getOptionProps2 = (0, _propsUtil.getOptionProps)(this),
        prefixCls = _getOptionProps2.prefixCls,
        itemWidth = _getOptionProps2.itemWidth,
        active = _getOptionProps2.active,
        _getOptionProps2$stat = _getOptionProps2.status,
        status = _getOptionProps2$stat === void 0 ? 'wait' : _getOptionProps2$stat,
        tailContent = _getOptionProps2.tailContent,
        adjustMarginRight = _getOptionProps2.adjustMarginRight,
        disabled = _getOptionProps2.disabled,
        onClick = _getOptionProps2.onClick,
        onStepClick = _getOptionProps2.onStepClick;

    var title = (0, _propsUtil.getComponent)(this, 'title');
    var subTitle = (0, _propsUtil.getComponent)(this, 'subTitle');
    var description = (0, _propsUtil.getComponent)(this, 'description');
    var classString = (_classString = {}, _defineProperty(_classString, "".concat(prefixCls, "-item"), true), _defineProperty(_classString, "".concat(prefixCls, "-item-").concat(status), true), _defineProperty(_classString, "".concat(prefixCls, "-item-custom"), (0, _propsUtil.getComponent)(this, 'icon')), _defineProperty(_classString, "".concat(prefixCls, "-item-active"), active), _defineProperty(_classString, "".concat(prefixCls, "-item-disabled"), disabled === true), _classString);
    var stepProps = {
      class: classString
    };
    var stepItemStyle = {};

    if (itemWidth) {
      stepItemStyle.width = itemWidth;
    }

    if (adjustMarginRight) {
      stepItemStyle.marginRight = adjustMarginRight;
    }

    var accessibilityProps = {
      onClick: onClick || noop
    };

    if (onStepClick && !disabled) {
      accessibilityProps.role = 'button';
      accessibilityProps.tabindex = 0;
      accessibilityProps.onClick = this.onItemClick;
    }

    return (0, _vue.createVNode)("div", _objectSpread(_objectSpread({}, stepProps), {}, {
      "style": stepItemStyle
    }), [(0, _vue.createVNode)("div", _objectSpread(_objectSpread({}, accessibilityProps), {}, {
      "class": "".concat(prefixCls, "-item-container")
    }), [(0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-item-tail")
    }, [tailContent]), (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-item-icon")
    }, [this.renderIconNode()]), (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-item-content")
    }, [(0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-item-title")
    }, [title, subTitle && (0, _vue.createVNode)("div", {
      "title": subTitle,
      "class": "".concat(prefixCls, "-item-subtitle")
    }, [subTitle])]), description && (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-item-description")
    }, [description])])])]);
  }
});

exports.default = _default;