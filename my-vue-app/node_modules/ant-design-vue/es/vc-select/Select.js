import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - `backfill` only support `combobox` mode
 * - `combobox` mode not support `labelInValue` since it's meaningless
 * - `getInputElement` only support `combobox` mode
 * - `onChange` return OptionData instead of ReactNode
 * - `filterOption` `onChange` `onSelect` accept OptionData instead of ReactNode
 * - `combobox` mode trigger `onChange` will get `undefined` if no `value` match in Option
 * - `combobox` mode not support `optionLabelProp`
 */
import SelectOptionList from './OptionList';
import Option from './Option';
import OptGroup from './OptGroup';
import { convertChildrenToData as convertSelectChildrenToData } from './utils/legacyUtil';
import { getLabeledValue as getSelectLabeledValue, filterOptions as selectDefaultFilterOptions, isValueDisabled as isSelectValueDisabled, findValueOption as findSelectValueOption, flattenOptions, fillOptionsWithMissingValue } from './utils/valueUtil';
import generateSelector from './generate';
import warningProps from './utils/warningPropsUtil';
import { defineComponent, ref } from 'vue';
import { getSlot } from '../_util/props-util';
import omit from 'lodash-es/omit';
var RefSelect = generateSelector({
  prefixCls: 'rc-select',
  components: {
    optionList: SelectOptionList
  },
  convertChildrenToData: convertSelectChildrenToData,
  flattenOptions: flattenOptions,
  getLabeledValue: getSelectLabeledValue,
  filterOptions: selectDefaultFilterOptions,
  isValueDisabled: isSelectValueDisabled,
  findValueOption: findSelectValueOption,
  warningProps: warningProps,
  fillOptionsWithMissingValue: fillOptionsWithMissingValue
});
var Select = defineComponent({
  setup: function setup() {
    var selectRef = ref(null);
    return {
      selectRef: selectRef,
      focus: function focus() {
        var _a;

        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: function blur() {
        var _a;

        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
  },
  render: function render() {
    return _createVNode(RefSelect, _objectSpread(_objectSpread(_objectSpread({
      "ref": "selectRef"
    }, this.$props), this.$attrs), {}, {
      "children": getSlot(this)
    }), null);
  }
});
Select.inheritAttrs = false;
Select.props = omit(RefSelect.props, ['children']);
Select.Option = Option;
Select.OptGroup = OptGroup;
export default Select;