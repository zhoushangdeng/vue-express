import { defineComponent, openBlock, createBlock, createVNode, renderSlot, createTextVNode, toDisplayString } from 'vue';
import { t } from '../locale';

var script = defineComponent({
    name: 'ElPageHeader',
    props: {
        title: {
            type: String,
            default: () => t('el.pageHeader.title'),
        },
        content: {
            type: String,
            default: '',
        },
    },
    emits: ['back'],
    setup(props, { emit }) {
        function handleClick() {
            emit('back');
        }
        return {
            handleClick,
        };
    },
});

const _hoisted_1 = { class: "el-page-header" };
const _hoisted_2 = /*#__PURE__*/createVNode("i", { class: "el-icon-back" }, null, -1 /* HOISTED */);
const _hoisted_3 = { class: "el-page-header__title" };
const _hoisted_4 = { class: "el-page-header__content" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, [
    createVNode("div", {
      class: "el-page-header__left",
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
    }, [
      _hoisted_2,
      createVNode("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(_ctx.title), 1 /* TEXT */)
        ])
      ])
    ]),
    createVNode("div", _hoisted_4, [
      renderSlot(_ctx.$slots, "content", {}, () => [
        createTextVNode(toDisplayString(_ctx.content), 1 /* TEXT */)
      ])
    ])
  ]))
}

script.render = render;
script.__file = "packages/page-header/src/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _PageHeader = script;

export default _PageHeader;
