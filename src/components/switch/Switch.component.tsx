import React, { useState } from 'react';
import { Switch } from 'react-native';
import { SwitchStyles } from './switch.styles';

type SwitchComponentProps = {
    isEnabled: boolean,
    setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>,
    enabledTrackColor: string,
    disabledTrackColor: string,
    enabledThumbColor: string,
    disabledThumbColor: string,
    isDisabled: boolean
}

export const SwitchComponent = (props: SwitchComponentProps) => {
    const toggleSwitch = () => props.setIsEnabled(previousState => !previousState);
    return (
        <>
            <Switch
                disabled={props.isDisabled}
                trackColor={{ false: props.disabledTrackColor, true: props.enabledTrackColor }}
                thumbColor={props.isEnabled ? props.enabledThumbColor : props.disabledThumbColor}
                onValueChange={toggleSwitch}
                value={props.isEnabled}
                style={[SwitchStyles.switchContainer, props.isDisabled ? { opacity: 0.4 } : {}]}
            />
        </>
    )
}
