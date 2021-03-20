import { Ref } from 'vue';
export declare type BasicTarget<T = HTMLElement> = (() => T | null) | T | null | Ref | Ref<T | null | undefined>;
declare type TargetElement = HTMLElement | Document | Window | Ref;
export declare function getTargetElement(target?: BasicTarget<TargetElement>, defaultElement?: TargetElement): TargetElement | undefined | null;
export {};
