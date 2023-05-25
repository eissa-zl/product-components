import React from 'react';
type IconComponentProps = {
    /**
     * source for svg image, pass as require('../assets/icon.svg)
     */
    SVGImage: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    /**
  * background color for the icon component
  */
    BGColor: string;
    /**
* background color when the compoenent is active
*/
    activeBgColor: string;
    /**
* icon component size
*/
    BGsize: number;
    /**
* image size
*/
    imgSize: number;
    /**
* if true,icon is disabled
*/
    isDisabled: boolean;
};
/**
* Used as an icon
* @parms {@link IconComponentProps|icon-component-props}
*/
export declare const IconComponent: (props: IconComponentProps) => React.JSX.Element;
export {};
