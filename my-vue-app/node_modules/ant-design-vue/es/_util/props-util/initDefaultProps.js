function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var initDefaultProps = function initDefaultProps(types, defaultProps) {
  var propTypes = _extends({}, types);

  Object.keys(defaultProps).forEach(function (k) {
    var prop = propTypes[k];

    if (prop) {
      prop.default = defaultProps[k];
    } else {
      throw new Error("not have ".concat(k, " prop"));
    }
  });
  return propTypes;
};

export default initDefaultProps;