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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  name: 'BodyTable',
  inheritAttrs: false,
  props: {
    fixed: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.looseBool])),
    columns: _vueTypes.default.array.isRequired,
    tableClassName: _vueTypes.default.string.isRequired,
    handleBodyScroll: _vueTypes.default.func.isRequired,
    handleWheel: _vueTypes.default.func.isRequired,
    getRowKey: _vueTypes.default.func.isRequired,
    expander: _vueTypes.default.object.isRequired,
    isAnyColumnsFixed: _vueTypes.default.looseBool
  },
  setup: function setup() {
    return {
      table: (0, _vue.inject)('table', {})
    };
  },
  render: function render() {
    var _this$table = this.table,
        prefixCls = _this$table.prefixCls,
        scroll = _this$table.scroll;
    var columns = this.columns,
        fixed = this.fixed,
        tableClassName = this.tableClassName,
        getRowKey = this.getRowKey,
        handleBodyScroll = this.handleBodyScroll,
        handleWheel = this.handleWheel,
        expander = this.expander,
        isAnyColumnsFixed = this.isAnyColumnsFixed;
    var _this$table2 = this.table,
        useFixedHeader = _this$table2.useFixedHeader,
        saveRef = _this$table2.saveRef;

    var bodyStyle = _extends({}, this.table.bodyStyle);

    var innerBodyStyle = {};

    if (scroll.x || fixed) {
      bodyStyle.overflowX = bodyStyle.overflowX || 'scroll'; // Fix weired webkit render bug
      // https://github.com/ant-design/ant-design/issues/7783

      bodyStyle.WebkitTransform = 'translate3d (0, 0, 0)';
    }

    if (scroll.y) {
      // maxHeight will make fixed-Table scrolling not working
      // so we only set maxHeight to body-Table here
      var maxHeight = bodyStyle.maxHeight || scroll.y;
      maxHeight = typeof maxHeight === 'number' ? "".concat(maxHeight, "px") : maxHeight;

      if (fixed) {
        innerBodyStyle.maxHeight = maxHeight;
        innerBodyStyle.overflowY = bodyStyle.overflowY || 'scroll';
      } else {
        bodyStyle.maxHeight = maxHeight;
      }

      bodyStyle.overflowY = bodyStyle.overflowY || 'scroll';
      useFixedHeader = true; // Add negative margin bottom for scroll bar overflow bug

      var scrollbarWidth = (0, _utils.measureScrollbar)({
        direction: 'vertical'
      });

      if (scrollbarWidth > 0 && fixed) {
        bodyStyle.marginBottom = "-".concat(scrollbarWidth, "px");
        bodyStyle.paddingBottom = '0px';
      }
    }

    var baseTable = (0, _vue.createVNode)(_BaseTable.default, {
      "tableClassName": tableClassName,
      "hasHead": !useFixedHeader,
      "hasBody": true,
      "fixed": fixed,
      "columns": columns,
      "expander": expander,
      "getRowKey": getRowKey,
      "isAnyColumnsFixed": isAnyColumnsFixed
    }, null);

    if (fixed && columns.length) {
      var refName;

      if (columns[0].fixed === 'left' || columns[0].fixed === true) {
        refName = 'fixedColumnsBodyLeft';
      } else if (columns[0].fixed === 'right') {
        refName = 'fixedColumnsBodyRight';
      }

      delete bodyStyle.overflowX;
      delete bodyStyle.overflowY;
      return (0, _vue.createVNode)("div", {
        "key": "bodyTable",
        "class": "".concat(prefixCls, "-body-outer"),
        "style": _extends({}, bodyStyle)
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-body-inner"),
        "style": innerBodyStyle,
        "ref": saveRef(refName),
        "onWheel": handleWheel,
        "onScroll": handleBodyScroll
      }, [baseTable])]);
    } // Should provides `tabindex` if use scroll to enable keyboard scroll


    var useTabIndex = scroll && (scroll.x || scroll.y);
    return (0, _vue.createVNode)("div", {
      "tabindex": useTabIndex ? -1 : undefined,
      "key": "bodyTable",
      "class": "".concat(prefixCls, "-body"),
      "style": bodyStyle,
      "ref": saveRef('bodyTable'),
      "onWheel": handleWheel,
      "onScroll": handleBodyScroll
    }, [baseTable]);
  }
};
exports.default = _default;