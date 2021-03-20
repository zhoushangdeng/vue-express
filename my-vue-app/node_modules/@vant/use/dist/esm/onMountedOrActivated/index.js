import { nextTick, onMounted, onActivated } from 'vue';
export function onMountedOrActivated(hook) {
  var mounted;
  onMounted(function () {
    hook();
    nextTick(function () {
      mounted = true;
    });
  });
  onActivated(function () {
    if (mounted) {
      hook();
    }
  });
}