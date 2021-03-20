import { raf, cancelRaf } from '@vant/use';
import { getScrollTop, setScrollTop } from '../utils';
var rafId;
export function scrollLeftTo(scroller, to, duration) {
  cancelRaf(rafId);
  var count = 0;
  var from = scroller.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);

  function animate() {
    scroller.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      rafId = raf(animate);
    }
  }

  animate();
}
export function scrollTopTo(scroller, to, duration, callback) {
  var current = getScrollTop(scroller);
  var isDown = current < to;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);
  var step = (to - current) / frames;

  function animate() {
    current += step;

    if (isDown && current > to || !isDown && current < to) {
      current = to;
    }

    setScrollTop(scroller, current);

    if (isDown && current < to || !isDown && current > to) {
      raf(animate);
    } else if (callback) {
      raf(callback);
    }
  }

  animate();
}