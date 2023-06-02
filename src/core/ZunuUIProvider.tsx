import { useEffect, useState } from "react"
import {ThemeContext,defaultTheme} from "./theme"
import { ZunuUIProviderType, themeType } from "./theme.type"

const ZunuUIProvider = ({children,theme=null}:ZunuUIProviderType) => {

    const [themeValue, setThemeValue] = useState<themeType | null>(null)

    useEffect(() => {
        let themeObj:themeType=theme??defaultTheme
        
        let finalMode=theme?.dark??defaultTheme.dark
        let finalColors=theme?.colors?{...(defaultTheme.colors),...(theme.colors)}:defaultTheme.colors

       themeObj={
            dark:finalMode,
            colors:finalColors
        }
        setThemeValue(themeObj)

    }, [theme])
    
  return (
    <ThemeContext.Provider value={themeValue}>
        {children}    
    </ThemeContext.Provider >
  )
}

export default ZunuUIProvider