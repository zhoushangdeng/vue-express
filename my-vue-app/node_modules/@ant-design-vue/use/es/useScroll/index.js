import { ref } from 'vue';
import useEventListener from '../useEventListener';
export default function useScroll(target) {
  var position = ref({
    left: 0,
    top: 0
  });

  var updatePosition = function updatePosition(currentTarget) {
    var newPosition;

    if (currentTarget === document) {
      if (!document.scrollingElement) return;
      newPosition = {
        left: document.scrollingElement.scrollLeft,
        top: document.scrollingElement.scrollTop
      };
    } else {
      newPosition = {
        left: currentTarget.scrollLeft,
        top: currentTarget.scrollTop
      };
    }

    position.value = newPosition;
  };

  var listener = function listener(event) {
    if (!event.target) return;
    updatePosition(event.target);
  };

  useEventListener(target, {
    type: 'scroll',
    listener: listener
  });
  return position;
}