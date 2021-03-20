import { FunctionalComponent } from 'vue';
import { FormatConfig, valueType } from './utils';
interface NumberProps extends FormatConfig {
    value: valueType;
}
declare const StatisticNumber: FunctionalComponent<NumberProps>;
export default StatisticNumber;
