"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _Cell = _interopRequireDefault(require("./Cell"));

var _propsUtil = require("../_util/props-util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(props) {
  var renderCells = function renderCells(items, _ref, _ref2) {
    var colon = _ref.colon,
        prefixCls = _ref.prefixCls,
        bordered = _ref.bordered;
    var component = _ref2.component,
        type = _ref2.type,
        showLabel = _ref2.showLabel,
        showContent = _ref2.showContent;
    return items.map(function (item, index) {
      var _getOptionProps = (0, _propsUtil.getOptionProps)(item),
          _getOptionProps$prefi = _getOptionProps.prefixCls,
          itemPrefixCls = _getOptionProps$prefi === void 0 ? prefixCls : _getOptionProps$prefi,
          _getOptionProps$span = _getOptionProps.span,
          span = _getOptionProps$span === void 0 ? 1 : _getOptionProps$span;

      var label = (0, _propsUtil.getComponent)(item, 'label');
      var children = (0, _propsUtil.getSlot)(item);
      var className = (0, _propsUtil.getClass)(item);
      var style = (0, _propsUtil.getStyle)(item);
      var key = item.key;

      if (typeof component === 'string') {
        return (0, _vue.createVNode)(_Cell.default, {
          "key": "".concat(type, "-").concat(key || index),
          "class": className,
          "style": style,
          "span": span,
          "colon": colon,
          "component": component,
          "itemPrefixCls": itemPrefixCls,
          "bordered": bordered,
          "label": showLabel ? label : null,
          "content": showContent ? children : null
        }, null);
      }

      return [(0, _vue.createVNode)(_Cell.default, {
        "key": "label-".concat(key || index),
        "class": className,
        "style": style,
        "span": 1,
        "colon": colon,
        "component": component[0],
        "itemPrefixCls": itemPrefixCls,
        "bordered": bordered,
        "label": label
      }, null), (0, _vue.createVNode)(_Cell.default, {
        "key": "content-".concat(key || index),
        "class": className,
        "style": style,
        "span": span * 2 - 1,
        "component": component[1],
        "itemPrefixCls": itemPrefixCls,
        "bordered": bordered,
        "content": children
      }, null)];
    });
  };

  var prefixCls = props.prefixCls,
      vertical = props.vertical,
      row = props.row,
      index = props.index,
      bordered = props.bordered;

  if (vertical) {
    return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("tr", {
      "key": "label-".concat(index),
      "class": "".concat(prefixCls, "-row")
    }, [renderCells(row, props, {
      component: 'th',
      type: 'label',
      showLabel: true
    })]), (0, _vue.createVNode)("tr", {
      "key": "content-".concat(index),
      "class": "".concat(prefixCls, "-row")
    }, [renderCells(row, props, {
      component: 'td',
      type: 'content',
      showContent: true
    })])]);
  }

  return (0, _vue.createVNode)("tr", {
    "key": index,
    "class": "".concat(prefixCls, "-row")
  }, [renderCells(row, props, {
    component: bordered ? ['th', 'td'] : 'td',
    type: 'item',
    showLabel: true,
    showContent: true
  })]);
};

var _default = Row;
exports.default = _default;