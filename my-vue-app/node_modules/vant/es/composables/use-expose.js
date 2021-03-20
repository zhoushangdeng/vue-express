import _extends from "@babel/runtime/helpers/esm/extends";
import { getCurrentInstance } from 'vue'; // expose public api

export function useExpose(apis) {
  var instance = getCurrentInstance();

  if (instance) {
    _extends(instance.proxy, apis);
  }
}