import { ModalFuncProps } from './Modal';
export default function confirm(config: ModalFuncProps & {
    parentContext?: any;
}): {
    destroy: (this: any, ...args: any[]) => void;
    update: (newConfig: ModalFuncProps) => void;
};
