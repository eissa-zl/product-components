import React from "react";
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
export declare const SwitchComponent: (props: SwitchComponentProps) => React.JSX.Element;
export {};
