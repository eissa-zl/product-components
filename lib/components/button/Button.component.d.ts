import React from 'react';
export type ButtonType = "FILLED" | "OUTLINED" | "TEXT" | "ELEVATED" | "TONAL";
type ButtonComponentProps = {
    buttonType: ButtonType;
    buttonText: string;
    buttonTextColor: string;
    isDisabled?: boolean;
    svgImage?: any;
    onPress: () => void;
} & ({
    buttonType: 'OUTLINED' | 'TEXT';
} | {
    buttonType: Exclude<ButtonType, 'OUTLINED' | 'TEXT'>;
    buttonBackgroundColor: string;
});
export declare const ButtonComponent: (props: ButtonComponentProps) => React.JSX.Element;
export {};
