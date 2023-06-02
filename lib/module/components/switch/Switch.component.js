import { Switch } from 'react-native';
import { SwitchStyles } from './Switch.styles';
/**
 * Switch acts as a switch between two values ON or OFF.
 * @parms {@link SwitchComponentProps|switch-component-props}
 */
export const SwitchComponent = props => {
  const toggleSwitch = () => props.setIsEnabled(previousState => !previousState);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Switch, {
    disabled: props.isDisabled,
    trackColor: {
      false: props.disabledTrackColor,
      true: props.enabledTrackColor
    },
    thumbColor: props.isEnabled ? props.enabledThumbColor : props.disabledThumbColor,
    onValueChange: toggleSwitch,
    value: props.isEnabled,
    style: [SwitchStyles.switchContainer, props.isDisabled ? {
      opacity: 0.4
    } : {}]
  }));
};
//# sourceMappingURL=Switch.component.js.map