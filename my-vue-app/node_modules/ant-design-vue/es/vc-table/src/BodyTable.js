import { createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { inject } from 'vue';
import PropTypes, { withUndefined } from '../../_util/vue-types';
import { measureScrollbar } from './utils';
import BaseTable from './BaseTable';
export default {
  name: 'BodyTable',
  inheritAttrs: false,
  props: {
    fixed: withUndefined(PropTypes.oneOfType([PropTypes.string, PropTypes.looseBool])),
    columns: PropTypes.array.isRequired,
    tableClassName: PropTypes.string.isRequired,
    handleBodyScroll: PropTypes.func.isRequired,
    handleWheel: PropTypes.func.isRequired,
    getRowKey: PropTypes.func.isRequired,
    expander: PropTypes.object.isRequired,
    isAnyColumnsFixed: PropTypes.looseBool
  },
  setup: function setup() {
    return {
      table: inject('table', {})
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

      var scrollbarWidth = measureScrollbar({
        direction: 'vertical'
      });

      if (scrollbarWidth > 0 && fixed) {
        bodyStyle.marginBottom = "-".concat(scrollbarWidth, "px");
        bodyStyle.paddingBottom = '0px';
      }
    }

    var baseTable = _createVNode(BaseTable, {
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
      return _createVNode("div", {
        "key": "bodyTable",
        "class": "".concat(prefixCls, "-body-outer"),
        "style": _extends({}, bodyStyle)
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-body-inner"),
        "style": innerBodyStyle,
        "ref": saveRef(refName),
        "onWheel": handleWheel,
        "onScroll": handleBodyScroll
      }, [baseTable])]);
    } // Should provides `tabindex` if use scroll to enable keyboard scroll


    var useTabIndex = scroll && (scroll.x || scroll.y);
    return _createVNode("div", {
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