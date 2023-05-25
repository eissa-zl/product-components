import React, { useState } from "react";
import { Switch } from "react-native";
import { SwitchStyles } from "./Switch.styles";

type SwitchComponentProps = {

    /**
     *if true, the switch will be ON by default
     */
  isEnabled: boolean;

      /**
     *setter for switch value
     */
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;

  enabledTrackColor: string;
  disabledTrackColor: string;
  enabledThumbColor: string;
  disabledThumbColor: string;

        /**
     *if true,switch is in disabled state
     */
  isDisabled: boolean;
};

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
