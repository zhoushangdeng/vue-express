import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from '../../../_util/vue-types';
import BasePopup from '../Base/BasePopup';
import SearchInput from '../SearchInput';
import { createRef } from '../util';
var SinglePopup = {
  name: 'SinglePopup',
  inheritAttrs: false,
  props: _extends(_extends(_extends({}, BasePopup.props), SearchInput.props), {
    searchValue: PropTypes.string,
    showSearch: PropTypes.looseBool,
    dropdownPrefixCls: PropTypes.string,
    disabled: PropTypes.looseBool,
    searchPlaceholder: PropTypes.string
  }),
  created: function created() {
    this.inputRef = createRef();
    this.searchRef = createRef();
    this.popupRef = createRef();
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

      return _createVNode("span", {
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

      return _createVNode("span", {
        "class": "".concat(dropdownPrefixCls, "-search"),
        "ref": this.searchRef
      }, [_createVNode(SearchInput, _objectSpread(_objectSpread({}, _extends(_extends(_extends({}, this.$props), this.$attrs), {
        renderPlaceholder: this._renderPlaceholder
      })), {}, {
        "ref": this.inputRef
      }), null)]);
    }
  },
  render: function render() {
    return _createVNode(BasePopup, _objectSpread(_objectSpread({}, _extends(_extends(_extends({}, this.$props), this.$attrs), {
      renderSearch: this._renderSearch
    })), {}, {
      "ref": this.popupRef,
      "__propsSymbol__": []
    }), null);
  }
};
export default SinglePopup;