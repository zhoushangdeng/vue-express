import { Fragment as _Fragment, createVNode as _createVNode } from "vue";
import Cell from './Cell';
import { getOptionProps, getSlot, getClass, getStyle, getComponent } from '../_util/props-util';

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
      var _getOptionProps = getOptionProps(item),
          _getOptionProps$prefi = _getOptionProps.prefixCls,
          itemPrefixCls = _getOptionProps$prefi === void 0 ? prefixCls : _getOptionProps$prefi,
          _getOptionProps$span = _getOptionProps.span,
          span = _getOptionProps$span === void 0 ? 1 : _getOptionProps$span;

      var label = getComponent(item, 'label');
      var children = getSlot(item);
      var className = getClass(item);
      var style = getStyle(item);
      var key = item.key;

      if (typeof component === 'string') {
        return _createVNode(Cell, {
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

      return [_createVNode(Cell, {
        "key": "label-".concat(key || index),
        "class": className,
        "style": style,
        "span": 1,
        "colon": colon,
        "component": component[0],
        "itemPrefixCls": itemPrefixCls,
        "bordered": bordered,
        "label": label
      }, null), _createVNode(Cell, {
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
    return _createVNode(_Fragment, null, [_createVNode("tr", {
      "key": "label-".concat(index),
      "class": "".concat(prefixCls, "-row")
    }, [renderCells(row, props, {
      component: 'th',
      type: 'label',
      showLabel: true
    })]), _createVNode("tr", {
      "key": "content-".concat(index),
      "class": "".concat(prefixCls, "-row")
    }, [renderCells(row, props, {
      component: 'td',
      type: 'content',
      showContent: true
    })])]);
  }

  return _createVNode("tr", {
    "key": index,
    "class": "".concat(prefixCls, "-row")
  }, [renderCells(row, props, {
    component: bordered ? ['th', 'td'] : 'td',
    type: 'item',
    showLabel: true,
    showContent: true
  })]);
};

export default Row;