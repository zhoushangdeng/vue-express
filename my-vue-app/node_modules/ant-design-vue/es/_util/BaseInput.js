import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { defineComponent, ref, withDirectives } from 'vue';
import antInput from './antInputDirective';
import PropTypes from './vue-types';
var BaseInput = defineComponent({
  props: {
    value: PropTypes.string.def('')
  },
  emits: ['change', 'input'],
  setup: function setup(_p, _ref) {
    var emit = _ref.emit;
    var inputRef = ref(null);

    var handleChange = function handleChange(e) {
      var composing = e.target.composing;

      if (e.isComposing || composing) {
        emit('input', e);
      } else {
        emit('input', e);
        emit('change', e);
      }
    };

    return {
      inputRef: inputRef,
      focus: function focus() {
        if (inputRef.value) {
          inputRef.value.focus();
        }
      },
      blur: function blur() {
        if (inputRef.value) {
          inputRef.value.blur();
        }
      },
      handleChange: handleChange
    };
  },
  render: function render() {
    return withDirectives(_createVNode("input", _objectSpread(_objectSpread(_objectSpread({}, this.$props), this.$attrs), {}, {
      "onInput": this.handleChange,
      "onChange": this.handleChange,
      "ref": "inputRef"
    }), null), [[antInput]]);
  }
});
export default BaseInput;