import { createContext, useContext } from 'react'
import { themeType } from './theme.type';
import {colorCodes} from 'src/utils/colorCodes';

const ThemeContext=createContext<themeType | null>(null)

const defaultTheme:themeType={
    themeMode:'LIGHT',
    colors:colorCodes
};

const useTheme = (theme:themeType) => {

    const contextTheme=useContext(ThemeContext) 
    const finalTheme:themeType = theme??contextTheme

  return finalTheme;
}

export {ThemeContext,defaultTheme,useTheme}

