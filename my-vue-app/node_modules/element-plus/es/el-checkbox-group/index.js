import { inject, computed, defineComponent, provide, toRefs, watch, nextTick, openBlock, createBlock, renderSlot } from 'vue';
import { UPDATE_MODEL_EVENT } from '../utils/constants';
import { isValidComponentSize } from '../utils/validators';
import { useGlobalConfig } from '../utils/util';
import { elFormKey, elFormItemKey } from '../el-form';

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
const EMPTY_OBJ = (process.env.NODE_ENV !== 'production')
    ? Object.freeze({})
    : {};
const EMPTY_ARR = (process.env.NODE_ENV !== 'production') ? Object.freeze([]) : [];

const useCheckboxGroup = () => {
    const ELEMENT = useGlobalConfig();
    const elForm = inject(elFormKey, {});
    const elFormItem = inject(elFormItemKey, {});
    const checkboxGroup = inject('CheckboxGroup', {});
    const isGroup = computed(() => checkboxGroup && (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.name) === 'ElCheckboxGroup');
    const elFormItemSize = computed(() => {
        return elFormItem.size;
    });
    return {
        isGroup,
        checkboxGroup,
        elForm,
        ELEMENT,
        elFormItemSize,
        elFormItem,
    };
};

var script = defineComponent({
    name: 'ElCheckboxGroup',
    props: {
        modelValue: {
            type: [Object, Boolean, Array],
            default: () => undefined,
        },
        disabled: Boolean,
        min: {
            type: Number,
            default: undefined,
        },
        max: {
            type: Number,
            default: undefined,
        },
        size: {
            type: String,
            validator: isValidComponentSize,
        },
        fill: {
            type: String,
            default: undefined,
        },
        textColor: {
            type: String,
            default: undefined,
        },
    },
    emits: [UPDATE_MODEL_EVENT, 'change'],
    setup(props, ctx) {
        const { elFormItem, elFormItemSize, ELEMENT } = useCheckboxGroup();
        const checkboxGroupSize = computed(() => props.size || elFormItemSize.value || ELEMENT.size);
        const changeEvent = value => {
            ctx.emit(UPDATE_MODEL_EVENT, value);
            nextTick(() => {
                ctx.emit('change', value);
            });
        };
        const modelValue = computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                changeEvent(val);
            },
        });
        provide('CheckboxGroup', Object.assign(Object.assign({ name: 'ElCheckboxGroup', modelValue }, toRefs(props)), { checkboxGroupSize,
            changeEvent }));
        watch(() => props.modelValue, val => {
            var _a;
            (_a = elFormItem.formItemMitt) === null || _a === void 0 ? void 0 : _a.emit('el.form.change', [val]);
        });
    },
});

const _hoisted_1 = {
  class: "el-checkbox-group",
  role: "group",
  "aria-label": "checkbox-group"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script.render = render;
script.__file = "packages/checkbox/src/checkbox-group.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _CheckboxGroup = script;

export default _CheckboxGroup;
