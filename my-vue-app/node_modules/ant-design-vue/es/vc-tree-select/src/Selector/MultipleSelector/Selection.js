import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import classNames from '../../../../_util/classNames';
import PropTypes from '../../../../_util/vue-types';
import { toTitle, UNSELECTABLE_ATTRIBUTE, UNSELECTABLE_STYLE } from '../../util';
import { getComponent } from '../../../../_util/props-util';
import BaseMixin from '../../../../_util/BaseMixin';
var Selection = {
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    prefixCls: PropTypes.string,
    maxTagTextLength: PropTypes.number,
    // onRemove: PropTypes.func,
    label: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    removeIcon: PropTypes.any
  },
  methods: {
    onRemove: function onRemove(event) {
      var value = this.$props.value;

      this.__emit('remove', event, value);

      event.stopPropagation();
    }
  },
  render: function render() {
    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        maxTagTextLength = _this$$props.maxTagTextLength,
        label = _this$$props.label,
        value = _this$$props.value;
    var content = label || value;

    if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
      content = "".concat(content.slice(0, maxTagTextLength), "...");
    }

    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        style = _this$$attrs.style,
        onRemove = _this$$attrs.onRemove;
    return _createVNode("span", _objectSpread(_objectSpread({
      "style": _extends(_extends({}, UNSELECTABLE_STYLE), style)
    }, UNSELECTABLE_ATTRIBUTE), {}, {
      "role": "menuitem",
      "class": classNames("".concat(prefixCls, "-selection-item"), className),
      "title": toTitle(label)
    }), [_createVNode("span", {
      "class": "".concat(prefixCls, "-selection-item-content")
    }, [content]), onRemove && _createVNode("span", {
      "class": "".concat(prefixCls, "-selection-item-remove"),
      "onClick": this.onRemove
    }, [getComponent(this, 'removeIcon')])]);
  }
};
export default Selection;