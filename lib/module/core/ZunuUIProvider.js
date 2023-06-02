import { useEffect, useState } from "react";
import { ThemeContext, defaultTheme } from "./theme";
const ZunuUIProvider = _ref => {
  let {
    children,
    theme = null
  } = _ref;
  const [themeValue, setThemeValue] = useState(null);
  useEffect(() => {
    let themeObj = theme ?? defaultTheme;
    let finalMode = (theme === null || theme === void 0 ? void 0 : theme.themeMode) ?? defaultTheme.themeMode;
    let finalColors = theme !== null && theme !== void 0 && theme.colors ? {
      ...defaultTheme.colors,
      ...theme.colors
    } : defaultTheme.colors;
    themeObj = {
      themeMode: finalMode,
      colors: finalColors
    };
    setThemeValue(themeObj);
  }, [theme]);
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: themeValue
  }, children);
};
export default ZunuUIProvider;
//# sourceMappingURL=ZunuUIProvider.js.map