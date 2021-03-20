import * as _vue from "vue";
import { ref } from 'vue';
import useEventListener from '../index';
export default {
  setup: function setup() {
    var count = ref(0);
    var eleRef = ref(null);
    useEventListener(eleRef, {
      type: 'click',
      listener: function listener() {
        count.value++;
      }
    });
    return {
      eleRef: eleRef,
      count: count
    };
  },
  render: function render(_ctx) {
    return _vue.createVNode(_vue.Fragment, null, [_vue.createVNode("div", {
      "ref": "eleRef"
    }, [_vue.createTextVNode("click me")]), _vue.createVNode("div", null, [_ctx.count])]);
  }
};