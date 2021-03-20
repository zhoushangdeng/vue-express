import { ref, computed, watch, nextTick, onMounted, defineComponent, resolveComponent, resolveDirective, openBlock, createBlock, Teleport, createVNode, Transition, withCtx, withDirectives, withModifiers, renderSlot, toDisplayString, createCommentVNode, vShow } from 'vue';
import { TrapFocus } from '../directives';
import { isValidWidthUnit } from '../utils/validators';
import { Overlay } from '../el-overlay';
import isServer from '../utils/isServer';
import { UPDATE_MODEL_EVENT } from '../utils/constants';
import PopupManager from '../utils/popup-manager';
import { isNumber, clearTimer } from '../utils/util';
import { useLockScreen, useModal, useRestoreActive } from '../hooks';

const CLOSE_EVENT = 'close';
const OPEN_EVENT = 'open';
const CLOSED_EVENT = 'closed';
const OPENED_EVENT = 'opened';
function useDialog (props, ctx, targetRef) {
    const visible = ref(false);
    const closed = ref(false);
    const dialogRef = ref(null);
    const openTimer = ref(null);
    const closeTimer = ref(null);
    const rendered = ref(false);
    const zIndex = ref(props.zIndex || PopupManager.nextZIndex());
    const modalRef = ref(null);
    const normalizeWidth = () => {
        if (isNumber(props.width))
            return `${props.width}px`;
        else
            return props.width;
    };
    const style = computed(() => {
        const style = {};
        if (!props.fullscreen) {
            style.marginTop = props.top;
            if (props.width) {
                style.width = normalizeWidth();
            }
        }
        return style;
    });
    function afterEnter() {
        ctx.emit(OPENED_EVENT);
    }
    function afterLeave() {
        ctx.emit(CLOSED_EVENT);
        ctx.emit(UPDATE_MODEL_EVENT, false);
        if (props.destroyOnClose) {
            rendered.value = false;
        }
    }
    function beforeLeave() {
        ctx.emit(CLOSE_EVENT);
    }
    function open() {
        clearTimer(closeTimer);
        clearTimer(openTimer);
        if (props.openDelay && props.openDelay > 0) {
            openTimer.value = window.setTimeout(() => {
                openTimer.value = null;
                doOpen();
            }, props.openDelay);
        }
        else {
            doOpen();
        }
    }
    function close() {
        clearTimer(openTimer);
        clearTimer(closeTimer);
        if (props.closeDelay && props.closeDelay > 0) {
            closeTimer.value = window.setTimeout(() => {
                closeTimer.value = null;
                doClose();
            }, props.closeDelay);
        }
        else {
            doClose();
        }
    }
    function hide(shouldCancel) {
        if (shouldCancel)
            return;
        closed.value = true;
        visible.value = false;
    }
    function handleClose() {
        if (props.beforeClose) {
            props.beforeClose(hide);
        }
        else {
            close();
        }
    }
    function onModalClick() {
        if (props.closeOnClickModal) {
            handleClose();
        }
    }
    function doOpen() {
        if (isServer) {
            return;
        }
        visible.value = true;
    }
    function doClose() {
        visible.value = false;
    }
    if (props.lockScroll) {
        useLockScreen(visible);
    }
    if (props.closeOnPressEscape) {
        useModal({
            handleClose,
        }, visible);
    }
    useRestoreActive(visible);
    watch(() => props.modelValue, val => {
        if (val) {
            closed.value = false;
            open();
            rendered.value = true;
            ctx.emit(OPEN_EVENT);
            zIndex.value = props.zIndex ? zIndex.value++ : PopupManager.nextZIndex();
            nextTick(() => {
                if (targetRef.value) {
                    targetRef.value.scrollTop = 0;
                }
            });
        }
        else {
            if (visible.value) {
                close();
            }
        }
    });
    onMounted(() => {
        if (props.modelValue) {
            visible.value = true;
            rendered.value = true;
            open();
        }
    });
    return {
        afterEnter,
        afterLeave,
        beforeLeave,
        handleClose,
        onModalClick,
        closed,
        dialogRef,
        style,
        rendered,
        modalRef,
        visible,
        zIndex,
    };
}

var script = defineComponent({
    name: 'ElDialog',
    components: {
        'el-overlay': Overlay,
    },
    directives: {
        TrapFocus,
    },
    props: {
        appendToBody: {
            type: Boolean,
            default: false,
        },
        beforeClose: {
            type: Function,
        },
        destroyOnClose: {
            type: Boolean,
            default: false,
        },
        center: {
            type: Boolean,
            default: false,
        },
        customClass: {
            type: String,
            default: '',
        },
        closeOnClickModal: {
            type: Boolean,
            default: true,
        },
        closeOnPressEscape: {
            type: Boolean,
            default: true,
        },
        fullscreen: {
            type: Boolean,
            default: false,
        },
        lockScroll: {
            type: Boolean,
            default: true,
        },
        modal: {
            type: Boolean,
            default: true,
        },
        showClose: {
            type: Boolean,
            default: true,
        },
        title: {
            type: String,
            default: '',
        },
        openDelay: {
            type: Number,
            default: 0,
        },
        closeDelay: {
            type: Number,
            default: 0,
        },
        top: {
            type: String,
            default: '15vh',
        },
        modelValue: {
            type: Boolean,
            required: true,
        },
        modalClass: String,
        width: {
            type: [String, Number],
            default: '50%',
            validator: isValidWidthUnit,
        },
        zIndex: {
            type: Number,
        },
    },
    emits: [
        OPEN_EVENT,
        OPENED_EVENT,
        CLOSE_EVENT,
        CLOSED_EVENT,
        UPDATE_MODEL_EVENT,
    ],
    setup(props, ctx) {
        const dialogRef = ref(null);
        return Object.assign(Object.assign({}, useDialog(props, ctx, dialogRef)), { dialogRef });
    },
});

const _hoisted_1 = { class: "el-dialog__header" };
const _hoisted_2 = { class: "el-dialog__title" };
const _hoisted_3 = /*#__PURE__*/createVNode("i", { class: "el-dialog__close el-icon el-icon-close" }, null, -1 /* HOISTED */);
const _hoisted_4 = {
  key: 0,
  class: "el-dialog__body"
};
const _hoisted_5 = {
  key: 1,
  class: "el-dialog__footer"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_overlay = resolveComponent("el-overlay");
  const _directive_trap_focus = resolveDirective("trap-focus");

  return (openBlock(), createBlock(Teleport, {
    to: "body",
    disabled: !_ctx.appendToBody
  }, [
    createVNode(Transition, {
      name: "dialog-fade",
      onAfterEnter: _ctx.afterEnter,
      onAfterLeave: _ctx.afterLeave,
      onBeforeLeave: _ctx.beforeLeave
    }, {
      default: withCtx(() => [
        withDirectives(createVNode(_component_el_overlay, {
          mask: _ctx.modal,
          "overlay-class": _ctx.modalClass,
          "z-index": _ctx.zIndex,
          onClick: _ctx.onModalClick
        }, {
          default: withCtx(() => [
            withDirectives(createVNode("div", {
              ref: "dialogRef",
              class: [
            'el-dialog',
            {
              'is-fullscreen': _ctx.fullscreen,
              'el-dialog--center': _ctx.center,
            },
            _ctx.customClass,
          ],
              "aria-modal": "true",
              role: "dialog",
              "aria-label": _ctx.title || 'dialog',
              style: _ctx.style,
              onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
            }, [
              createVNode("div", _hoisted_1, [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createVNode("span", _hoisted_2, toDisplayString(_ctx.title), 1 /* TEXT */)
                ]),
                (_ctx.showClose)
                  ? (openBlock(), createBlock("button", {
                      key: 0,
                      "aria-label": "close",
                      class: "el-dialog__headerbtn",
                      type: "button",
                      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleClose && _ctx.handleClose(...args)))
                    }, [
                      _hoisted_3
                    ]))
                  : createCommentVNode("v-if", true)
              ]),
              (_ctx.rendered)
                ? (openBlock(), createBlock("div", _hoisted_4, [
                    renderSlot(_ctx.$slots, "default")
                  ]))
                : createCommentVNode("v-if", true),
              (_ctx.$slots.footer)
                ? (openBlock(), createBlock("div", _hoisted_5, [
                    renderSlot(_ctx.$slots, "footer")
                  ]))
                : createCommentVNode("v-if", true)
            ], 14 /* CLASS, STYLE, PROPS */, ["aria-label"]), [
              [_directive_trap_focus]
            ])
          ]),
          _: 3 /* FORWARDED */
        }, 8 /* PROPS */, ["mask", "overlay-class", "z-index", "onClick"]), [
          [vShow, _ctx.visible]
        ])
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
  ], 8 /* PROPS */, ["disabled"]))
}

script.render = render;
script.__file = "packages/dialog/src/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Dialog = script;

export default _Dialog;
export { useDialog };
