import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { inject } from 'vue';
import PropTypes from '../../_util/vue-types';
import { INTERNAL_COL_DEFINE } from './utils';
export default {
  name: 'ColGroup',
  inheritAttrs: false,
  props: {
    fixed: PropTypes.string,
    columns: PropTypes.array
  },
  setup: function setup() {
    return {
      table: inject('table', {})
    };
  },
  render: function render() {
    var fixed = this.fixed,
        table = this.table;
    var prefixCls = table.prefixCls,
        expandIconAsCell = table.expandIconAsCell,
        columnManager = table.columnManager;
    var cols = [];

    if (expandIconAsCell && fixed !== 'right') {
      cols.push(_createVNode("col", {
        "class": "".concat(prefixCls, "-expand-icon-col"),
        "key": "rc-table-expand-icon-col"
      }, null));
    }

    var leafColumns;

    if (fixed === 'left') {
      leafColumns = columnManager.leftLeafColumns();
    } else if (fixed === 'right') {
      leafColumns = columnManager.rightLeafColumns();
    } else {
      leafColumns = columnManager.leafColumns();
    }

    cols = cols.concat(leafColumns.map(function (_ref) {
      var key = _ref.key,
          dataIndex = _ref.dataIndex,
          width = _ref.width,
          additionalProps = _ref[INTERNAL_COL_DEFINE];
      var mergedKey = key !== undefined ? key : dataIndex;
      var w = typeof width === 'number' ? "".concat(width, "px") : width;
      return _createVNode("col", _objectSpread({
        "key": mergedKey,
        "style": {
          width: w,
          minWidth: w
        }
      }, additionalProps), null);
    }));
    return _createVNode("colgroup", null, [cols]);
  }
};