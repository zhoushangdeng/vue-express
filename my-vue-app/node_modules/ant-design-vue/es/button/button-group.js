import { createVNode as _createVNode } from "vue";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { defineComponent, inject } from 'vue';
import { filterEmpty, getSlot } from '../_util/props-util';
import PropTypes from '../_util/vue-types';
import { defaultConfigProvider } from '../config-provider';
import { tuple } from '../_util/type';
var ButtonGroupProps = {
  prefixCls: PropTypes.string,
  size: PropTypes.oneOf(tuple('small', 'large', 'default'))
};
export { ButtonGroupProps };
export default defineComponent({
  name: 'AButtonGroup',
  props: ButtonGroupProps,
  setup: function setup() {
    var configProvider = inject('configProvider', defaultConfigProvider);
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
    return _createVNode("div", {
      "class": classes
    }, [filterEmpty(getSlot(this))]);
  }
});