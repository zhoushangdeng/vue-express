import * as _vue from "vue";
import { ref, defineComponent } from 'vue';
import useClickAway from '../index';
export default defineComponent({
  setup: function setup() {
    var count = ref(0);
    var eleRef = ref(null);
    useClickAway(eleRef, function () {
      count.value++;
    });
    return {
      eleRef: eleRef,
      count: count
    };
  },
  render: function render(_ctx) {
    return _vue.createVNode("div", null, [_vue.createVNode("button", {
      "ref": "eleRef"
    }, [_vue.createTextVNode("click away")]), _vue.createVNode("div", null, [_vue.createTextVNode("count:"), _ctx.count])]);
  }
});