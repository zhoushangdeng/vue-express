import { FunctionalComponent } from 'vue';
import { OptionGroupData } from './interface';
export declare type OptGroupProps = Omit<OptionGroupData, 'options'>;
export interface OptionGroupFC extends FunctionalComponent<OptGroupProps> {
    /** Legacy for check if is a Option Group */
    isSelectOptGroup: boolean;
}
declare const OptGroup: OptionGroupFC;
export default OptGroup;
