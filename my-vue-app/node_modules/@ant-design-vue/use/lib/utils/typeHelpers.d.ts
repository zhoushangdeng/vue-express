import { ComponentPublicInstance } from 'vue';
export declare type ElementType = Element | ComponentPublicInstance;
export declare function isComponentPublicInstance(instance: ElementType): instance is ComponentPublicInstance;
