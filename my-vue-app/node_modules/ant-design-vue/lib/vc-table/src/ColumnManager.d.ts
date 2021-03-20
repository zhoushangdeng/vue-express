export default class ColumnManager {
    constructor(columns: any);
    columns: any;
    _cached: {};
    isAnyColumnsFixed(): any;
    isAnyColumnsLeftFixed(): any;
    isAnyColumnsRightFixed(): any;
    leftColumns(): any;
    rightColumns(): any;
    leafColumns(): any;
    leftLeafColumns(): any;
    rightLeafColumns(): any;
    groupedColumns(): any;
    reset(columns: any): void;
    _cache(name: any, fn: any): any;
    _leafColumns(columns: any): any[];
}
