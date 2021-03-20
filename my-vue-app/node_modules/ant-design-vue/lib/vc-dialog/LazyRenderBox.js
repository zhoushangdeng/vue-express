"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ILazyRenderBoxPropTypes = {
  visible: _vueTypes.default.looseBool,
  hiddenClassName: _vueTypes.default.string,
  forceRender: _vueTypes.default.looseBool
};
var _default = {
  props: ILazyRenderBoxPropTypes,
  render: function render() {
    return (0, _vue.createVNode)("div", null, [(0, _propsUtil.getSlot)(this)]);
  }
};
exports.default = _default;