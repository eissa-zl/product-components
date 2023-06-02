"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchComponent = void 0;
var _reactNative = require("react-native");
var _Switch = require("./Switch.styles");
/**
 * Switch acts as a switch between two values ON or OFF.
 * @parms {@link SwitchComponentProps|switch-component-props}
 */
const SwitchComponent = props => {
  const toggleSwitch = () => props.setIsEnabled(previousState => !previousState);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactNative.Switch, {
    disabled: props.isDisabled,
    trackColor: {
      false: props.disabledTrackColor,
      true: props.enabledTrackColor
    },
    thumbColor: props.isEnabled ? props.enabledThumbColor : props.disabledThumbColor,
    onValueChange: toggleSwitch,
    value: props.isEnabled,
    style: [_Switch.SwitchStyles.switchContainer, props.isDisabled ? {
      opacity: 0.4
    } : {}]
  }));
};
exports.SwitchComponent = SwitchComponent;
//# sourceMappingURL=Switch.component.js.map