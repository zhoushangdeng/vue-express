import * as _vue from "vue";
import { reactive, toRaw } from 'vue'; // eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Form, Input, Select } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.min.css';
import useForm from '../index';
export default {
  setup: function setup() {
    var modelRef = reactive({
      name1: '',
      name2: '111',
      obj: {
        //嵌套数据
        test: []
      }
    });
    var rulesRef = reactive({
      name1: [{
        required: true,
        message: 'Please input Activity name'
      }, {
        min: 3,
        max: 5,
        message: 'Length should be 3 to 5',
        trigger: 'blur'
      }],
      name2: [{
        required: true,
        message: 'Please input name2'
      }],
      'obj.test': [{
        required: true,
        message: 'Please select',
        type: 'array'
      }]
    });

    var _useForm = useForm(modelRef, rulesRef, {
      debounce: {
        wait: 300
      }
    }),
        resetFields = _useForm.resetFields,
        validate = _useForm.validate,
        validateInfos = _useForm.validateInfos,
        mergeValidateInfo = _useForm.mergeValidateInfo,
        clearValidate = _useForm.clearValidate;

    var handleClick = function handleClick(e) {
      e.preventDefault();
      validate().then(function () {
        console.log(toRaw(modelRef));
      })["catch"](function (err) {
        console.log('error', err);
      });
    };

    var handleReset = function handleReset(e) {
      e.preventDefault();
      resetFields();
    };

    var clearValidateAll = function clearValidateAll() {
      clearValidate();
    };

    var clearValidateName1 = function clearValidateName1(name) {
      clearValidate(name);
    };

    var handleResetWithValues = function handleResetWithValues(e) {
      e.preventDefault();
      resetFields({
        name2: 'updated values'
      });
    };

    return function () {
      return _vue.createVNode(Form, null, {
        "default": function _default() {
          return [_vue.createVNode(Form.Item, _vue.mergeProps(mergeValidateInfo([validateInfos.name1, validateInfos.name2]), {
            "label": "Activity name1"
          }), {
            "default": function _default() {
              return [_vue.createVNode(Input, {
                'value': modelRef.name1,
                "onUpdate:value": function onUpdateValue($event) {
                  return modelRef.name1 = $event;
                },
                "onBlur": function onBlur() {
                  return validate('name1');
                }
              }, null)];
            }
          }), _vue.createVNode(Form.Item, _vue.mergeProps(validateInfos.name2, {
            "label": "Activity name2"
          }), {
            "default": function _default() {
              return [_vue.createVNode(Input, {
                'value': modelRef.name2,
                "onUpdate:value": function onUpdateValue($event) {
                  return modelRef.name2 = $event;
                }
              }, null)];
            }
          }), _vue.createVNode(Form.Item, _vue.mergeProps(validateInfos['obj.test'], {
            "label": "test"
          }), {
            "default": function _default() {
              return [_vue.createVNode(Select, {
                'value': modelRef.obj.test,
                "onUpdate:value": function onUpdateValue($event) {
                  return modelRef.obj.test = $event;
                },
                "mode": "multiple",
                "style": "width: 300px",
                "onBlur": console.log,
                "onFocus": console.log
              }, {
                "default": function _default() {
                  return [_vue.createVNode(Select.Option, {
                    "value": "china"
                  }, {
                    "default": function _default() {
                      return [_vue.createVNode("div", null, [_vue.createVNode("span", {
                        "role": "img",
                        "aria-label": "China"
                      }, [_vue.createTextVNode("\uD83C\uDDE8\uD83C\uDDF3")]), _vue.createTextVNode("China (\u4E2D\u56FD)")])];
                    }
                  }), _vue.createVNode(Select.Option, {
                    "value": "usa"
                  }, {
                    "default": function _default() {
                      return [_vue.createVNode("div", null, [_vue.createVNode("span", {
                        "role": "img",
                        "aria-label": "USA"
                      }, [_vue.createTextVNode("\uD83C\uDDFA\uD83C\uDDF8")]), _vue.createTextVNode("USA (\u7F8E\u56FD)")])];
                    }
                  })];
                }
              })];
            }
          }), _vue.createVNode("button", {
            "onClick": handleClick
          }, [_vue.createTextVNode("submit")]), _vue.createVNode("button", {
            "onClick": handleReset
          }, [_vue.createTextVNode("reset")]), _vue.createVNode("button", {
            "onClick": handleResetWithValues
          }, [_vue.createTextVNode("reset with new updated Values")]), _vue.createVNode("button", {
            "onClick": handleReset
          }, [_vue.createTextVNode("reset")]), _vue.createVNode("button", {
            "onClick": clearValidateAll
          }, [_vue.createTextVNode("clearValidateAll")]), _vue.createVNode("button", {
            "onClick": function onClick() {
              return clearValidateName1('name1');
            }
          }, [_vue.createTextVNode("clearValidateName1")])];
        }
      });
    };
  }
};