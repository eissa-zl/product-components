"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchComponent = void 0;
var _reactNative = require("react-native");
var _Input = require("../input/Input.component");
var _Search = require("./Search.styles");
const {
  inputstyles,
  containerstyles,
  iconstyles
} = _Search.styles;

/**
 * Used in forms or area where we need user's input as text
 * @parms {@link SearchComponentProps|search-component-props}
 */
const SearchComponent = _ref => {
  let {
    theme,
    value,
    onChange,
    placeholder = 'Type Here',
    placeholderTextColor = '#777777',
    onBlur,
    onFocus
  } = _ref;
  let themeObj = {
    backgroundColor: '#F5F6F6',
    color: '#1A1A1A'
  };
  if (theme === 'DARK') {
    themeObj = {
      backgroundColor: '#1A1A1A',
      color: '#F5F6F6'
    };
  }
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: containerstyles
  }, /*#__PURE__*/React.createElement(_reactNative.Image, {
    source: require('./../../assets/png/search.png'),
    style: iconstyles
  }), /*#__PURE__*/React.createElement(_Input.TextInputComponent, {
    value: value,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    placeholder: placeholder,
    placeholderTextColor: placeholderTextColor,
    label: "",
    supportingText: "",
    showSupportingText: false,
    containerStyle: {
      ...containerstyles,
      ...themeObj
    },
    inputstyle: {
      ...inputstyles,
      ...themeObj
    }
  }));
};
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=Search.component.js.map