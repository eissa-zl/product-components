"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChipComponent = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _Chip = require("./Chip.style");
const {
  containerStyles,
  primaryIconStyles,
  textStyles,
  closeIconStyles,
  shadowProps
} = _Chip.styles;

/**
 * Used to show a value in chip format. Usually used as filter tags
 * @parms {@link ChipComponentProps|chip-component-props}
 */
const ChipComponent = _ref => {
  let {
    primaryIconSrc,
    closeIconSrc,
    text,
    disabled = false,
    optionalBtnNeeded = true,
    theme = 'DARK',
    borderType = 'SHADOW',
    shadowProp,
    onPress,
    crossBtnPressed,
    containerStyle,
    primaryIconStyle,
    closeIconStyle,
    textStyle
  } = _ref;
  // const [setButtonPressed] = useState(false);
  const [themeObj, setThemeObj] = (0, _react.useState)({
    color: '#1C1B1F',
    backgroundColor: 'white'
  });
  (0, _react.useEffect)(() => {
    if (theme === 'DARK') {
      setThemeObj({
        color: '#CAC4D0',
        backgroundColor: '#1C1B1F'
      });
    }
  }, [theme]);
  const handleButtonPress = () => {
    // setButtonPressed(true);
    if (onPress) onPress();
  };
  return /*#__PURE__*/React.createElement(_reactNative.Pressable, {
    onPress: handleButtonPress
  }, _ref2 => {
    let {
      pressed
    } = _ref2;
    return /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [{
        ...containerStyles,
        ...containerStyle
      }, {
        backgroundColor: themeObj.backgroundColor
      }, pressed && (theme === 'DARK' ? {
        backgroundColor: 'black'
      } : {
        backgroundColor: 'lightgrey'
      }), borderType === 'SHADOW' && {
        ...shadowProps,
        ...shadowProp
      }, disabled === true && {
        opacity: 0.6
      }],
      pointerEvents: disabled === true ? 'none' : 'auto'
    }, primaryIconSrc && /*#__PURE__*/React.createElement(_reactNative.Image, {
      style: {
        ...primaryIconStyles,
        ...primaryIconStyle
      },
      source: primaryIconSrc
    }), /*#__PURE__*/React.createElement(_reactNative.Text, {
      style: [{
        ...textStyles,
        ...textStyle
      }, {
        color: themeObj.color
      }]
    }, text), optionalBtnNeeded && /*#__PURE__*/React.createElement(_reactNative.TouchableOpacity, {
      onPress: crossBtnPressed,
      style: {
        ...closeIconStyles,
        ...closeIconStyle
      }
    }, closeIconSrc ? /*#__PURE__*/React.createElement(_reactNative.Image, {
      source: closeIconSrc
    }) : /*#__PURE__*/React.createElement(_reactNative.Image, {
      source: require('../../assets/png/cross.png')
    })));
  });
};
exports.ChipComponent = ChipComponent;
//# sourceMappingURL=Chip.component.js.map