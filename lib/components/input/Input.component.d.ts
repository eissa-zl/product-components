import React from 'react';
export declare const TextInputComponent: ({ label, value, onChange, placeholder, supportingText, placeholderTextColor, secureTextEntry, showSupportingText, onBlur, onFocus, containerStyle, inputstyle, labelstyle, supportingtextstyle, }: TextInputComponentProps) => React.JSX.Element;
type TextInputComponentProps = {
    label: string;
    value: string;
    showSupportingText: boolean;
    placeholder: string;
    onChange: () => void;
    supportingText?: string;
    containerStyle: any;
    inputstyle?: any;
    labelstyle?: any;
    supportingtextstyle?: any;
    secureTextEntry?: boolean;
    placeholderTextColor?: string;
    onFocus?: () => void;
    onBlur?: () => void;
};
export {};
