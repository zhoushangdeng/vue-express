"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _configProvider = require("../config-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _vue.defineComponent)({
  name: 'ACardMeta',
  props: {
    prefixCls: _vueTypes.default.string,
    title: _vueTypes.default.VNodeChild,
    description: _vueTypes.default.VNodeChild,
    avatar: _vueTypes.default.VNodeChild
  },
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  render: function render() {
    var customizePrefixCls = this.$props.prefixCls;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('card', customizePrefixCls);

    var classString = _defineProperty({}, "".concat(prefixCls, "-meta"), true);

    var avatar = (0, _propsUtil.getComponent)(this, 'avatar');
    var title = (0, _propsUtil.getComponent)(this, 'title');
    var description = (0, _propsUtil.getComponent)(this, 'description');
    var avatarDom = avatar ? (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-meta-avatar")
    }, [avatar]) : null;
    var titleDom = title ? (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-meta-title")
    }, [title]) : null;
    var descriptionDom = description ? (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-meta-description")
    }, [description]) : null;
    var MetaDetail = titleDom || descriptionDom ? (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-meta-detail")
    }, [titleDom, descriptionDom]) : null;
    return (0, _vue.createVNode)("div", {
      "class": classString
    }, [avatarDom, MetaDetail]);
  }
});

exports.default = _default;