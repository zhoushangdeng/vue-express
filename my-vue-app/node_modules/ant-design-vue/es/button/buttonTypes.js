import { tuple } from '../_util/type';
import PropTypes, { withUndefined } from '../_util/vue-types';
var ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
var ButtonShapes = tuple('circle', 'circle-outline', 'round');
var ButtonSizes = tuple('large', 'default', 'small');
var ButtonHTMLTypes = tuple('submit', 'button', 'reset');

var buttonProps = function buttonProps() {
  return {
    prefixCls: PropTypes.string,
    type: PropTypes.oneOf(ButtonTypes),
    htmlType: PropTypes.oneOf(ButtonHTMLTypes).def('button'),
    // icon: PropTypes.string,
    shape: PropTypes.oneOf(ButtonShapes),
    size: PropTypes.oneOf(ButtonSizes).def('default'),
    loading: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object])),
    disabled: PropTypes.looseBool,
    ghost: PropTypes.looseBool,
    block: PropTypes.looseBool,
    icon: PropTypes.VNodeChild,
    href: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func
  };
};

export default buttonProps;