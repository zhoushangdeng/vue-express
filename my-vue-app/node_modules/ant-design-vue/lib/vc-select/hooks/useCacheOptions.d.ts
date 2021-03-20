import { Ref, VNodeChild } from 'vue';
import { RawValueType, FlattenOptionsType, Key } from '../interface/generator';
export default function useCacheOptions<OptionsType extends {
    value?: RawValueType;
    label?: VNodeChild;
    key?: Key;
    disabled?: boolean;
}[]>(_values: RawValueType[], options: Ref): (vals: RawValueType[]) => FlattenOptionsType<OptionsType>;
