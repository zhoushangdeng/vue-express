import { createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-console */
import { reactive, ref } from 'vue';
import List from '../List';
import './basic.less';

var MyItem = function MyItem(_, _ref) {
  var id = _ref.attrs.id;
  return _createVNode("span", {
    "class": "fixed-item",
    "onClick": function onClick() {
      console.log('Click:', id);
    }
  }, [id]);
};

var TestItem = {
  render: function render() {
    return _createVNode("div", {
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

var state = reactive({
  destroy: false,
  visible: true,
  type: 'dom'
});
var listRef = ref(null);

var Demo = function Demo() {
  var destroy = state.destroy,
      visible = state.visible,
      type = state.type;
  return _createVNode("div", {
    "style": {
      height: '200vh'
    }
  }, [_createVNode("h2", null, [_createTextVNode("Basic")]), TYPES.map(function (_ref2) {
    var name = _ref2.name,
        nType = _ref2.type;
    return _createVNode("label", {
      "key": nType
    }, [_createVNode("input", {
      "name": "type",
      "type": "radio",
      "checked": type === nType,
      "onChange": function onChange() {
        state.type = nType;
      }
    }, null), name]);
  }), _createVNode("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo(100);
    }
  }, [_createTextVNode("Scroll To 100px")]), _createVNode("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: 50,
        align: 'top'
      });
    }
  }, [_createTextVNode("Scroll To 50 (top)")]), _createVNode("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: 50,
        align: 'bottom'
      });
    }
  }, [_createTextVNode("Scroll To 50 (bottom)")]), _createVNode("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: 50,
        align: 'auto'
      });
    }
  }, [_createTextVNode("Scroll To 50 (auto)")]), _createVNode("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: 50,
        align: 'top',
        offset: 15
      });
    }
  }, [_createTextVNode("Scroll To 50 (top) + 15 offset")]), _createVNode("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: 50,
        align: 'bottom',
        offset: 15
      });
    }
  }, [_createTextVNode("Scroll To 50 (bottom) + 15 offset")]), _createVNode("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        key: '50',
        align: 'auto'
      });
    }
  }, [_createTextVNode("Scroll To key 50 (auto)")]), _createVNode("button", {
    "type": "button",
    "onClick": function onClick() {
      state.visible = !state.visible;
    }
  }, [_createTextVNode("visible")]), _createVNode("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: data.length - 2,
        align: 'top'
      });
    }
  }, [_createTextVNode("Scroll To Last (top)")]), _createVNode("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: 0,
        align: 'bottom'
      });
    }
  }, [_createTextVNode("Scroll To First (bottom)")]), _createVNode("button", {
    "type": "button",
    "onClick": function onClick() {
      listRef.value.scrollTo({
        index: 50,
        align: 'top'
      });
      state.destroy = true;
    }
  }, [_createTextVNode("Scroll To remove")]), !destroy && _createVNode(List, {
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
      return type === 'dom' ? _createVNode(MyItem, _objectSpread(_objectSpread({}, item), props), null) : _createVNode(TestItem, _objectSpread(_objectSpread({}, item), props), null);
    }
  }, null)]);
};

export default Demo;
/* eslint-enable */