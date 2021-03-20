import { unref } from 'vue';
import { inBrowser } from '../utils';
import { useEventListener } from '../useEventListener';
export function useClickAway(target, listener, options) {
  if (options === void 0) {
    options = {};
  }

  if (!inBrowser) {
    return;
  }

  var _options = options,
      _options$eventName = _options.eventName,
      eventName = _options$eventName === void 0 ? 'click' : _options$eventName;

  var onClick = function onClick(event) {
    var element = unref(target);

    if (element && !element.contains(event.target)) {
      listener(event);
    }
  };

  useEventListener(eventName, onClick, {
    target: document
  });
}