
import { Switch } from "react-native";
import { SwitchStyles } from "./Switch.styles";
import { SwitchComponentProps } from "./Switch.type";


/**
 * Switch acts as a switch between two values ON or OFF.
 * @parms {@link SwitchComponentProps|switch-component-props}
 */
export const SwitchComponent = (props: SwitchComponentProps) => {
  const toggleSwitch = () =>
    props.setIsEnabled((previousState) => !previousState);
  return (
    <>
      <Switch
        disabled={props.isDisabled}
        trackColor={{
          false: props.disabledTrackColor,
          true: props.enabledTrackColor,
        }}
        thumbColor={
          props.isEnabled ? props.enabledThumbColor : props.disabledThumbColor
        }
        onValueChange={toggleSwitch}
        value={props.isEnabled}
        style={[
          SwitchStyles.switchContainer,
          props.isDisabled ? { opacity: 0.4 } : {},
        ]}
      />
    </>
  );
};
