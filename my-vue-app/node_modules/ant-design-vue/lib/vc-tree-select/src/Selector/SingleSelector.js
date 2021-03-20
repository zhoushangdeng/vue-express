"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _BaseSelector = _interopRequireWildcard(require("../Base/BaseSelector"));

var _util = require("../util");

var _propsUtil = require("../../../_util/props-util");

var _SearchInput = _interopRequireDefault(require("../SearchInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Selector = (0, _BaseSelector.default)('single');
var SingleSelector = {
  name: 'SingleSelector',
  inheritAttrs: false,
  props: (0, _BaseSelector.selectorPropTypes)(),
  created: function created() {
    this.selectorRef = (0, _util.createRef)();
    this.inputRef = (0, _util.createRef)();
  },
  data: function data() {
    return {
      mirrorSearchValue: this.searchValue
    };
  },
  watch: {
    searchValue: function searchValue(val) {
      this.mirrorSearchValue = val;
    }
  },
  methods: {
    onPlaceholderClick: function onPlaceholderClick() {
      this.inputRef.current.focus();
    },
    focus: function focus() {
      this.selectorRef.current.focus();
    },
    blur: function blur() {
      this.selectorRef.current.blur();
    },
    _renderPlaceholder: function _renderPlaceholder() {
      var _this$$props = this.$props,
          prefixCls = _this$$props.prefixCls,
          placeholder = _this$$props.placeholder,
          searchPlaceholder = _this$$props.searchPlaceholder,
          selectorValueList = _this$$props.selectorValueList;
      var currentPlaceholder = placeholder || searchPlaceholder;
      if (!currentPlaceholder) return null;
      var hidden = this.mirrorSearchValue || selectorValueList.length; // [Legacy] Not remove the placeholder

      return (0, _vue.createVNode)("span", {
        "style": {
          display: hidden ? 'none' : 'block'
        },
        "onClick": this.onPlaceholderClick,
        "class": "".concat(prefixCls, "-selection-placeholder")
      }, [currentPlaceholder]);
    },
    onMirrorSearchValueChange: function onMirrorSearchValueChange(value) {
      this.mirrorSearchValue = value;
    },
    renderSelection: function renderSelection() {
      var _this$$props2 = this.$props,
          selectorValueList = _this$$props2.selectorValueList,
          prefixCls = _this$$props2.prefixCls;
      var selectedValueNodes = [];

      if (selectorValueList.length && !this.mirrorSearchValue) {
        var _selectorValueList$ = selectorValueList[0],
            label = _selectorValueList$.label,
            value = _selectorValueList$.value;
        selectedValueNodes.push((0, _vue.createVNode)("span", {
          "key": "value",
          "title": (0, _util.toTitle)(label),
          "class": "".concat(prefixCls, "-selection-item")
        }, [label || value]));
      }

      selectedValueNodes.push((0, _vue.createVNode)(_SearchInput.default, _objectSpread(_objectSpread(_objectSpread({}, this.$props), this.$attrs), {}, {
        "ref": this.inputRef,
        "isMultiple": false,
        "onMirrorSearchValueChange": this.onMirrorSearchValueChange
      }), null));
      return selectedValueNodes;
    }
  },
  render: function render() {
    var props = _extends(_extends(_extends({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs), {
      renderSelection: this.renderSelection,
      renderPlaceholder: this._renderPlaceholder,
      ref: this.selectorRef
    });

    return (0, _vue.createVNode)(Selector, props, null);
  }
};
var _default = SingleSelector;
exports.default = _default;