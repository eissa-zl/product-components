import { ReactNode } from "react";
import { colorCodesTypes } from "src/utils/colorCodes";

type themeType={
    themeMode:'LIGHT' | 'DARK';
    colors?:colorCodesTypes;
}

type ZunuUIProviderType={
    children:ReactNode,
    theme?:null | themeType 
}

export {themeType,ZunuUIProviderType}