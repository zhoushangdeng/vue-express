import { createVNode as _createVNode } from "vue";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { defineComponent, reactive } from 'vue';
import classNames from '../_util/classNames';
import createRef from '../_util/createRef';
import raf from '../_util/raf';
import supportsPassive from '../_util/supportsPassive';
import PropTypes from '../_util/vue-types';
var MIN_SIZE = 20;

function getPageY(e) {
  return 'touches' in e ? e.touches[0].pageY : e.pageY;
}

export default defineComponent({
  name: 'ScrollBar',
  inheritAttrs: false,
  props: {
    prefixCls: PropTypes.string,
    scrollTop: PropTypes.number,
    scrollHeight: PropTypes.number,
    height: PropTypes.number,
    count: PropTypes.number,
    onScroll: {
      type: Function
    },
    onStartMove: {
      type: Function
    },
    onStopMove: {
      type: Function
    }
  },
  setup: function setup() {
    return {
      moveRaf: null,
      scrollbarRef: createRef(),
      thumbRef: createRef(),
      visibleTimeout: null,
      state: reactive({
        dragging: false,
        pageY: null,
        startTop: null,
        visible: false
      })
    };
  },
  watch: {
    scrollTop: {
      handler: function handler() {
        this.delayHidden();
      },
      flush: 'post'
    }
  },
  mounted: function mounted() {
    this.scrollbarRef.current.addEventListener('touchstart', this.onScrollbarTouchStart, supportsPassive ? {
      passive: false
    } : false);
    this.thumbRef.current.addEventListener('touchstart', this.onMouseDown, supportsPassive ? {
      passive: false
    } : false);
  },
  beforeUnmount: function beforeUnmount() {
    this.removeEvents();
    clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden: function delayHidden() {
      var _this = this;

      clearTimeout(this.visibleTimeout);
      this.state.visible = true;
      this.visibleTimeout = setTimeout(function () {
        _this.state.visible = false;
      }, 2000);
    },
    onScrollbarTouchStart: function onScrollbarTouchStart(e) {
      e.preventDefault();
    },
    onContainerMouseDown: function onContainerMouseDown(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    // ======================= Clean =======================
    patchEvents: function patchEvents() {
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
      this.thumbRef.current.addEventListener('touchmove', this.onMouseMove, supportsPassive ? {
        passive: false
      } : false);
      this.thumbRef.current.addEventListener('touchend', this.onMouseUp);
    },
    removeEvents: function removeEvents() {
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('mouseup', this.onMouseUp);
      this.scrollbarRef.current.removeEventListener('touchstart', this.onScrollbarTouchStart, supportsPassive ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener('touchstart', this.onMouseDown, supportsPassive ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener('touchmove', this.onMouseMove, supportsPassive ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener('touchend', this.onMouseUp);
      raf.cancel(this.moveRaf);
    },
    // ======================= Thumb =======================
    onMouseDown: function onMouseDown(e) {
      var onStartMove = this.$props.onStartMove;

      _extends(this.state, {
        dragging: true,
        pageY: getPageY(e),
        startTop: this.getTop()
      });

      onStartMove();
      this.patchEvents();
      e.stopPropagation();
      e.preventDefault();
    },
    onMouseMove: function onMouseMove(e) {
      var _this$state = this.state,
          dragging = _this$state.dragging,
          pageY = _this$state.pageY,
          startTop = _this$state.startTop;
      var onScroll = this.$props.onScroll;
      raf.cancel(this.moveRaf);

      if (dragging) {
        var offsetY = getPageY(e) - pageY;
        var newTop = startTop + offsetY;
        var enableScrollRange = this.getEnableScrollRange();
        var enableHeightRange = this.getEnableHeightRange();
        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        this.moveRaf = raf(function () {
          onScroll(newScrollTop);
        });
      }
    },
    onMouseUp: function onMouseUp() {
      var onStopMove = this.$props.onStopMove;
      this.state.dragging = false;
      onStopMove();
      this.removeEvents();
    },
    // ===================== Calculate =====================
    getSpinHeight: function getSpinHeight() {
      var _this$$props = this.$props,
          height = _this$$props.height,
          count = _this$$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    },
    getEnableScrollRange: function getEnableScrollRange() {
      var _this$$props2 = this.$props,
          scrollHeight = _this$$props2.scrollHeight,
          height = _this$$props2.height;
      return scrollHeight - height || 0;
    },
    getEnableHeightRange: function getEnableHeightRange() {
      var height = this.$props.height;
      var spinHeight = this.getSpinHeight();
      return height - spinHeight || 0;
    },
    getTop: function getTop() {
      var scrollTop = this.$props.scrollTop;
      var enableScrollRange = this.getEnableScrollRange();
      var enableHeightRange = this.getEnableHeightRange();

      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }

      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    },
    // Not show scrollbar when height is large thane scrollHeight
    getVisible: function getVisible() {
      var visible = this.state.visible;
      var _this$$props3 = this.$props,
          height = _this$$props3.height,
          scrollHeight = _this$$props3.scrollHeight;

      if (height >= scrollHeight) {
        return false;
      }

      return visible;
    }
  },
  render: function render() {
    // eslint-disable-next-line no-unused-vars
    var dragging = this.state.dragging;
    var prefixCls = this.$props.prefixCls;
    var spinHeight = this.getSpinHeight() + 'px';
    var top = this.getTop() + 'px';
    var visible = this.getVisible();
    return _createVNode("div", {
      "ref": this.scrollbarRef,
      "class": "".concat(prefixCls, "-scrollbar"),
      "style": {
        width: '8px',
        top: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: visible ? undefined : 'none'
      },
      "onMousedown": this.onContainerMouseDown,
      "onMousemove": this.delayHidden
    }, [_createVNode("div", {
      "ref": this.thumbRef,
      "class": classNames("".concat(prefixCls, "-scrollbar-thumb"), _defineProperty({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
      "style": {
        width: '100%',
        height: spinHeight,
        top: top,
        left: 0,
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '99px',
        cursor: 'pointer',
        userSelect: 'none'
      },
      "onMousedown": this.onMouseDown
    }, null)]);
  }
});