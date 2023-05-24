import React from 'react';
declare const ChipComponent: ({ primaryIconSrc, closeIconSrc, text, disabled, optionalBtnNeeded, theme, borderType, shadowProp, onPress, crossBtnPressed, containerStyle, primaryIconStyle, closeIconStyle, textStyle }: ChipComponentProps) => React.JSX.Element;
type ChipComponentProps = {
    text: string;
    primaryIconSrc: any;
    closeIconSrc: any;
    optionalBtnNeeded?: boolean;
    disabled?: boolean;
    theme?: 'LIGHT' | 'DARK';
    borderType?: 'DEFAULT' | 'SHADOW';
    shadowProp?: any;
    onPress?: () => void | undefined;
    crossBtnPressed?: () => void | undefined;
    containerStyle?: any | undefined;
    primaryIconStyle?: any | undefined;
    closeIconStyle?: any | undefined;
    textStyle?: any | undefined;
};
export { ChipComponent };
