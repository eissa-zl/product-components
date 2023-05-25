import React from 'react';
export declare const SearchComponent: ({ theme, value, onChange, placeholder, placeholderTextColor, onBlur, onFocus }: SearchComponentProps) => React.JSX.Element;
type SearchComponentProps = {
    theme: 'LIGHT' | 'DARK';
    label: string;
    value: string;
    showSupportingText: boolean;
    placeholder: string;
    onChange: () => void;
    inputstyle?: any;
    containerStyle?: any;
    supportingtextstyle?: any;
    secureTextEntry?: boolean;
    placeholderTextColor?: string;
    onFocus?: () => void;
    onBlur?: () => void;
};
export {};
