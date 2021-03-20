"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  name: 'ColGroup',
  inheritAttrs: false,
  props: {
    fixed: _vueTypes.default.string,
    columns: _vueTypes.default.array
  },
  setup: function setup() {
    return {
      table: (0, _vue.inject)('table', {})
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
      cols.push((0, _vue.createVNode)("col", {
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
          additionalProps = _ref[_utils.INTERNAL_COL_DEFINE];
      var mergedKey = key !== undefined ? key : dataIndex;
      var w = typeof width === 'number' ? "".concat(width, "px") : width;
      return (0, _vue.createVNode)("col", _objectSpread({
        "key": mergedKey,
        "style": {
          width: w,
          minWidth: w
        }
      }, additionalProps), null);
    }));
    return (0, _vue.createVNode)("colgroup", null, [cols]);
  }
};
exports.default = _default;