import { Ref } from 'vue';
declare type EventType = MouseEvent | TouchEvent;
export default function useClickAway(ele: Ref<HTMLElement>, onClickAway: (event: EventType) => void, eventName?: string, container?: Document | HTMLElement | Ref<HTMLElement>): () => void;
export {};
