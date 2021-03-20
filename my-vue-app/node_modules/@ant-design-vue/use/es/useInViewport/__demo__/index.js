import * as _vue from "vue";
import { ref } from 'vue';
import useInViewport from '../index';
export default {
  setup: function setup() {
    var ele = ref(null);
    var inViewPort = useInViewport(ele);
    return {
      ele: ele,
      inViewPort: inViewPort
    };
  },
  render: function render(_ctx) {
    return _vue.createVNode("div", null, [_vue.createVNode("div", {
      "ref": "ele"
    }, [_vue.createTextVNode("observer dom")]), _vue.createVNode("div", {
      "style": {
        marginTop: 70,
        color: _ctx.inViewPort ? '#87d068' : '#f50'
      }
    }, [_ctx.inViewPort === null ? '' : _ctx.inViewPort ? 'visible' : 'hidden'])]);
  }
};