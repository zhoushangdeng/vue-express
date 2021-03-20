import { ref } from 'vue';

function useReactiveRef() {
  var prevEle = null;
  var eleRef = ref(prevEle);

  function setEle(ele) {
    if (prevEle === ele) return;
    prevEle = ele;
    eleRef.value = prevEle;
  }

  return [eleRef, setEle];
}

export default useReactiveRef;