import * as _vue from "vue";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { mount } from '@vue/test-utils';
import { ref } from 'vue';
import useScroll from '../index';
describe('useScroll', function () {
  it('define', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var elem, scroll, wrapper;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            elem = document.createElement('div');
            elem.style.height = '100px';

            if (document.body) {
              document.body.appendChild(elem);
            }

            wrapper = mount({
              setup: function setup() {
                scroll = useScroll(ref(elem));
                return {};
              },
              render: function render() {
                return _vue.createVNode("h1", {
                  "style": {
                    height: '999px'
                  }
                }, null);
              }
            }, {
              attachTo: elem
            });
            _context.next = 6;
            return wrapper.vm.$nextTick();

          case 6:
            // elem did not trigger scroll
            elem.scrollTop = 120;
            _context.next = 9;
            return wrapper.vm.$nextTick();

          case 9:
            expect(scroll.value.left).toBe(0);
            expect(scroll.value.top).toBe(0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))); // it('define2', async () => {
  //     const el = ref(null)
  //     const scroll = useScroll(el)
  //     const wrapper = mount({
  //         setup() {
  //             return { el }
  //         },
  //         render() {
  //             return (
  //                 <div ref='el' style='height:120px;overflow: scroll;'>
  //                     <h1 style='height:999px'>sad</h1>
  //                 </div>
  //             )
  //         }
  //     })
  //     await wrapper.vm.$nextTick()
  //     el.value.scrollTop = 100
  //     // elem did not trigger scroll
  //     await wrapper.vm.$nextTick()
  //     expect(scroll.value.left).toBe(0);
  //     expect(scroll.value.top).toBe(0);
  // });
});