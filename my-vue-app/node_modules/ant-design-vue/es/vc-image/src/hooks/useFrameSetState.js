function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import raf from '../../../_util/raf';
import { onMounted, reactive, ref } from 'vue';
export default function useFrameSetState(initial) {
  var frame = ref(null);
  var state = reactive(_extends({}, initial));
  var queue = ref([]);

  var setFrameState = function setFrameState(newState) {
    if (frame.value === null) {
      queue.value = [];
      frame.value = raf(function () {
        var memoState;
        queue.value.forEach(function (queueState) {
          memoState = _extends(_extends({}, memoState), queueState);
        });

        _extends(state, memoState);

        frame.value = null;
      });
    }

    queue.value.push(newState);
  };

  onMounted(function () {
    frame.value && raf.cancel(frame.value);
  });
  return [state, setFrameState];
}