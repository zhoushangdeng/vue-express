"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function notEmpty(val) {
  return val !== undefined && val !== null;
}

var Cell = function Cell(props) {
  var itemPrefixCls = props.itemPrefixCls,
      component = props.component,
      span = props.span,
      bordered = props.bordered,
      label = props.label,
      content = props.content,
      colon = props.colon;
  var Component = component;

  if (bordered) {
    var _ref;

    return (0, _vue.createVNode)(Component, {
      "class": [(_ref = {}, _defineProperty(_ref, "".concat(itemPrefixCls, "-item-label"), notEmpty(label)), _defineProperty(_ref, "".concat(itemPrefixCls, "-item-content"), notEmpty(content)), _ref)],
      "colSpan": span
    }, {
      default: function _default() {
        return [notEmpty(label) ? label : content];
      }
    });
  }

  return (0, _vue.createVNode)(Component, {
    "class": ["".concat(itemPrefixCls, "-item")],
    "colSpan": span
  }, {
    default: function _default() {
      return [label && (0, _vue.createVNode)("span", {
        "class": ["".concat(itemPrefixCls, "-item-label"), _defineProperty({}, "".concat(itemPrefixCls, "-item-no-colon"), !colon)]
      }, [label]), content && (0, _vue.createVNode)("span", {
        "class": "".concat(itemPrefixCls, "-item-content")
      }, [content])];
    }
  });
};

var _default2 = Cell;
exports.default = _default2;