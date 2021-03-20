import _extends from "@babel/runtime/helpers/esm/extends";

/* eslint-disable max-classes-per-file */
import { find, remove, ArrayFrom } from './util';
var defaultOptions = {
  selector: 'img'
};

var LazyContainer = /*#__PURE__*/function () {
  function LazyContainer(_ref) {
    var el = _ref.el,
        binding = _ref.binding,
        vnode = _ref.vnode,
        lazy = _ref.lazy;
    this.el = null;
    this.vnode = vnode;
    this.binding = binding;
    this.options = {};
    this.lazy = lazy;
    this._queue = [];
    this.update({
      el: el,
      binding: binding
    });
  }

  var _proto = LazyContainer.prototype;

  _proto.update = function update(_ref2) {
    var _this = this;

    var el = _ref2.el,
        binding = _ref2.binding;
    this.el = el;
    this.options = _extends({}, defaultOptions, binding.value);
    var imgs = this.getImgs();
    imgs.forEach(function (el) {
      _this.lazy.add(el, _extends({}, _this.binding, {
        value: {
          src: 'dataset' in el ? el.dataset.src : el.getAttribute('data-src'),
          error: ('dataset' in el ? el.dataset.error : el.getAttribute('data-error')) || _this.options.error,
          loading: ('dataset' in el ? el.dataset.loading : el.getAttribute('data-loading')) || _this.options.loading
        }
      }), _this.vnode);
    });
  };

  _proto.getImgs = function getImgs() {
    return ArrayFrom(this.el.querySelectorAll(this.options.selector));
  };

  _proto.clear = function clear() {
    var _this2 = this;

    var imgs = this.getImgs();
    imgs.forEach(function (el) {
      return _this2.lazy.remove(el);
    });
    this.vnode = null;
    this.binding = null;
    this.lazy = null;
  };

  return LazyContainer;
}();

var LazyContainerMananger = /*#__PURE__*/function () {
  function LazyContainerMananger(_ref3) {
    var lazy = _ref3.lazy;
    this.lazy = lazy;
    lazy.lazyContainerMananger = this;
    this._queue = [];
  }

  var _proto2 = LazyContainerMananger.prototype;

  _proto2.bind = function bind(el, binding, vnode) {
    var container = new LazyContainer({
      el: el,
      binding: binding,
      vnode: vnode,
      lazy: this.lazy
    });

    this._queue.push(container);
  };

  _proto2.update = function update(el, binding, vnode) {
    var container = find(this._queue, function (item) {
      return item.el === el;
    });
    if (!container) return;
    container.update({
      el: el,
      binding: binding,
      vnode: vnode
    });
  };

  _proto2.unbind = function unbind(el) {
    var container = find(this._queue, function (item) {
      return item.el === el;
    });
    if (!container) return;
    container.clear();
    remove(this._queue, container);
  };

  return LazyContainerMananger;
}();

export { LazyContainerMananger as default };