import { ref } from 'vue';

function useToggle() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var reverseValue = arguments.length > 1 ? arguments[1] : undefined;
  reverseValue = reverseValue === undefined ? !defaultValue : reverseValue;
  var stateRef = ref(defaultValue);

  function toggle(value) {
    if (value === undefined) {
      stateRef.value = stateRef.value === defaultValue ? reverseValue : defaultValue;
      return;
    }

    if (value === defaultValue || value === reverseValue) {
      stateRef.value = value;
    } else {
      stateRef.value = stateRef.value === defaultValue ? reverseValue : defaultValue;
      console.warn("Function toggle parameter must be ".concat(defaultValue, " or ").concat(reverseValue));
    }

    return;
  }

  function setLeft() {
    stateRef.value = defaultValue;
  }

  function setRight() {
    stateRef.value = reverseValue;
  }

  var actions = {
    toggle: toggle,
    setLeft: setLeft,
    setRight: setRight
  };
  return [stateRef, actions];
}

export default useToggle;