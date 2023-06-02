import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from '../input/Input.styles';
/**
 * Used in forms or area where we need user's input as text
 * @parms {@link TextInputComponentProps|input-component-props}
 */
export const TextInputComponent = _ref => {
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
  } = styles;

  //Label Background is is White

  return /*#__PURE__*/React.createElement(KeyboardAvoidingView, {
    behavior: "padding",
    style: {
      ...containerStyles,
      ...containerStyle
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      ...labelStyles,
      ...labelstyle
    }
  }, label), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(TextInput, {
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
  })), showSupportingText && /*#__PURE__*/React.createElement(Text, {
    style: {
      ...supportingTextStyles,
      ...supportingtextstyle
    }
  }, supportingText));
};
//# sourceMappingURL=Input.component.js.map