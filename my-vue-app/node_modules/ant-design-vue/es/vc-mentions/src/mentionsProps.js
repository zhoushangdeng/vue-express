function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from '../../_util/vue-types';
import { initDefaultProps } from '../../_util/props-util';
import { filterOption as defaultFilterOption, validateSearch as defaultValidateSearch } from './util';
import { PlaceMent } from './placement';
export var mentionsProps = {
  autofocus: PropTypes.looseBool,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  prefixCls: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.looseBool,
  notFoundContent: PropTypes.VNodeChild,
  split: PropTypes.string,
  transitionName: PropTypes.string,
  placement: PropTypes.oneOf(PlaceMent),
  character: PropTypes.any,
  characterRender: PropTypes.func,
  filterOption: PropTypes.func,
  validateSearch: PropTypes.func,
  getPopupContainer: {
    type: Function
  }
};
export var vcMentionsProps = _extends(_extends({}, mentionsProps), {
  children: PropTypes.any
});
export var defaultProps = {
  prefix: '@',
  split: ' ',
  validateSearch: defaultValidateSearch,
  filterOption: defaultFilterOption
};
export default initDefaultProps(vcMentionsProps, defaultProps);