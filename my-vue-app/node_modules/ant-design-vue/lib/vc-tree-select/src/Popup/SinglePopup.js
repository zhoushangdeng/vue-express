"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));

var _BasePopup = _interopRequireDefault(require("../Base/BasePopup"));

var _SearchInput = _interopRequireDefault(require("../SearchInput"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SinglePopup = {
  name: 'SinglePopup',
  inheritAttrs: false,
  props: _extends(_extends(_extends({}, _BasePopup.default.props), _SearchInput.default.props), {
    searchValue: _vueTypes.default.string,
    showSearch: _vueTypes.default.looseBool,
    dropdownPrefixCls: _vueTypes.default.string,
    disabled: _vueTypes.default.looseBool,
    searchPlaceholder: _vueTypes.default.string
  }),
  created: function created() {
    this.inputRef = (0, _util.createRef)();
    this.searchRef = (0, _util.createRef)();
    this.popupRef = (0, _util.createRef)();
  },
  methods: {
    onPlaceholderClick: function onPlaceholderClick() {
      this.inputRef.current.focus();
    },
    getTree: function getTree() {
      return this.popupRef.current && this.popupRef.current.getTree();
    },
    _renderPlaceholder: function _renderPlaceholder() {
      var _this$$props = this.$props,
          searchPlaceholder = _this$$props.searchPlaceholder,
          searchValue = _this$$props.searchValue,
          prefixCls = _this$$props.prefixCls;

      if (!searchPlaceholder) {
        return null;
      }

      return (0, _vue.createVNode)("span", {
        "style": {
          display: searchValue ? 'none' : 'block'
        },
        "onClick": this.onPlaceholderClick,
        "class": "".concat(prefixCls, "-selection-placeholder")
      }, [searchPlaceholder]);
    },
    _renderSearch: function _renderSearch() {
      var _this$$props2 = this.$props,
          showSearch = _this$$props2.showSearch,
          dropdownPrefixCls = _this$$props2.dropdownPrefixCls;

      if (!showSearch) {
        return null;
      }

      return (0, _vue.createVNode)("span", {
        "class": "".concat(dropdownPrefixCls, "-search"),
        "ref": this.searchRef
      }, [(0, _vue.createVNode)(_SearchInput.default, _objectSpread(_objectSpread({}, _extends(_extends(_extends({}, this.$props), this.$attrs), {
        renderPlaceholder: this._renderPlaceholder
      })), {}, {
        "ref": this.inputRef
      }), null)]);
    }
  },
  render: function render() {
    return (0, _vue.createVNode)(_BasePopup.default, _objectSpread(_objectSpread({}, _extends(_extends(_extends({}, this.$props), this.$attrs), {
      renderSearch: this._renderSearch
    })), {}, {
      "ref": this.popupRef,
      "__propsSymbol__": []
    }), null);
  }
};
var _default = SinglePopup;
exports.default = _default;