"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _theme = require("./theme");
const ZunuUIProvider = _ref => {
  let {
    children,
    theme = null
  } = _ref;
  const [themeValue, setThemeValue] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    let themeObj = theme ?? _theme.defaultTheme;
    let finalMode = (theme === null || theme === void 0 ? void 0 : theme.themeMode) ?? _theme.defaultTheme.themeMode;
    let finalColors = theme !== null && theme !== void 0 && theme.colors ? {
      ..._theme.defaultTheme.colors,
      ...theme.colors
    } : _theme.defaultTheme.colors;
    themeObj = {
      themeMode: finalMode,
      colors: finalColors
    };
    setThemeValue(themeObj);
  }, [theme]);
  return /*#__PURE__*/React.createElement(_theme.ThemeContext.Provider, {
    value: themeValue
  }, children);
};
var _default = ZunuUIProvider;
exports.default = _default;
//# sourceMappingURL=ZunuUIProvider.js.map