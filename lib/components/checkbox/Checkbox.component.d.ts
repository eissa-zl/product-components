import React from 'react';
export type CheckboxState = "checked" | "indeterminate" | "unchecked";
type CheckboxComponentProps = {
    checkboxState: CheckboxState;
    outerBgColor: string;
    innerBgColor: string;
    activeBgColor: string;
    isDefaultSelected?: boolean;
    isDisabled: boolean;
    setCurrentSelected: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const CheckboxComponent: (props: CheckboxComponentProps) => React.JSX.Element;
export {};
