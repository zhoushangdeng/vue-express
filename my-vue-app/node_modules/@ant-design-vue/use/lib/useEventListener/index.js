"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

function useEventListener(target, option) {
  var type = option.type,
      listener = option.listener,
      options = option.options;
  var eleIsRef = (0, _vue.isRef)(target);

  if (eleIsRef) {
    var bindEle = target;
    var prevEle = null;
    var destroyWatcher = (0, _vue.watchEffect)(function () {
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

    (0, _vue.onBeforeUnmount)(function () {
      removeListener(true);
    });
    return removeListener;
  } else {
    var _bindEle = target;

    _bindEle.addEventListener(type, listener, options);

    var _removeListener = function _removeListener() {
      _bindEle.removeEventListener(type, listener);
    };

    (0, _vue.onBeforeUnmount)(function () {
      _removeListener();
    });
    return _removeListener;
  }
}

var _default = useEventListener;
exports["default"] = _default;