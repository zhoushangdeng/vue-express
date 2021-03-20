"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OptionProps = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionProps = {
  value: _vueTypes.default.string,
  disabled: _vueTypes.default.looseBool,
  children: _vueTypes.default.any
};
exports.OptionProps = OptionProps;

var _default = (0, _vue.defineComponent)({
  name: 'Option',
  props: OptionProps,
  render: function render() {
    return null;
  }
});

exports.default = _default;