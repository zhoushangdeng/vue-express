import { Ref } from 'vue';
declare function useEventListener(target: Ref<HTMLElement | Document | Window> | HTMLElement | Document | Window, option: {
    type: string;
    listener: EventListenerOrEventListenerObject;
    options?: boolean | AddEventListenerOptions;
}): () => void;
export default useEventListener;
