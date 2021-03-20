"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _List = _interopRequireDefault(require("../List"));

require("./basic.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MyItem = function MyItem(_, _ref) {
  var id = _ref.attrs.id;
  return (0, _vue.createVNode)("span", {
    "class": "fixed-item",
    "onClick": function onClick() {
      console.log('Click:', id);
    }
  }, [id]);
};

var TestItem = {
  render: function render() {
    return (0, _vue.createVNode)("div", {
      "style": {
        lineHeight: '30px'
      }
    }, [this.$attrs.id]);
  }
};
var data = [];

for (var i = 0; i < 1000; i += 1) {
  data.push({
    id: String(i)
  });
}

var TYPES = [{
  name: 'ref real dom element',
  type: 'dom'
}, {
  name: 'ref vue node',
  type: 'vue'
}];

var onScroll = function onScroll(e) {
  console.log('scroll:', e.currentTarget.scrollTop);
};

var state = (0, _vue.reactive)({
  destroy: false,
  visible: true,
  type: 'dom'
});
var listRef = (0, _vue.ref)(null);

var Demo = function Demo() {
  var destroy = state.destroy,
      visible = state.visible,
      type = state.type;
  return (0, _vue.createVNode)("div", {
    "style": {
      height: '200vh'
    }
  }, [(0, _vue.createVNode)("h2", null, [(0, _vue.createTextVNode)("Basic")]), TYPES.map(function (_ref2) {
    var name = _ref2.name,
        nType = _ref2.type;
    return (0, _vue.createVNode)("label", {
      "key": nType
    }, [(0, _vue.createVNode)("input", {
      "name": "type",
      "type": "radio",
      "checked": type === nType,
      "onChange": function onChange() {
        state.type = nType;
      }
    }, null), name]);
  }), (0, _vue.createVNode)("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo(100);
    }
  }, [(0, _vue.createTextVNode)("Scroll To 100px")]), (0, _vue.createVNode)("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: 50,
        align: 'top'
      });
    }
  }, [(0, _vue.createTextVNode)("Scroll To 50 (top)")]), (0, _vue.createVNode)("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: 50,
        align: 'bottom'
      });
    }
  }, [(0, _vue.createTextVNode)("Scroll To 50 (bottom)")]), (0, _vue.createVNode)("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: 50,
        align: 'auto'
      });
    }
  }, [(0, _vue.createTextVNode)("Scroll To 50 (auto)")]), (0, _vue.createVNode)("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: 50,
        align: 'top',
        offset: 15
      });
    }
  }, [(0, _vue.createTextVNode)("Scroll To 50 (top) + 15 offset")]), (0, _vue.createVNode)("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: 50,
        align: 'bottom',
        offset: 15
      });
    }
  }, [(0, _vue.createTextVNode)("Scroll To 50 (bottom) + 15 offset")]), (0, _vue.createVNode)("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        key: '50',
        align: 'auto'
      });
    }
  }, [(0, _vue.createTextVNode)("Scroll To key 50 (auto)")]), (0, _vue.createVNode)("button", {
    "type": "button",
    "onClick": function onClick() {
      state.visible = !state.visible;
    }
  }, [(0, _vue.createTextVNode)("visible")]), (0, _vue.createVNode)("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: data.length - 2,
        align: 'top'
      });
    }
  }, [(0, _vue.createTextVNode)("Scroll To Last (top)")]), (0, _vue.createVNode)("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: 0,
        align: 'bottom'
      });
    }
  }, [(0, _vue.createTextVNode)("Scroll To First (bottom)")]), (0, _vue.createVNode)("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: 50,
        align: 'top'
      });
      state.destroy = true;
    }
  }, [(0, _vue.createTextVNode)("Scroll To remove")]), !destroy && (0, _vue.createVNode)(_List.default, {
    "id": "list",
    "ref": listRef,
    "data": data,
    "height": 200,
    "itemHeight": 20,
    "itemKey": "id",
    "style": {
      border: '1px solid red',
      boxSizing: 'border-box',
      display: visible ? null : 'none'
    },
    "onScroll": onScroll,
    "children": function children(item, _, props) {
      return type === 'dom' ? (0, _vue.createVNode)(MyItem, _objectSpread(_objectSpread({}, item), props), null) : (0, _vue.createVNode)(TestItem, _objectSpread(_objectSpread({}, item), props), null);
    }
  }, null)]);
};

var _default = Demo;
/* eslint-enable */

exports.default = _default;