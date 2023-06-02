"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.defaultTheme = exports.ThemeContext = void 0;
var _react = require("react");
var _colorCodes = require("src/utils/colorCodes");
const ThemeContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.ThemeContext = ThemeContext;
const defaultTheme = {
  themeMode: 'LIGHT',
  colors: _colorCodes.colorCodes
};
exports.defaultTheme = defaultTheme;
const useTheme = theme => {
  const contextTheme = (0, _react.useContext)(ThemeContext);
  const finalTheme = theme ?? contextTheme;
  return finalTheme;
};
exports.useTheme = useTheme;
//# sourceMappingURL=theme.js.map