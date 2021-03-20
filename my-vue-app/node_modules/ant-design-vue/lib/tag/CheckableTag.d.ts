import { PropType } from 'vue';
declare const CheckableTag: import("vue").DefineComponent<{
    prefixCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    checked: import("vue-types").VueTypeValidableDef<boolean>;
    onChange: {
        type: PropType<(checked: boolean) => void>;
    };
    onClick: {
        type: PropType<(e: MouseEvent) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click" | "update:checked")[], "change" | "click" | "update:checked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls: string;
} & {
    onChange?: (checked: boolean) => void;
    onClick?: (e: MouseEvent) => void;
    checked?: boolean;
}>, {
    prefixCls: string;
}>;
export default CheckableTag;
