import { ref, watchEffect } from 'vue';
import { isComponentPublicInstance } from '../utils/typeHelpers';
export default function useDraggable() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    controlStyle: true
  };
  var configTarget = config.target,
      handle = config.handle,
      controlStyle = config.controlStyle,
      viewport = config.viewport,
      rectLimits = config.rectLimits;
  var targetRef = configTarget || ref(null);
  var handleRef = handle || ref(null);
  var dragging = ref(null);
  var prev = ref({
    x: 0,
    y: 0
  });
  var delta = ref({
    x: 0,
    y: 0
  });
  var initial = ref({
    x: 0,
    y: 0
  });
  var limits = ref(null);
  var targetEleRef = ref(null);
  var handleEleRef = ref(null);
  watchEffect(function () {
    if (!targetRef.value) {
      targetEleRef.value = null;
    } else {
      targetEleRef.value = isComponentPublicInstance(targetRef.value) ? targetRef.value.$el : targetRef.value;
    }

    if (!handleRef.value) {
      handleEleRef.value = null;
    } else {
      handleEleRef.value = isComponentPublicInstance(handleRef.value) ? handleRef.value.$el : handleRef.value;
    }
  }, {
    flush: 'post'
  });
  watchEffect(function () {
    var handle = handleEleRef.value || targetEleRef.value;
    if (!targetEleRef.value) return;
    handle.addEventListener('mousedown', startDragging);
    handle.addEventListener('touchstart', startDragging);
    return function () {
      handle.removeEventListener('mousedown', startDragging);
      handle.removeEventListener('touchstart', startDragging);
    };

    function startDragging(event) {
      event.preventDefault();
      dragging.value = true;
      var source = event.touches && event.touches[0] || event;
      var clientX = source.clientX,
          clientY = source.clientY;
      initial.value = {
        x: clientX,
        y: clientY
      };

      if (controlStyle) {
        targetEleRef.value.style.willChange = 'transform';
      }

      if (viewport || rectLimits) {
        var _targetEleRef$value$g = targetEleRef.value.getBoundingClientRect(),
            left = _targetEleRef$value$g.left,
            top = _targetEleRef$value$g.top,
            width = _targetEleRef$value$g.width,
            height = _targetEleRef$value$g.height;

        if (viewport) {
          limits.value = {
            minX: -left + delta.value.x,
            maxX: window.innerWidth - width - left + delta.value.x,
            minY: -top + delta.value.y,
            maxY: window.innerHeight - height - top + delta.value.y
          };
        } else {
          limits.value = {
            minX: rectLimits.left - left + delta.value.x,
            maxX: rectLimits.right - width - left + delta.value.x,
            minY: rectLimits.top - top + delta.value.y,
            maxY: rectLimits.bottom - height - top + delta.value.y
          };
        }
      }
    }
  }, {
    flush: 'post'
  });
  watchEffect(function () {
    var handle = handleEleRef.value || targetEleRef.value;
    if (!targetEleRef.value) return;

    var reposition = function reposition(event) {
      var source = event.changedTouches && event.changedTouches[0] || event.touches && event.touches[0] || event;
      var clientX = source.clientX,
          clientY = source.clientY;
      var x = clientX - initial.value.x + prev.value.x;
      var y = clientY - initial.value.y + prev.value.y;
      var newDelta = calcDelta({
        x: x,
        y: y,
        limits: limits.value
      });
      delta.value = newDelta;
      return newDelta;
    };

    if (dragging.value) {
      document.addEventListener('mousemove', reposition, {
        passive: true
      });
      document.addEventListener('touchmove', reposition, {
        passive: true
      });
      document.addEventListener('mouseup', stopDragging);
      document.addEventListener('touchend', stopDragging);
    }

    if (controlStyle) {
      handle.style.cursor = dragging.value ? 'grabbing' : 'grab';
    }

    return function () {
      if (controlStyle) {
        handle.style.cursor = 'unset';
      }

      document.removeEventListener('mousemove', reposition);
      document.removeEventListener('touchmove', reposition);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('touchend', stopDragging);
    };

    function stopDragging(event) {
      event.preventDefault();
      dragging.value = false;
      document.removeEventListener('mousemove', reposition);
      document.removeEventListener('touchmove', reposition);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('touchend', stopDragging);
      var newDelta = reposition(event);
      prev.value = newDelta;

      if (controlStyle) {
        targetEleRef.value.style.willChange = '';
      }
    }
  }, {
    flush: 'post'
  });
  watchEffect(function () {
    targetEleRef.value && (targetEleRef.value.style.transform = "translate(".concat(delta.value.x, "px, ").concat(delta.value.y, "px)"));
  }, {
    flush: 'post'
  });

  var getTargetProps = function getTargetProps() {
    return {
      'aria-grabbed': dragging.value || null
    };
  };

  var resetState = function resetState() {
    delta.value = {
      x: 0,
      y: 0
    };
    prev.value = {
      x: 0,
      y: 0
    };
  };

  return [targetRef, handleRef, {
    getTargetProps: getTargetProps,
    dragging: dragging,
    delta: delta,
    resetState: resetState
  }];
}

function calcDelta(_ref) {
  var x = _ref.x,
      y = _ref.y,
      limits = _ref.limits;

  if (!limits) {
    return {
      x: x,
      y: y
    };
  }

  var minX = limits.minX,
      maxX = limits.maxX,
      minY = limits.minY,
      maxY = limits.maxY;
  return {
    x: Math.min(Math.max(x, minX), maxX),
    y: Math.min(Math.max(y, minY), maxY)
  };
}