import { watchEffect, isRef, onBeforeUnmount } from 'vue';

function useEventListener(target, option) {
  var type = option.type,
      listener = option.listener,
      options = option.options;
  var eleIsRef = isRef(target);

  if (eleIsRef) {
    var bindEle = target;
    var prevEle = null;
    var destroyWatcher = watchEffect(function () {
      var _bindEle$value;

      (_bindEle$value = bindEle.value) === null || _bindEle$value === void 0 ? void 0 : _bindEle$value.addEventListener(type, listener, options);

      if (prevEle) {
        prevEle.removeEventListener(type, listener);
      }

      prevEle = bindEle === null || bindEle === void 0 ? void 0 : bindEle.value;
    }, {
      flush: 'post'
    });

    var removeListener = function removeListener() {
      var isDestroyWatcher = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      bindEle.value.removeEventListener(type, listener);

      if (isDestroyWatcher) {
        destroyWatcher();
      }
    };

    onBeforeUnmount(function () {
      removeListener(true);
    });
    return removeListener;
  } else {
    var _bindEle = target;

    _bindEle.addEventListener(type, listener, options);

    var _removeListener = function _removeListener() {
      _bindEle.removeEventListener(type, listener);
    };

    onBeforeUnmount(function () {
      _removeListener();
    });
    return _removeListener;
  }
}

export default useEventListener;