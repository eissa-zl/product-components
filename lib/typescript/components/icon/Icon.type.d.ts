/// <reference types="react" />
/// <reference types="react" />
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
export { IconComponentProps };
//# sourceMappingURL=Icon.type.d.ts.map