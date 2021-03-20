function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from '../../_util/vue-types';
var IProps = {
  width: PropTypes.any,
  height: PropTypes.any,
  defaultOpen: PropTypes.looseBool,
  firstEnter: PropTypes.looseBool,
  open: PropTypes.looseBool,
  prefixCls: PropTypes.string,
  placement: PropTypes.string,
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  levelMove: PropTypes.oneOfType([PropTypes.number, PropTypes.func, PropTypes.array]),
  ease: PropTypes.string,
  duration: PropTypes.string,
  handler: PropTypes.any,
  showMask: PropTypes.looseBool,
  maskStyle: PropTypes.object,
  className: PropTypes.string,
  wrapStyle: PropTypes.object,
  maskClosable: PropTypes.looseBool,
  afterVisibleChange: PropTypes.func,
  keyboard: PropTypes.looseBool
};

var IDrawerProps = _extends(_extends({}, IProps), {
  wrapperClassName: PropTypes.string,
  forceRender: PropTypes.looseBool,
  getContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object, PropTypes.looseBool])
});

var IDrawerChildProps = _extends(_extends({}, IProps), {
  getContainer: PropTypes.func,
  getOpenCount: PropTypes.func,
  switchScrollingEffect: PropTypes.func
});

export { IDrawerProps, IDrawerChildProps };