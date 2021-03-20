"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _ = _interopRequireWildcard(require(".."));

require("../assets/index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-console */
var Controlled = {
  data: function data() {
    return {
      destroy: false,
      value: 9,
      open: true
    };
  },
  methods: {
    onChange: function onChange(e) {
      var value;

      if (e && e.target) {
        value = e.target.value;
      } else {
        value = e;
      }

      console.log('onChange', value);
      this.value = value;
    },
    onDestroy: function onDestroy() {
      this.destroy = true;
    },
    onBlur: function onBlur(v) {
      console.log('onBlur', v);
    },
    onFocus: function onFocus() {
      console.log('onFocus');
    },
    onDropdownVisibleChange: function onDropdownVisibleChange(open) {
      this.open = open;
    },
    getPopupContainer: function getPopupContainer(node) {
      return node.parentNode;
    }
  },
  render: function render() {
    var open = this.open,
        destroy = this.destroy,
        value = this.value;

    if (destroy) {
      return null;
    }

    return (0, _vue.createVNode)("div", {
      "style": {
        margin: '20px'
      }
    }, [(0, _vue.createVNode)("h2", null, [(0, _vue.createTextVNode)("controlled Select")]), (0, _vue.createVNode)("div", {
      "style": {
        width: '300px'
      }
    }, [(0, _vue.createVNode)(_.default, {
      "id": "my-select",
      "value": value,
      "placeholder": "placeholder",
      "listHeight": 200,
      "style": {
        width: '500px'
      },
      "onBlur": this.onBlur,
      "onFocus": this.onFocus,
      "open": open,
      "optionLabelProp": "children",
      "optionFilterProp": "text",
      "onChange": this.onChange,
      "onDropdownVisibleChange": this.onDropdownVisibleChange
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)(_.Option, {
          "value": "01",
          "text": "jack",
          "title": "jack"
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("b", {
              "style": {
                color: 'red'
              }
            }, [(0, _vue.createTextVNode)("jack")])];
          }
        }), (0, _vue.createVNode)(_.Option, {
          "value": "11",
          "text": "lucy"
        }, {
          default: function _default() {
            return [(0, _vue.createTextVNode)("lucy")];
          }
        }), (0, _vue.createVNode)(_.Option, {
          "value": "21",
          "disabled": true,
          "text": "disabled"
        }, {
          default: function _default() {
            return [(0, _vue.createTextVNode)("disabled")];
          }
        }), (0, _vue.createVNode)(_.Option, {
          "value": "31",
          "text": "yiminghe"
        }, {
          default: function _default() {
            return [(0, _vue.createTextVNode)("yiminghe")];
          }
        }), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) {
          return (0, _vue.createVNode)(_.Option, {
            "key": i,
            "value": i,
            "text": String(i)
          }, {
            default: function _default() {
              return [i, (0, _vue.createTextVNode)("-text")];
            }
          });
        })];
      }
    })])]);
  }
};
var _default2 = Controlled;
/* eslint-enable */

exports.default = _default2;