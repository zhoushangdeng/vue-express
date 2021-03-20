import { createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import generateSelector, { selectorPropTypes } from '../Base/BaseSelector';
import { toTitle } from '../util';
import { getOptionProps } from '../../../_util/props-util';
import { createRef } from '../util';
import SearchInput from '../SearchInput';
var Selector = generateSelector('single');
var SingleSelector = {
  name: 'SingleSelector',
  inheritAttrs: false,
  props: selectorPropTypes(),
  created: function created() {
    this.selectorRef = createRef();
    this.inputRef = createRef();
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

      return _createVNode("span", {
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
        selectedValueNodes.push(_createVNode("span", {
          "key": "value",
          "title": toTitle(label),
          "class": "".concat(prefixCls, "-selection-item")
        }, [label || value]));
      }

      selectedValueNodes.push(_createVNode(SearchInput, _objectSpread(_objectSpread(_objectSpread({}, this.$props), this.$attrs), {}, {
        "ref": this.inputRef,
        "isMultiple": false,
        "onMirrorSearchValueChange": this.onMirrorSearchValueChange
      }), null));
      return selectedValueNodes;
    }
  },
  render: function render() {
    var props = _extends(_extends(_extends({}, getOptionProps(this)), this.$attrs), {
      renderSelection: this.renderSelection,
      renderPlaceholder: this._renderPlaceholder,
      ref: this.selectorRef
    });

    return _createVNode(Selector, props, null);
  }
};
export default SingleSelector;