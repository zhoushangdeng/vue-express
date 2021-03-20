"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _configProvider = require("../config-provider");

var _propsUtil = require("../_util/props-util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _vue.defineComponent)({
  name: 'ACardGrid',
  __ANT_CARD_GRID: true,
  props: {
    prefixCls: _vueTypes.default.string,
    hoverable: _vueTypes.default.looseBool
  },
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  render: function render() {
    var _classString;

    var _this$$props = this.$props,
        customizePrefixCls = _this$$props.prefixCls,
        _this$$props$hoverabl = _this$$props.hoverable,
        hoverable = _this$$props$hoverabl === void 0 ? true : _this$$props$hoverabl;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var classString = (_classString = {}, _defineProperty(_classString, "".concat(prefixCls, "-grid"), true), _defineProperty(_classString, "".concat(prefixCls, "-grid-hoverable"), hoverable), _classString);
    return (0, _vue.createVNode)("div", {
      "class": classString
    }, [(0, _propsUtil.getSlot)(this)]);
  }
});

exports.default = _default;