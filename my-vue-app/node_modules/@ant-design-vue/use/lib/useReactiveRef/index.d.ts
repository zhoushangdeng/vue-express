import { ComponentPublicInstance, Ref } from 'vue';
declare type ElementType = HTMLElement | ComponentPublicInstance;
declare function useReactiveRef(): [Ref<ElementType>, (...args: any) => void];
export default useReactiveRef;
