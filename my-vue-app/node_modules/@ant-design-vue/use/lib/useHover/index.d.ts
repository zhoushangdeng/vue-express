import { Ref } from 'vue';
export interface Options {
    onEnter?: (e: MouseEvent) => void;
    onLeave?: (e: MouseEvent) => void;
}
declare type Action = {
    actions: {
        removelistener: () => void;
    };
};
/**
 * useHover
 *
 * @param {Ref<HTMLElement>)} ele
 * @param {Options} [options]
 * @returns
 */
declare function useHover(target: Ref<HTMLElement>, options?: Options): [Ref<boolean>, Action];
export default useHover;
