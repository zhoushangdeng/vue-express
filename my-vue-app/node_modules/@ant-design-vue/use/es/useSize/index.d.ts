import { Ref } from 'vue';
declare type Size = {
    width?: number;
    height?: number;
};
declare function useSize(target?: Ref<Element | Window | null>): [Size, Ref];
export default useSize;
