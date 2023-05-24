import React from 'react';
type RadioComponentProps = {
    optionNames: string[];
    innerBgColor: string;
    outerBgColor: string;
    optionTextColor: string;
    fontSize: number;
    defaultSelect?: string;
    isDisabled: boolean;
    textAlignment: string;
    activeBgColor: string;
    setCurrentSelected: (value: React.SetStateAction<string>) => void;
};
export declare const RadioComponent: (props: RadioComponentProps) => React.JSX.Element;
export {};
