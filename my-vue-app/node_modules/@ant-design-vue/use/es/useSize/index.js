import { reactive, onMounted, watch, ref } from 'vue';
import ResizeObserver from 'resize-observer-polyfill';

function useSize(target) {
  var elRef = target || ref(null);
  var state = reactive({
    width: (elRef || {}).clientWidth,
    height: (elRef || {}).clientHeight
  });
  onMounted(function () {
    var resizeObserver = null;
    watch(elRef, function (el, preElm, onInvalidate) {
      if (!el) return;
      resizeObserver && resizeObserver.disconnect();
      resizeObserver = new ResizeObserver(function (entries) {
        entries.forEach(function (entry) {
          state.width = entry.target.clientWidth;
          state.height = entry.target.clientHeight;
        });
      });
      resizeObserver.observe(el);
      onInvalidate(function () {
        resizeObserver && resizeObserver.disconnect();
      });
    }, {
      immediate: true
    });
  });
  return [state, elRef];
}

export default useSize;