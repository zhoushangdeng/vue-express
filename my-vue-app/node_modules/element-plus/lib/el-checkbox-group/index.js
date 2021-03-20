'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var constants = require('../utils/constants');
var validators = require('../utils/validators');
var util = require('../utils/util');
var form = require('../el-form');

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
    const ELEMENT = util.useGlobalConfig();
    const elForm = vue.inject(form.elFormKey, {});
    const elFormItem = vue.inject(form.elFormItemKey, {});
    const checkboxGroup = vue.inject('CheckboxGroup', {});
    const isGroup = vue.computed(() => checkboxGroup && (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.name) === 'ElCheckboxGroup');
    const elFormItemSize = vue.computed(() => {
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

var script = vue.defineComponent({
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
            validator: validators.isValidComponentSize,
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
    emits: [constants.UPDATE_MODEL_EVENT, 'change'],
    setup(props, ctx) {
        const { elFormItem, elFormItemSize, ELEMENT } = useCheckboxGroup();
        const checkboxGroupSize = vue.computed(() => props.size || elFormItemSize.value || ELEMENT.size);
        const changeEvent = value => {
            ctx.emit(constants.UPDATE_MODEL_EVENT, value);
            vue.nextTick(() => {
                ctx.emit('change', value);
            });
        };
        const modelValue = vue.computed({
            get() {
                return props.modelValue;
            },
            set(val) {
                changeEvent(val);
            },
        });
        vue.provide('CheckboxGroup', Object.assign(Object.assign({ name: 'ElCheckboxGroup', modelValue }, vue.toRefs(props)), { checkboxGroupSize,
            changeEvent }));
        vue.watch(() => props.modelValue, val => {
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
  return (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script.render = render;
script.__file = "packages/checkbox/src/checkbox-group.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _CheckboxGroup = script;

exports.default = _CheckboxGroup;
