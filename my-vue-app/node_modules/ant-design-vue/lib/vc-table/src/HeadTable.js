"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireWildcard(require("../../_util/vue-types"));

var _utils = require("./utils");

var _BaseTable = _interopRequireDefault(require("./BaseTable"));

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  name: 'HeadTable',
  inheritAttrs: false,
  props: {
    fixed: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.looseBool])),
    columns: _vueTypes.default.array.isRequired,
    tableClassName: _vueTypes.default.string.isRequired,
    handleBodyScrollLeft: _vueTypes.default.func.isRequired,
    expander: _vueTypes.default.object.isRequired
  },
  setup: function setup() {
    return {
      table: (0, _vue.inject)('table', {})
    };
  },
  render: function render() {
    var columns = this.columns,
        fixed = this.fixed,
        tableClassName = this.tableClassName,
        handleBodyScrollLeft = this.handleBodyScrollLeft,
        expander = this.expander,
        table = this.table;
    var prefixCls = table.prefixCls,
        scroll = table.scroll,
        showHeader = table.showHeader,
        saveRef = table.saveRef;
    var useFixedHeader = table.useFixedHeader;
    var headStyle = {};
    var scrollbarWidth = (0, _utils.measureScrollbar)({
      direction: 'vertical'
    });

    if (scroll.y) {
      useFixedHeader = true; // https://github.com/ant-design/ant-design/issues/17051

      var scrollbarWidthOfHeader = (0, _utils.measureScrollbar)({
        direction: 'horizontal',
        prefixCls: prefixCls
      }); // Add negative margin bottom for scroll bar overflow bug

      if (scrollbarWidthOfHeader > 0 && !fixed) {
        headStyle.marginBottom = "-".concat(scrollbarWidthOfHeader, "px");
        headStyle.paddingBottom = '0px'; // https://github.com/ant-design/ant-design/pull/19986

        headStyle.minWidth = "".concat(scrollbarWidth, "px"); // https://github.com/ant-design/ant-design/issues/17051

        headStyle.overflowX = 'scroll';
        headStyle.overflowY = scrollbarWidth === 0 ? 'hidden' : 'scroll';
      }
    }

    if (!useFixedHeader || !showHeader) {
      return null;
    }

    return (0, _vue.createVNode)("div", {
      "key": "headTable",
      "ref": fixed ? function () {} : saveRef('headTable'),
      "class": (0, _classNames2.default)("".concat(prefixCls, "-header"), _defineProperty({}, "".concat(prefixCls, "-hide-scrollbar"), scrollbarWidth > 0)),
      "style": headStyle,
      "onScroll": handleBodyScrollLeft
    }, [(0, _vue.createVNode)(_BaseTable.default, {
      "tableClassName": tableClassName,
      "hasHead": true,
      "hasBody": false,
      "fixed": fixed,
      "columns": columns,
      "expander": expander
    }, null)]);
  }
};
exports.default = _default;