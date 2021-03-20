import { createVNode as _createVNode } from "vue";
import _extends from "@babel/runtime/helpers/esm/extends";
import { ref, computed, defineComponent } from 'vue';
import { addUnit, UnknownProp } from '../utils';
import Icon from '../icon';
export var checkerProps = {
  name: UnknownProp,
  disabled: Boolean,
  iconSize: [Number, String],
  modelValue: UnknownProp,
  checkedColor: String,
  labelPosition: String,
  labelDisabled: Boolean,
  shape: {
    type: String,
    default: 'round'
  }
};
export default defineComponent({
  props: _extends({}, checkerProps, {
    role: String,
    parent: Object,
    checked: Boolean,
    bindGroup: {
      type: Boolean,
      default: true
    },
    bem: {
      type: Function,
      required: true
    }
  }),
  emits: ['click', 'toggle'],

  setup(props, {
    emit,
    slots
  }) {
    var iconRef = ref();

    var getParentProp = name => {
      if (props.parent && props.bindGroup) {
        return props.parent.props[name];
      }
    };

    var disabled = computed(() => getParentProp('disabled') || props.disabled);
    var direction = computed(() => getParentProp('direction'));
    var iconStyle = computed(() => {
      var checkedColor = props.checkedColor || getParentProp('checkedColor');

      if (checkedColor && props.checked && !disabled.value) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor
        };
      }
    });

    var onClick = event => {
      var {
        target
      } = event;
      var icon = iconRef.value;
      var iconClicked = icon === target || icon.contains(target);

      if (!disabled.value && (iconClicked || !props.labelDisabled)) {
        emit('toggle');
      }

      emit('click', event);
    };

    var renderIcon = () => {
      var {
        bem,
        shape,
        checked
      } = props;
      var iconSize = props.iconSize || getParentProp('iconSize');
      return _createVNode("div", {
        "ref": iconRef,
        "class": bem('icon', [shape, {
          disabled: disabled.value,
          checked
        }]),
        "style": {
          fontSize: addUnit(iconSize)
        }
      }, [slots.icon ? slots.icon({
        checked
      }) : _createVNode(Icon, {
        "name": "success",
        "style": iconStyle.value
      }, null)]);
    };

    var renderLabel = () => {
      if (slots.default) {
        return _createVNode("span", {
          "class": props.bem('label', [props.labelPosition, {
            disabled: disabled.value
          }])
        }, [slots.default()]);
      }
    };

    return () => {
      var nodes = [renderIcon()];

      if (props.labelPosition === 'left') {
        nodes.unshift(renderLabel());
      } else {
        nodes.push(renderLabel());
      }

      return _createVNode("div", {
        "role": props.role,
        "class": props.bem([{
          disabled: disabled.value,
          'label-disabled': props.labelDisabled
        }, direction.value]),
        "tabindex": disabled.value ? -1 : 0,
        "aria-checked": props.checked,
        "onClick": onClick
      }, {
        default: () => [nodes]
      });
    };
  }

});