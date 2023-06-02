declare const colorCodes: colorCodesTypes;
type colorCodesTypes = {
    LIGHT: colorCodesOptions;
    DARK: colorCodesOptions;
};
type colorCodesOptions = {
    textColor?: string;
    primary?: string;
    secondary?: string;
    third?: string;
    error?: string;
    disabledBg?: string;
    disabledText?: string;
    surface?: string;
    shadow?: string;
    outline?: string;
};
export { colorCodes, colorCodesTypes };
//# sourceMappingURL=colorCodes.d.ts.map