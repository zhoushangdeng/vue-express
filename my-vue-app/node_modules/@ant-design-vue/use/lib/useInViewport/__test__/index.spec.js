"use strict";

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('useInViewport', function () {
  it('should be defined', function () {
    expect(_index["default"]).toBeDefined();
  }); // it('with argument', async () => {
  //   const eleRef = ref(null)
  //   let inViewPort!: Ref<boolean> | Ref<null>
  //   const wrapper = shallowMount({
  //     setup() {
  //       inViewPort = useInViewport(eleRef);
  //       return { eleRef };
  //     },
  //     render(_ctx) {
  //       return (
  //         <h1 ref='eleRef' >
  //         </h1>
  //       )
  //     }
  //   });
  //   await wrapper.vm.$nextTick()
  //   expect(inViewPort.value).toBe(true)
  // });
});