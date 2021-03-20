"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = confirm;

var _vue = require("vue");

var _ConfirmDialog = _interopRequireDefault(require("./ConfirmDialog"));

var _Modal = require("./Modal");

var _omit = _interopRequireDefault(require("omit.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function confirm(config) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  var currentConfig = _extends(_extends({}, (0, _omit.default)(config, ['parentContext'])), {
    close: close,
    visible: true
  });

  var confirmDialogInstance = null;
  var confirmDialogProps = {};

  function close() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    currentConfig = _extends(_extends({}, currentConfig), {
      visible: false,
      afterClose: destroy.bind.apply(destroy, [this].concat(args))
    });
    update(currentConfig);
  }

  function update(newConfig) {
    currentConfig = _extends(_extends({}, currentConfig), newConfig);
    confirmDialogInstance && _extends(confirmDialogInstance, {
      confirmDialogProps: currentConfig
    });
  }

  function destroy() {
    if (confirmDialogInstance && div.parentNode) {
      confirmDialogInstance.vIf = false; // hack destroy

      confirmDialogInstance = null;
      div.parentNode.removeChild(div);
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }

    for (var i = 0; i < _Modal.destroyFns.length; i++) {
      var fn = _Modal.destroyFns[i];

      if (fn === close) {
        _Modal.destroyFns.splice(i, 1);

        break;
      }
    }
  }

  function render(props) {
    confirmDialogProps = props;
    return (0, _vue.createApp)({
      parent: config.parentContext,
      data: function data() {
        return {
          confirmDialogProps: confirmDialogProps,
          vIf: true
        };
      },
      render: function render() {
        // 先解构，避免报错，原因不详
        var cdProps = _extends({}, this.confirmDialogProps);

        return this.vIf ? (0, _vue.createVNode)(_ConfirmDialog.default, cdProps, null) : null;
      }
    }).mount(div);
  }

  confirmDialogInstance = render(currentConfig);

  _Modal.destroyFns.push(close);

  return {
    destroy: close,
    update: update
  };
}