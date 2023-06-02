import { createContext, useContext } from 'react';
import { colorCodes } from 'src/utils/colorCodes';
const ThemeContext = /*#__PURE__*/createContext(null);
const defaultTheme = {
  themeMode: 'LIGHT',
  colors: colorCodes
};
const useTheme = theme => {
  const contextTheme = useContext(ThemeContext);
  const finalTheme = theme ?? contextTheme;
  return finalTheme;
};
export { ThemeContext, defaultTheme, useTheme };
//# sourceMappingURL=theme.js.map