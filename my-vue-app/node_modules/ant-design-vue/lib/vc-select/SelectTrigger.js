"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vcTrigger = _interopRequireDefault(require("../vc-trigger"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _createRef = _interopRequireDefault(require("../_util/createRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
  var adjustX = typeof dropdownMatchSelectWidth !== 'number' ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    }
  };
};

var SelectTrigger = (0, _vue.defineComponent)({
  name: 'SelectTrigger',
  inheritAttrs: false,
  created: function created() {
    this.popupRef = (0, _createRef.default)();
  },
  methods: {
    getPopupElement: function getPopupElement() {
      return this.popupRef.current;
    }
  },
  render: function render() {
    var _this = this;

    var _a = _extends(_extends({}, this.$props), this.$attrs),
        _a$empty = _a.empty,
        empty = _a$empty === void 0 ? false : _a$empty,
        props = __rest(_a, ["empty"]);

    var visible = props.visible,
        dropdownAlign = props.dropdownAlign,
        prefixCls = props.prefixCls,
        popupElement = props.popupElement,
        dropdownClassName = props.dropdownClassName,
        dropdownStyle = props.dropdownStyle,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
        containerWidth = props.containerWidth,
        dropdownRender = props.dropdownRender,
        animation = props.animation,
        transitionName = props.transitionName,
        direction = props.direction,
        getPopupContainer = props.getPopupContainer;
    var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
    var popupNode = popupElement;

    if (dropdownRender) {
      popupNode = dropdownRender({
        menuNode: popupElement,
        props: props
      });
    }

    var builtInPlacements = getBuiltInPlacements(dropdownMatchSelectWidth);
    var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;

    var popupStyle = _extends({
      minWidth: "".concat(containerWidth, "px")
    }, dropdownStyle);

    if (typeof dropdownMatchSelectWidth === 'number') {
      popupStyle.width = "".concat(dropdownMatchSelectWidth, "px");
    } else if (dropdownMatchSelectWidth) {
      popupStyle.width = "".concat(containerWidth, "px");
    }

    return (0, _vue.createVNode)(_vcTrigger.default, _objectSpread(_objectSpread({}, props), {}, {
      "showAction": [],
      "hideAction": [],
      "popupPlacement": direction === 'rtl' ? 'bottomRight' : 'bottomLeft',
      "builtinPlacements": builtInPlacements,
      "prefixCls": dropdownPrefixCls,
      "popupTransitionName": mergedTransitionName,
      "popup": (0, _vue.createVNode)("div", {
        "ref": this.popupRef
      }, [popupNode]),
      "popupAlign": dropdownAlign,
      "popupVisible": visible,
      "getPopupContainer": getPopupContainer,
      "popupClassName": (0, _classNames2.default)(dropdownClassName, _defineProperty({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
      "popupStyle": popupStyle
    }), {
      default: function _default() {
        return [(0, _propsUtil.getSlot)(_this)[0]];
      }
    });
  }
});
SelectTrigger.props = {
  dropdownAlign: _vueTypes.default.object,
  visible: _vueTypes.default.looseBool,
  disabled: _vueTypes.default.looseBool,
  dropdownClassName: _vueTypes.default.string,
  dropdownStyle: _vueTypes.default.object,
  empty: _vueTypes.default.looseBool,
  prefixCls: _vueTypes.default.string,
  popupClassName: _vueTypes.default.string,
  animation: _vueTypes.default.string,
  transitionName: _vueTypes.default.string,
  getPopupContainer: _vueTypes.default.func,
  dropdownRender: _vueTypes.default.func,
  containerWidth: _vueTypes.default.number,
  dropdownMatchSelectWidth: _vueTypes.default.oneOfType([Number, Boolean]).def(true),
  popupElement: _vueTypes.default.any,
  direction: _vueTypes.default.string,
  getTriggerDOMNode: _vueTypes.default.func
};
var _default2 = SelectTrigger;
exports.default = _default2;