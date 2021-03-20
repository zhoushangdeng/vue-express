import { VueNode } from '../../_util/type';
import { VNodeChild } from 'vue';
export declare type SelectSource = 'option' | 'selection' | 'input';
export declare const INTERNAL_PROPS_MARK = "RC_SELECT_INTERNAL_PROPS_MARK";
export declare type Key = string | number;
export declare type RawValueType = string | number | null;
export interface LabelValueType extends Record<string, any> {
    key?: Key;
    value?: RawValueType;
    label?: VNodeChild;
}
export declare type DefaultValueType = RawValueType | RawValueType[] | LabelValueType | LabelValueType[];
export interface DisplayLabelValueType extends LabelValueType {
    disabled?: boolean;
}
export declare type SingleType<MixType> = MixType extends (infer Single)[] ? Single : MixType;
export declare type OnClear = () => void;
export declare type CustomTagProps = {
    label: DefaultValueType;
    value: DefaultValueType;
    disabled: boolean;
    onClose: (event?: MouseEvent) => void;
    closable: boolean;
};
export declare type GetLabeledValue<FOT extends FlattenOptionsType> = (value: RawValueType, config: {
    options: FOT;
    prevValue: DefaultValueType;
    labelInValue: boolean;
    optionLabelProp: string;
}) => LabelValueType;
export declare type FilterOptions<OptionsType extends object[]> = (searchValue: string, options: OptionsType, 
/** Component props, since Select & TreeSelect use different prop name, use any here */
config: {
    optionFilterProp: string;
    filterOption: boolean | FilterFunc<OptionsType[number]>;
}) => OptionsType;
export declare type FilterFunc<OptionType> = (inputValue: string, option?: OptionType) => boolean;
export declare type FlattenOptionsType<OptionsType extends object[] = object[]> = {
    key: Key;
    data: OptionsType[number];
    /** Used for customize data */
    [name: string]: any;
}[];
export declare type DropdownObject = {
    menuNode?: VueNode;
    props?: Record<string, any>;
};
export declare type DropdownRender = (opt?: DropdownObject) => VueNode;
