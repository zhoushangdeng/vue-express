import { VNodeTypes, HTMLAttributes, FunctionalComponent } from 'vue';
interface CellProps extends HTMLAttributes {
    itemPrefixCls: string;
    span: number;
    component: string;
    bordered?: boolean;
    label?: VNodeTypes;
    content?: VNodeTypes;
    colon?: boolean;
}
declare const Cell: FunctionalComponent<CellProps>;
export default Cell;
