"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = require("vue");

var _util = require("./util");

var _listener = _interopRequireDefault(require("./listener"));

var DEFAULT_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
var DEFAULT_EVENTS = ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'];
var DEFAULT_OBSERVER_OPTIONS = {
  rootMargin: '0px',
  threshold: 0
};

function _default() {
  return /*#__PURE__*/function () {
    function Lazy(_ref) {
      var preLoad = _ref.preLoad,
          error = _ref.error,
          throttleWait = _ref.throttleWait,
          preLoadTop = _ref.preLoadTop,
          dispatchEvent = _ref.dispatchEvent,
          loading = _ref.loading,
          attempt = _ref.attempt,
          _ref$silent = _ref.silent,
          silent = _ref$silent === void 0 ? true : _ref$silent,
          scale = _ref.scale,
          listenEvents = _ref.listenEvents,
          filter = _ref.filter,
          adapter = _ref.adapter,
          observer = _ref.observer,
          observerOptions = _ref.observerOptions;
      this.version = '__VUE_LAZYLOAD_VERSION__';
      this.mode = _util.modeType.event;
      this.ListenerQueue = [];
      this.TargetIndex = 0;
      this.TargetQueue = [];
      this.options = {
        silent: silent,
        dispatchEvent: !!dispatchEvent,
        throttleWait: throttleWait || 200,
        preLoad: preLoad || 1.3,
        preLoadTop: preLoadTop || 0,
        error: error || DEFAULT_URL,
        loading: loading || DEFAULT_URL,
        attempt: attempt || 3,
        scale: scale || (0, _util.getDPR)(scale),
        ListenEvents: listenEvents || DEFAULT_EVENTS,
        hasbind: false,
        supportWebp: (0, _util.supportWebp)(),
        filter: filter || {},
        adapter: adapter || {},
        observer: !!observer,
        observerOptions: observerOptions || DEFAULT_OBSERVER_OPTIONS
      };

      this._initEvent();

      this._imageCache = new _util.ImageCache({
        max: 200
      });
      this.lazyLoadHandler = (0, _util.throttle)(this._lazyLoadHandler.bind(this), this.options.throttleWait);
      this.setMode(this.options.observer ? _util.modeType.observer : _util.modeType.event);
    }
    /**
     * update config
     * @param  {Object} config params
     * @return
     */


    var _proto = Lazy.prototype;

    _proto.config = function config(options) {
      if (options === void 0) {
        options = {};
      }

      this.options = (0, _extends2.default)({}, this.options, {
        options: options
      });
    }
    /**
     * output listener's load performance
     * @return {Array}
     */
    ;

    _proto.performance = function performance() {
      return this.ListenerQueue.map(function (item) {
        return item.performance();
      });
    }
    /*
     * add lazy component to queue
     * @param  {Vue} vm lazy component instance
     * @return
     */
    ;

    _proto.addLazyBox = function addLazyBox(vm) {
      this.ListenerQueue.push(vm);

      if (_util.inBrowser) {
        this._addListenerTarget(window);

        this._observer && this._observer.observe(vm.el);

        if (vm.$el && vm.$el.parentNode) {
          this._addListenerTarget(vm.$el.parentNode);
        }
      }
    }
    /*
     * add image listener to queue
     * @param  {DOM} el
     * @param  {object} binding vue directive binding
     * @param  {vnode} vnode vue directive vnode
     * @return
     */
    ;

    _proto.add = function add(el, binding, vnode) {
      var _this = this;

      if ((0, _util.some)(this.ListenerQueue, function (item) {
        return item.el === el;
      })) {
        this.update(el, binding);
        return (0, _vue.nextTick)(this.lazyLoadHandler);
      }

      var value = this._valueFormatter(binding.value);

      var src = value.src;
      (0, _vue.nextTick)(function () {
        src = (0, _util.getBestSelectionFromSrcset)(el, _this.options.scale) || src;
        _this._observer && _this._observer.observe(el);
        var container = Object.keys(binding.modifiers)[0];
        var $parent;

        if (container) {
          $parent = vnode.context.$refs[container]; // if there is container passed in, try ref first, then fallback to getElementById to support the original usage

          $parent = $parent ? $parent.$el || $parent : document.getElementById(container);
        }

        if (!$parent) {
          $parent = (0, _util.scrollParent)(el);
        }

        var newListener = new _listener.default({
          bindType: binding.arg,
          $parent: $parent,
          el: el,
          src: src,
          loading: value.loading,
          error: value.error,
          cors: value.cors,
          elRenderer: _this._elRenderer.bind(_this),
          options: _this.options,
          imageCache: _this._imageCache
        });

        _this.ListenerQueue.push(newListener);

        if (_util.inBrowser) {
          _this._addListenerTarget(window);

          _this._addListenerTarget($parent);
        }

        _this.lazyLoadHandler();

        (0, _vue.nextTick)(function () {
          return _this.lazyLoadHandler();
        });
      });
    }
    /**
     * update image src
     * @param  {DOM} el
     * @param  {object} vue directive binding
     * @return
     */
    ;

    _proto.update = function update(el, binding, vnode) {
      var _this2 = this;

      var value = this._valueFormatter(binding.value);

      var src = value.src;
      src = (0, _util.getBestSelectionFromSrcset)(el, this.options.scale) || src;
      var exist = (0, _util.find)(this.ListenerQueue, function (item) {
        return item.el === el;
      });

      if (!exist) {
        this.add(el, binding, vnode);
      } else {
        exist.update({
          src: src,
          error: value.error,
          loading: value.loading
        });
      }

      if (this._observer) {
        this._observer.unobserve(el);

        this._observer.observe(el);
      }

      this.lazyLoadHandler();
      (0, _vue.nextTick)(function () {
        return _this2.lazyLoadHandler();
      });
    }
    /**
     * remove listener form list
     * @param  {DOM} el
     * @return
     */
    ;

    _proto.remove = function remove(el) {
      if (!el) return;
      this._observer && this._observer.unobserve(el);
      var existItem = (0, _util.find)(this.ListenerQueue, function (item) {
        return item.el === el;
      });

      if (existItem) {
        this._removeListenerTarget(existItem.$parent);

        this._removeListenerTarget(window);

        (0, _util.remove)(this.ListenerQueue, existItem);
        existItem.$destroy();
      }
    }
    /*
     * remove lazy components form list
     * @param  {Vue} vm Vue instance
     * @return
     */
    ;

    _proto.removeComponent = function removeComponent(vm) {
      if (!vm) return;
      (0, _util.remove)(this.ListenerQueue, vm);
      this._observer && this._observer.unobserve(vm.el);

      if (vm.$parent && vm.$el.parentNode) {
        this._removeListenerTarget(vm.$el.parentNode);
      }

      this._removeListenerTarget(window);
    };

    _proto.setMode = function setMode(mode) {
      var _this3 = this;

      if (!_util.hasIntersectionObserver && mode === _util.modeType.observer) {
        mode = _util.modeType.event;
      }

      this.mode = mode; // event or observer

      if (mode === _util.modeType.event) {
        if (this._observer) {
          this.ListenerQueue.forEach(function (listener) {
            _this3._observer.unobserve(listener.el);
          });
          this._observer = null;
        }

        this.TargetQueue.forEach(function (target) {
          _this3._initListen(target.el, true);
        });
      } else {
        this.TargetQueue.forEach(function (target) {
          _this3._initListen(target.el, false);
        });

        this._initIntersectionObserver();
      }
    }
    /*
     *** Private functions ***
     */

    /*
     * add listener target
     * @param  {DOM} el listener target
     * @return
     */
    ;

    _proto._addListenerTarget = function _addListenerTarget(el) {
      if (!el) return;
      var target = (0, _util.find)(this.TargetQueue, function (target) {
        return target.el === el;
      });

      if (!target) {
        target = {
          el: el,
          id: ++this.TargetIndex,
          childrenCount: 1,
          listened: true
        };
        this.mode === _util.modeType.event && this._initListen(target.el, true);
        this.TargetQueue.push(target);
      } else {
        target.childrenCount++;
      }

      return this.TargetIndex;
    }
    /*
     * remove listener target or reduce target childrenCount
     * @param  {DOM} el or window
     * @return
     */
    ;

    _proto._removeListenerTarget = function _removeListenerTarget(el) {
      var _this4 = this;

      this.TargetQueue.forEach(function (target, index) {
        if (target.el === el) {
          target.childrenCount--;

          if (!target.childrenCount) {
            _this4._initListen(target.el, false);

            _this4.TargetQueue.splice(index, 1);

            target = null;
          }
        }
      });
    }
    /*
     * add or remove eventlistener
     * @param  {DOM} el DOM or Window
     * @param  {boolean} start flag
     * @return
     */
    ;

    _proto._initListen = function _initListen(el, start) {
      var _this5 = this;

      this.options.ListenEvents.forEach(function (evt) {
        return _util._[start ? 'on' : 'off'](el, evt, _this5.lazyLoadHandler);
      });
    };

    _proto._initEvent = function _initEvent() {
      var _this6 = this;

      this.Event = {
        listeners: {
          loading: [],
          loaded: [],
          error: []
        }
      };

      this.$on = function (event, func) {
        if (!_this6.Event.listeners[event]) _this6.Event.listeners[event] = [];

        _this6.Event.listeners[event].push(func);
      };

      this.$once = function (event, func) {
        var on = function on() {
          _this6.$off(event, on);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          func.apply(_this6, args);
        };

        _this6.$on(event, on);
      };

      this.$off = function (event, func) {
        if (!func) {
          if (!_this6.Event.listeners[event]) return;
          _this6.Event.listeners[event].length = 0;
          return;
        }

        (0, _util.remove)(_this6.Event.listeners[event], func);
      };

      this.$emit = function (event, context, inCache) {
        if (!_this6.Event.listeners[event]) return;

        _this6.Event.listeners[event].forEach(function (func) {
          return func(context, inCache);
        });
      };
    }
    /**
     * find nodes which in viewport and trigger load
     * @return
     */
    ;

    _proto._lazyLoadHandler = function _lazyLoadHandler() {
      var _this7 = this;

      var freeList = [];
      this.ListenerQueue.forEach(function (listener) {
        if (!listener.el || !listener.el.parentNode) {
          freeList.push(listener);
        }

        var catIn = listener.checkInView();
        if (!catIn) return;
        listener.load();
      });
      freeList.forEach(function (item) {
        (0, _util.remove)(_this7.ListenerQueue, item);
        item.$destroy();
      });
    }
    /**
     * init IntersectionObserver
     * set mode to observer
     * @return
     */
    ;

    _proto._initIntersectionObserver = function _initIntersectionObserver() {
      var _this8 = this;

      if (!_util.hasIntersectionObserver) {
        return;
      }

      this._observer = new IntersectionObserver(this._observerHandler.bind(this), this.options.observerOptions);

      if (this.ListenerQueue.length) {
        this.ListenerQueue.forEach(function (listener) {
          _this8._observer.observe(listener.el);
        });
      }
    }
    /**
     * init IntersectionObserver
     * @return
     */
    ;

    _proto._observerHandler = function _observerHandler(entries) {
      var _this9 = this;

      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          _this9.ListenerQueue.forEach(function (listener) {
            if (listener.el === entry.target) {
              if (listener.state.loaded) return _this9._observer.unobserve(listener.el);
              listener.load();
            }
          });
        }
      });
    }
    /**
     * set element attribute with image'url and state
     * @param  {object} lazyload listener object
     * @param  {string} state will be rendered
     * @param  {bool} inCache  is rendered from cache
     * @return
     */
    ;

    _proto._elRenderer = function _elRenderer(listener, state, cache) {
      if (!listener.el) return;
      var el = listener.el,
          bindType = listener.bindType;
      var src;

      switch (state) {
        case 'loading':
          src = listener.loading;
          break;

        case 'error':
          src = listener.error;
          break;

        default:
          src = listener.src;
          break;
      }

      if (bindType) {
        el.style[bindType] = 'url("' + src + '")';
      } else if (el.getAttribute('src') !== src) {
        el.setAttribute('src', src);
      }

      el.setAttribute('lazy', state);
      this.$emit(state, listener, cache);
      this.options.adapter[state] && this.options.adapter[state](listener, this.options);

      if (this.options.dispatchEvent) {
        var event = new _util.CustomEvent(state, {
          detail: listener
        });
        el.dispatchEvent(event);
      }
    }
    /**
     * generate loading loaded error image url
     * @param {string} image's src
     * @return {object} image's loading, loaded, error url
     */
    ;

    _proto._valueFormatter = function _valueFormatter(value) {
      var src = value;
      var _this$options = this.options,
          loading = _this$options.loading,
          error = _this$options.error; // value is object

      if ((0, _util.isObject)(value)) {
        if (!value.src && !this.options.silent) console.error('Vue Lazyload warning: miss src with ' + value);
        src = value.src;
        loading = value.loading || this.options.loading;
        error = value.error || this.options.error;
      }

      return {
        src: src,
        loading: loading,
        error: error
      };
    };

    return Lazy;
  }();
}