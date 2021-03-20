import * as _vue from "vue";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable @typescript-eslint/no-empty-function */
import { shallowMount } from '@vue/test-utils';
import useEventListener from '../index';
import { ref } from 'vue';
describe('useEventListener', function () {
  test('should work with Ref<HTMLElement> parameter', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var clickFn, eleRef, removeListener, wrapper;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            clickFn = jest.fn(function () {});
            eleRef = ref(null);
            wrapper = shallowMount({
              setup: function setup() {
                removeListener = useEventListener(eleRef, {
                  type: 'click',
                  listener: clickFn
                });
                return {
                  eleRef: eleRef
                };
              },
              render: function render() {
                return _vue.createVNode(_vue.Fragment, null, [_vue.createVNode("h1", {
                  "ref": "eleRef"
                }, [_vue.createTextVNode("click")])]);
              }
            });
            _context.next = 5;
            return wrapper.vm.$nextTick();

          case 5:
            expect(clickFn).toHaveBeenCalledTimes(0);
            wrapper.find('h1').trigger('click');
            expect(clickFn).toHaveBeenCalledTimes(1);
            removeListener();
            wrapper.find('h1').trigger('click');
            expect(clickFn).toHaveBeenCalledTimes(1);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('should work with HTMLElement parameter', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var clickFn, eleRef, removeListener, wrapper;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            clickFn = jest.fn(function () {});
            eleRef = ref(null);
            wrapper = shallowMount({
              setup: function setup() {
                removeListener = useEventListener(eleRef, {
                  type: 'click',
                  listener: clickFn
                });
                return {
                  eleRef: eleRef
                };
              },
              render: function render() {
                return _vue.createVNode(_vue.Fragment, null, [_vue.createVNode("h1", {
                  "ref": "eleRef"
                }, [_vue.createTextVNode("click")])]);
              }
            });
            _context2.next = 5;
            return wrapper.vm.$nextTick();

          case 5:
            expect(clickFn).toHaveBeenCalledTimes(0);
            wrapper.find('h1').trigger('click');
            expect(clickFn).toHaveBeenCalledTimes(1);
            removeListener();
            wrapper.find('h1').trigger('click');
            expect(clickFn).toHaveBeenCalledTimes(1);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});