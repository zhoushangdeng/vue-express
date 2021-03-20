import { Data } from '../../_util/type';
import { Ref } from 'vue';
import { GetKey } from '../interface';
import { ListState } from '../List';
export default function useScrollTo(containerRef: Ref<Element | undefined>, state: ListState, heights: Data, props: any, getKey: GetKey, collectHeight: () => void, syncScrollTop: (newTop: number) => void, triggerFlash: () => void): (arg?: any) => void;
