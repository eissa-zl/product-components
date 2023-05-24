import React from 'react';
type IconComponentProps = {
    SVGImage: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    BGColor: string;
    activeBgColor: string;
    BGsize: number;
    imgSize: number;
    isDisabled: boolean;
};
export declare const IconComponent: (props: IconComponentProps) => React.JSX.Element;
export {};
