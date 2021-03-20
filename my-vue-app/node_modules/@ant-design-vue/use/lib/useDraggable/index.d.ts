import { Ref, HTMLAttributes } from 'vue';
import { ElementType } from '../utils/typeHelpers';
export default function useDraggable(config?: {
    target?: Ref<ElementType>;
    handle?: Ref<ElementType>;
    controlStyle?: boolean;
    viewport?: boolean;
    rectLimits?: {
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
    };
}): [
    Ref<ElementType>,
    Ref<ElementType>,
    {
        getTargetProps: () => HTMLAttributes;
        dragging: Ref<boolean>;
        delta: Ref<{
            x: number;
            y: number;
        }>;
        resetState: () => void;
    }
];
