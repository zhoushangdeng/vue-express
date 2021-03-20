import * as _vue from "vue";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { mount } from '@vue/test-utils';
import useClickAway from '../index';
import { ref } from 'vue';
describe('useClickAway', function () {
  test('should work with custom funtion', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var fn, eleRef, wrapRef, removeListener, wrapper;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            fn = jest.fn(function () {});
            eleRef = ref(null);
            wrapRef = ref(null);
            wrapper = mount({
              setup: function setup() {
                removeListener = useClickAway(eleRef, fn, 'click', wrapRef);
                return {
                  eleRef: eleRef,
                  wrapRef: wrapRef
                };
              },
              render: function render() {
                return _vue.createVNode("div", {
                  "ref": "wrapRef"
                }, [_vue.createVNode("h1", {
                  "ref": "eleRef"
                }, null), _vue.createVNode("h2", null, [_vue.createTextVNode("h2")])]);
              }
            });
            _context.next = 6;
            return wrapper.vm.$nextTick();

          case 6:
            wrapper.find('h1').trigger('click');
            expect(fn).toHaveBeenCalledTimes(0);
            wrapper.find('h2').trigger('click');
            expect(fn).toHaveBeenCalledTimes(1);
            removeListener();
            wrapper.find('h2').trigger('click');
            expect(fn).toHaveBeenCalledTimes(1);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});