"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ButtonGroupProps = void 0;

var _vue = require("vue");

var _propsUtil = require("../_util/props-util");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ButtonGroupProps = {
  prefixCls: _vueTypes.default.string,
  size: _vueTypes.default.oneOf((0, _type.tuple)('small', 'large', 'default'))
};
exports.ButtonGroupProps = ButtonGroupProps;

var _default = (0, _vue.defineComponent)({
  name: 'AButtonGroup',
  props: ButtonGroupProps,
  setup: function setup() {
    var configProvider = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider);
    return {
      configProvider: configProvider
    };
  },
  data: function data() {
    return {
      sizeMap: {
        large: 'lg',
        small: 'sm'
      }
    };
  },
  render: function render() {
    var _classes;

    var customizePrefixCls = this.prefixCls,
        size = this.size;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';
        break;

      default:
        break;
    }

    var classes = (_classes = {}, _defineProperty(_classes, "".concat(prefixCls), true), _defineProperty(_classes, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _classes);
    return (0, _vue.createVNode)("div", {
      "class": classes
    }, [(0, _propsUtil.filterEmpty)((0, _propsUtil.getSlot)(this))]);
  }
});

exports.default = _default;