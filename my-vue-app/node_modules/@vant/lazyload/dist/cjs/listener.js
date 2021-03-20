"use strict";

exports.__esModule = true;
exports.default = void 0;

var _util = require("./util");

// el: {
//     state,
//     src,
//     error,
//     loading
// }
var ReactiveListener = /*#__PURE__*/function () {
  function ReactiveListener(_ref) {
    var el = _ref.el,
        src = _ref.src,
        error = _ref.error,
        loading = _ref.loading,
        bindType = _ref.bindType,
        $parent = _ref.$parent,
        options = _ref.options,
        cors = _ref.cors,
        elRenderer = _ref.elRenderer,
        imageCache = _ref.imageCache;
    this.el = el;
    this.src = src;
    this.error = error;
    this.loading = loading;
    this.bindType = bindType;
    this.attempt = 0;
    this.cors = cors;
    this.naturalHeight = 0;
    this.naturalWidth = 0;
    this.options = options;
    this.rect = null;
    this.$parent = $parent;
    this.elRenderer = elRenderer;
    this._imageCache = imageCache;
    this.performanceData = {
      init: Date.now(),
      loadStart: 0,
      loadEnd: 0
    };
    this.filter();
    this.initState();
    this.render('loading', false);
  }
  /*
   * init listener state
   * @return
   */


  var _proto = ReactiveListener.prototype;

  _proto.initState = function initState() {
    if ('dataset' in this.el) {
      this.el.dataset.src = this.src;
    } else {
      this.el.setAttribute('data-src', this.src);
    }

    this.state = {
      loading: false,
      error: false,
      loaded: false,
      rendered: false
    };
  }
  /*
   * record performance
   * @return
   */
  ;

  _proto.record = function record(event) {
    this.performanceData[event] = Date.now();
  }
  /*
   * update image listener data
   * @param  {String} image uri
   * @param  {String} loading image uri
   * @param  {String} error image uri
   * @return
   */
  ;

  _proto.update = function update(_ref2) {
    var src = _ref2.src,
        loading = _ref2.loading,
        error = _ref2.error;
    var oldSrc = this.src;
    this.src = src;
    this.loading = loading;
    this.error = error;
    this.filter();

    if (oldSrc !== this.src) {
      this.attempt = 0;
      this.initState();
    }
  }
  /*
   * get el node rect
   * @return
   */
  ;

  _proto.getRect = function getRect() {
    this.rect = this.el.getBoundingClientRect();
  }
  /*
   *  check el is in view
   * @return {Boolean} el is in view
   */
  ;

  _proto.checkInView = function checkInView() {
    this.getRect();
    return this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop && this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0;
  }
  /*
   * listener filter
   */
  ;

  _proto.filter = function filter() {
    var _this = this;

    Object.keys(this.options.filter).forEach(function (key) {
      _this.options.filter[key](_this, _this.options);
    });
  }
  /*
   * render loading first
   * @params cb:Function
   * @return
   */
  ;

  _proto.renderLoading = function renderLoading(cb) {
    var _this2 = this;

    this.state.loading = true;
    (0, _util.loadImageAsync)({
      src: this.loading,
      cors: this.cors
    }, function () {
      _this2.render('loading', false);

      _this2.state.loading = false;
      cb();
    }, function () {
      // handler `loading image` load failed
      cb();
      _this2.state.loading = false;
      if (!_this2.options.silent) console.warn("VueLazyload log: load failed with loading image(" + _this2.loading + ")");
    });
  }
  /*
   * try load image and  render it
   * @return
   */
  ;

  _proto.load = function load(onFinish) {
    var _this3 = this;

    if (onFinish === void 0) {
      onFinish = _util.noop;
    }

    if (this.attempt > this.options.attempt - 1 && this.state.error) {
      if (!this.options.silent) console.log("VueLazyload log: " + this.src + " tried too more than " + this.options.attempt + " times");
      onFinish();
      return;
    }

    if (this.state.rendered && this.state.loaded) return;

    if (this._imageCache.has(this.src)) {
      this.state.loaded = true;
      this.render('loaded', true);
      this.state.rendered = true;
      return onFinish();
    }

    this.renderLoading(function () {
      _this3.attempt++;
      _this3.options.adapter.beforeLoad == null ? void 0 : _this3.options.adapter.beforeLoad(_this3, _this3.options);

      _this3.record('loadStart');

      (0, _util.loadImageAsync)({
        src: _this3.src,
        cors: _this3.cors
      }, function (data) {
        _this3.naturalHeight = data.naturalHeight;
        _this3.naturalWidth = data.naturalWidth;
        _this3.state.loaded = true;
        _this3.state.error = false;

        _this3.record('loadEnd');

        _this3.render('loaded', false);

        _this3.state.rendered = true;

        _this3._imageCache.add(_this3.src);

        onFinish();
      }, function (err) {
        !_this3.options.silent && console.error(err);
        _this3.state.error = true;
        _this3.state.loaded = false;

        _this3.render('error', false);
      });
    });
  }
  /*
   * render image
   * @param  {String} state to render // ['loading', 'src', 'error']
   * @param  {String} is form cache
   * @return
   */
  ;

  _proto.render = function render(state, cache) {
    this.elRenderer(this, state, cache);
  }
  /*
   * output performance data
   * @return {Object} performance data
   */
  ;

  _proto.performance = function performance() {
    var state = 'loading';
    var time = 0;

    if (this.state.loaded) {
      state = 'loaded';
      time = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1000;
    }

    if (this.state.error) state = 'error';
    return {
      src: this.src,
      state: state,
      time: time
    };
  }
  /*
   * $destroy
   * @return
   */
  ;

  _proto.$destroy = function $destroy() {
    this.el = null;
    this.src = null;
    this.error = null;
    this.loading = null;
    this.bindType = null;
    this.attempt = 0;
  };

  return ReactiveListener;
}();

exports.default = ReactiveListener;