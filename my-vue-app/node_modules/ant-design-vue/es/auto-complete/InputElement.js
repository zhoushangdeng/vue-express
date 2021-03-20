function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { cloneElement } from '../_util/vnode';
import { flattenChildren } from '../_util/props-util';

var InputElement = function InputElement(_, _ref) {
  var attrs = _ref.attrs,
      slots = _ref.slots;

  var _a;

  var children = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))[0];
  return cloneElement(children, _extends({}, attrs));
};

InputElement.inheritAttrs = false;
export default InputElement;