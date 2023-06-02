"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputComponent = void 0;
var _reactNative = require("react-native");
var _Input = _interopRequireDefault(require("../input/Input.styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Used in forms or area where we need user's input as text
 * @parms {@link TextInputComponentProps|input-component-props}
 */
const TextInputComponent = _ref => {
  let {
    label,
    value,
    onChange,
    placeholder = 'Type Here',
    supportingText = '',
    placeholderTextColor = 'grey',
    secureTextEntry = false,
    showSupportingText = false,
    onBlur,
    containerStyle,
    inputstyle,
    labelstyle,
    supportingtextstyle
  } = _ref;
  const {
    containerStyles,
    labelStyles,
    supportingTextStyles,
    inputStyles
  } = _Input.default;

  //Label Background is is White

  return /*#__PURE__*/React.createElement(_reactNative.KeyboardAvoidingView, {
    behavior: "padding",
    style: {
      ...containerStyles,
      ...containerStyle
    }
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: {
      ...labelStyles,
      ...labelstyle
    }
  }, label), /*#__PURE__*/React.createElement(_reactNative.View, null, /*#__PURE__*/React.createElement(_reactNative.TextInput, {
    style: {
      ...inputStyles,
      ...inputstyle
    },
    placeholder: placeholder,
    value: value,
    onChangeText: onChange,
    autoCorrect: false,
    multiline: true,
    secureTextEntry: secureTextEntry,
    placeholderTextColor: placeholderTextColor,
    textAlignVertical: 'center',
    onBlur: onBlur
  })), showSupportingText && /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: {
      ...supportingTextStyles,
      ...supportingtextstyle
    }
  }, supportingText));
};
exports.TextInputComponent = TextInputComponent;
//# sourceMappingURL=Input.component.js.map