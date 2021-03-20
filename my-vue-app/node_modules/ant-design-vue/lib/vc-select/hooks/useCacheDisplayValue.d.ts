import { ComputedRef, Ref } from 'vue';
import { DisplayLabelValueType } from '../interface/generator';
export default function useCacheDisplayValue(values: Ref<DisplayLabelValueType[]>): ComputedRef<DisplayLabelValueType[]>;
