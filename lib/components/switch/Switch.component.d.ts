import React from 'react';
type SwitchComponentProps = {
    isEnabled: boolean;
    setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
    enabledTrackColor: string;
    disabledTrackColor: string;
    enabledThumbColor: string;
    disabledThumbColor: string;
    isDisabled: boolean;
};
export declare const SwitchComponent: (props: SwitchComponentProps) => React.JSX.Element;
export {};
