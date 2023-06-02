import { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Pressable } from 'react-native';
import { styles } from './Chip.style';
const {
  containerStyles,
  primaryIconStyles,
  textStyles,
  closeIconStyles,
  shadowProps
} = styles;

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
  const [themeObj, setThemeObj] = useState({
    color: '#1C1B1F',
    backgroundColor: 'white'
  });
  useEffect(() => {
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
  return /*#__PURE__*/React.createElement(Pressable, {
    onPress: handleButtonPress
  }, _ref2 => {
    let {
      pressed
    } = _ref2;
    return /*#__PURE__*/React.createElement(View, {
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
    }, primaryIconSrc && /*#__PURE__*/React.createElement(Image, {
      style: {
        ...primaryIconStyles,
        ...primaryIconStyle
      },
      source: primaryIconSrc
    }), /*#__PURE__*/React.createElement(Text, {
      style: [{
        ...textStyles,
        ...textStyle
      }, {
        color: themeObj.color
      }]
    }, text), optionalBtnNeeded && /*#__PURE__*/React.createElement(TouchableOpacity, {
      onPress: crossBtnPressed,
      style: {
        ...closeIconStyles,
        ...closeIconStyle
      }
    }, closeIconSrc ? /*#__PURE__*/React.createElement(Image, {
      source: closeIconSrc
    }) : /*#__PURE__*/React.createElement(Image, {
      source: require('../../assets/png/cross.png')
    })));
  });
};
export { ChipComponent };
//# sourceMappingURL=Chip.component.js.map