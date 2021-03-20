import { h } from 'vue';
import { inBrowser } from './util';
export default (function (lazy) {
  return {
    props: {
      tag: {
        type: String,
        default: 'div'
      }
    },
    emits: ['show'],
    render: function render() {
      return h(this.tag, this.show && this.$slots.default ? this.$slots.default() : null);
    },
    data: function data() {
      return {
        el: null,
        state: {
          loaded: false
        },
        rect: {},
        show: false
      };
    },
    mounted: function mounted() {
      this.el = this.$el;
      lazy.addLazyBox(this);
      lazy.lazyLoadHandler();
    },
    beforeUnmount: function beforeUnmount() {
      lazy.removeComponent(this);
    },
    methods: {
      getRect: function getRect() {
        this.rect = this.$el.getBoundingClientRect();
      },
      checkInView: function checkInView() {
        this.getRect();
        return inBrowser && this.rect.top < window.innerHeight * lazy.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * lazy.options.preLoad && this.rect.right > 0;
      },
      load: function load() {
        this.show = true;
        this.state.loaded = true;
        this.$emit('show', this);
      },
      destroy: function destroy() {
        return this.$destroy;
      }
    }
  };
});