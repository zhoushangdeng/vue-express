import { Ref } from 'vue';
interface Position {
    left: number;
    top: number;
}
export default function useScroll(target: Ref<HTMLElement | Document | Window>): Ref<Position>;
export {};
