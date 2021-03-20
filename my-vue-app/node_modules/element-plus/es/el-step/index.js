import { defineComponent, ref, inject, getCurrentInstance, onMounted, watch, onBeforeUnmount, computed, reactive, openBlock, createBlock, createCommentVNode, createVNode, renderSlot, toDisplayString, createTextVNode } from 'vue';

var script = defineComponent({
    name: 'ElStep',
    props: {
        title: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        status: {
            type: String,
            default: '',
            validator: (val) => ['', 'wait', 'process', 'finish', 'error', 'success'].includes(val),
        },
    },
    setup(props) {
        const index = ref(-1);
        const lineStyle = ref({});
        const internalStatus = ref('');
        const parent = inject('ElSteps');
        const currentInstance = getCurrentInstance();
        onMounted(() => {
            watch([() => parent.props.active, () => parent.props.processStatus, () => parent.props.finishStatus], ([active]) => {
                updateStatus(active);
            }, { immediate: true });
        });
        onBeforeUnmount(() => {
            parent.steps.value = parent.steps.value.filter(instance => instance.uid !== currentInstance.uid);
        });
        const currentStatus = computed(() => {
            return props.status || internalStatus.value;
        });
        const prevStatus = computed(() => {
            const prevStep = parent.steps.value[index.value - 1];
            return prevStep ? prevStep.currentStatus : 'wait';
        });
        const isCenter = computed(() => {
            return parent.props.alignCenter;
        });
        const isVertical = computed(() => {
            return parent.props.direction === 'vertical';
        });
        const isSimple = computed(() => {
            return parent.props.simple;
        });
        const stepsCount = computed(() => {
            return parent.steps.value.length;
        });
        const isLast = computed(() => {
            var _a;
            return ((_a = parent.steps.value[stepsCount.value - 1]) === null || _a === void 0 ? void 0 : _a.uid) === currentInstance.uid;
        });
        const space = computed(() => {
            return isSimple.value ? '' : parent.props.space;
        });
        const style = computed(() => {
            const style = {
                flexBasis: (typeof space.value === 'number'
                    ? `${space.value}px`
                    : space.value
                        ? space.value
                        : 100 / (stepsCount.value - (isCenter.value ? 0 : 1)) + '%'),
            };
            if (isVertical.value)
                return style;
            if (isLast.value) {
                style.maxWidth = 100 / stepsCount.value + '%';
            }
            return style;
        });
        const setIndex = val => {
            index.value = val;
        };
        const calcProgress = status => {
            let step = 100;
            const style = {};
            style.transitionDelay = 150 * index.value + 'ms';
            if (status === parent.props.processStatus) {
                step = 0;
            }
            else if (status === 'wait') {
                step = 0;
                style.transitionDelay = (-150 * index.value) + 'ms';
            }
            style.borderWidth = step && !isSimple.value ? '1px' : 0;
            style[parent.props.direction === 'vertical' ? 'height' : 'width'] = `${step}%`;
            lineStyle.value = style;
        };
        const updateStatus = activeIndex => {
            if (activeIndex > index.value) {
                internalStatus.value = parent.props.finishStatus;
            }
            else if (activeIndex === index.value && prevStatus.value !== 'error') {
                internalStatus.value = parent.props.processStatus;
            }
            else {
                internalStatus.value = 'wait';
            }
            const prevChild = parent.steps.value[stepsCount.value - 1];
            if (prevChild)
                prevChild.calcProgress(internalStatus.value);
        };
        const stepItemState = reactive({
            uid: computed(() => currentInstance.uid),
            currentStatus,
            setIndex,
            calcProgress,
        });
        parent.steps.value = [...parent.steps.value, stepItemState];
        return {
            index,
            lineStyle,
            currentStatus,
            isCenter,
            isVertical,
            isSimple,
            isLast,
            space,
            style,
            parent,
            setIndex,
            calcProgress,
            updateStatus,
        };
    },
});

const _hoisted_1 = { class: "el-step__line" };
const _hoisted_2 = {
  key: 1,
  class: "el-step__icon-inner"
};
const _hoisted_3 = { class: "el-step__main" };
const _hoisted_4 = {
  key: 0,
  class: "el-step__arrow"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    style: _ctx.style,
    class: [
      'el-step',
      _ctx.isSimple ? 'is-simple' : `is-${_ctx.parent.props.direction}`,
      _ctx.isLast && !_ctx.space && !_ctx.isCenter && 'is-flex',
      _ctx.isCenter && !_ctx.isVertical && !_ctx.isSimple && 'is-center'
    ]
  }, [
    createCommentVNode(" icon & line "),
    createVNode("div", {
      class: ['el-step__head', `is-${_ctx.currentStatus}`]
    }, [
      createVNode("div", _hoisted_1, [
        createVNode("i", {
          class: "el-step__line-inner",
          style: _ctx.lineStyle
        }, null, 4 /* STYLE */)
      ]),
      createVNode("div", {
        class: ['el-step__icon', `is-${_ctx.icon ? 'icon' : 'text'}`]
      }, [
        (_ctx.currentStatus !== 'success' && _ctx.currentStatus !== 'error')
          ? renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [
              (_ctx.icon)
                ? (openBlock(), createBlock("i", {
                    key: 0,
                    class: ['el-step__icon-inner', _ctx.icon]
                  }, null, 2 /* CLASS */))
                : createCommentVNode("v-if", true),
              (!_ctx.icon && !_ctx.isSimple)
                ? (openBlock(), createBlock("div", _hoisted_2, toDisplayString(_ctx.index + 1), 1 /* TEXT */))
                : createCommentVNode("v-if", true)
            ])
          : (openBlock(), createBlock("i", {
              key: 1,
              class: ['el-step__icon-inner', 'is-status', `el-icon-${_ctx.currentStatus === 'success' ? 'check' : 'close'}`]
            }, null, 2 /* CLASS */))
      ], 2 /* CLASS */)
    ], 2 /* CLASS */),
    createCommentVNode(" title & description "),
    createVNode("div", _hoisted_3, [
      createVNode("div", {
        class: ['el-step__title', `is-${_ctx.currentStatus}`]
      }, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(_ctx.title), 1 /* TEXT */)
        ])
      ], 2 /* CLASS */),
      (_ctx.isSimple)
        ? (openBlock(), createBlock("div", _hoisted_4))
        : (openBlock(), createBlock("div", {
            key: 1,
            class: ['el-step__description', `is-${_ctx.currentStatus}`]
          }, [
            renderSlot(_ctx.$slots, "description", {}, () => [
              createTextVNode(toDisplayString(_ctx.description), 1 /* TEXT */)
            ])
          ], 2 /* CLASS */))
    ])
  ], 6 /* CLASS, STYLE */))
}

script.render = render;
script.__file = "packages/steps/src/item.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Step = script;

export default _Step;
