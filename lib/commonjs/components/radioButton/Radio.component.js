"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioComponent = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _Radio = require("./Radio.styles");
/**
 * Used when user needs to select one of multiple options
 * @parms {@link RadioComponentProps|radio-component-props}
 */
const RadioComponent = props => {
  const innerBgColor = props.innerBgColor ? props.innerBgColor : 'black';
  const outerBgColor = props.outerBgColor ? props.outerBgColor : 'black';
  const fontSize = props.fontSize ? props.fontSize : 20;
  const textColor = props.optionTextColor ? props.optionTextColor : 'black';
  const textAlign = props.textAlignment ? props.textAlignment : 'left';
  const [selectedRadio, setSelectedRadio] = (0, _react.useState)(props.defaultSelect ? props.defaultSelect : props.optionNames[0]);
  const selectOption = optionName => {
    props.setCurrentSelected(optionName);
    setSelectedRadio(optionName);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.optionNames.map((item, index) => /*#__PURE__*/React.createElement(_reactNative.TouchableOpacity, {
    style: [props.isDisabled ? {
      opacity: 0.3
    } : {}, {
      width: '100%'
    }],
    disabled: props.isDisabled,
    key: index,
    onPress: () => selectOption(item)
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_Radio.RadioStyles.wrapper, {
      gap: 4,
      margin: 3,
      flexDirection: 'row'
    }]
  }, textAlign === 'left' ? /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: {
      fontSize: fontSize,
      color: textColor,
      flex: 1
    }
  }, item) : null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_Radio.RadioStyles.radio, {
      borderColor: outerBgColor,
      height: 28,
      width: 28
    }]
  }, selectedRadio == item ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_Radio.RadioStyles.radioBg, {
      backgroundColor: innerBgColor,
      height: 15,
      width: 15
    }]
  }) : null), textAlign === 'right' ? /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: {
      fontSize: fontSize,
      color: textColor,
      flex: 1
    }
  }, item) : null))));
};
exports.RadioComponent = RadioComponent;
//# sourceMappingURL=Radio.component.js.map