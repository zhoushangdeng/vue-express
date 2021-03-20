import * as _vue from "vue";
import { ref } from 'vue';
import useScroll from '../index';
export default {
  setup: function setup() {
    var eleRef = ref(null);
    var scroll = useScroll(eleRef);
    return {
      eleRef: eleRef,
      scroll: scroll
    };
  },
  render: function render(_ctx) {
    return _vue.createVNode(_vue.Fragment, null, [_vue.createVNode("div", null, [JSON.stringify(_ctx.scroll)]), _vue.createVNode("div", {
      "style": {
        height: '160px',
        width: '160px',
        border: 'solid 1px #000',
        overflow: 'scroll',
        whiteSpace: 'nowrap',
        fontSize: '32px'
      },
      "ref": "eleRef"
    }, [_vue.createVNode("div", null, [_vue.createTextVNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur atque, debitis ex excepturi explicabo iste iure labore molestiae neque optio perspiciatis")]), _vue.createVNode("div", null, [_vue.createTextVNode("Aspernatur cupiditate, deleniti id incidunt mollitia omnis! A aspernatur assumenda consequuntur culpa cumque dignissimos enim eos, et fugit natus nemo nesciunt")]), _vue.createVNode("div", null, [_vue.createTextVNode("Alias aut deserunt expedita, inventore maiores minima officia porro rem. Accusamus ducimus magni modi mollitia nihil nisi provident")]), _vue.createVNode("div", null, [_vue.createTextVNode("Alias aut autem consequuntur doloremque esse facilis id molestiae neque officia placeat, quia quisquam repellendus reprehenderit.")]), _vue.createVNode("div", null, [_vue.createTextVNode("Adipisci blanditiis facere nam perspiciatis sit soluta ullam! Architecto aut blanditiis, consectetur corporis cum deserunt distinctio dolore eius est exercitationem")]), _vue.createVNode("div", null, [_vue.createTextVNode("Ab aliquid asperiores assumenda corporis cumque dolorum expedita")]), _vue.createVNode("div", null, [_vue.createTextVNode("Culpa cumque eveniet natus totam! Adipisci, animi at commodi delectus distinctio dolore earum, eum expedita facilis")]), _vue.createVNode("div", null, [_vue.createTextVNode("Quod sit, temporibus! Amet animi fugit officiis perspiciatis, quis unde. Cumque dignissimos distinctio, dolor eaque est fugit nisi non pariatur porro possimus, quas quasi")])])]);
  }
};