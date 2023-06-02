function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { ButtonComponentStyles } from './Button.styles';
import { darkenHexColor } from '../../utils/colorConversion';
/**
 * Button to let user get a action done by pressing it
 * @parms {@link ButtonComponentProps|button-component-props}
 */
export const ButtonComponent = props => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [underlayColor, setUnderlayColor] = useState('');
  useEffect(() => {
    switch (props.buttonType) {
      case 'FILLED':
        setButtonColors(props.buttonTextColor, props.buttonBackgroundColor, props.buttonBackgroundColor, props.buttonBackgroundColor + 'd9');
        if (props.isDisabled == true) {
          setButtonColors('#959396', '#e3e0e3', '#e3e0e3');
        }
        break;
      case 'OUTLINED':
        setButtonColors(props.buttonTextColor, '#FFFFFF', '#79747e', props.buttonTextColor + '17');
        if (props.isDisabled == true) {
          setButtonColors('#a9a6a9', '#FFFFFF', '#e3e0e3');
        }
        break;
      case 'TEXT':
        setButtonColors(props.buttonTextColor, '#00000000', '#00000000', props.buttonTextColor + '17');
        if (props.isDisabled == true) {
          setButtonColors('#b6b3b6', '#fffbfe', '#fffbfe');
        }
        break;
      case 'ELEVATED':
        setButtonColors(props.buttonTextColor, props.buttonBackgroundColor, props.buttonBackgroundColor, darkenHexColor(props.buttonBackgroundColor, 3));
        if (props.isDisabled == true) {
          setButtonColors('#979598', '#e3e0e3', '#e3e0e3');
        }
        break;
      case 'TONAL':
        setButtonColors(props.buttonTextColor, props.buttonBackgroundColor, props.buttonBackgroundColor, darkenHexColor(props.buttonBackgroundColor, 5));
        if (props.isDisabled == true) {
          setButtonColors('#979598', '#e3e0e3', '#e3e0e3');
        }
        break;
    }
  }, [props]);
  function setButtonColors(currentTextColor, currentBackgroundColor, currentBorderColor) {
    let currentUnderlayColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    setTextColor(currentTextColor);
    setBackgroundColor(currentBackgroundColor);
    setUnderlayColor(currentUnderlayColor);
    setBorderColor(currentBorderColor);
  }
  var touchableProps = {
    onPress: () => {
      props.onPress;
    },
    onPressIn: () => {
      switch (props.buttonType) {
        case 'OUTLINED':
          break;
        case 'TEXT':
          setBorderColor(underlayColor);
          break;
        default:
          setBorderColor(underlayColor);
          break;
      }
    },
    onPressOut: () => {
      switch (props.buttonType) {
        case 'OUTLINED':
          setBorderColor('#79747e');
          break;
        case 'TEXT':
          setBorderColor('transparent');
          break;
        default:
          setBorderColor(props.buttonBackgroundColor);
          break;
      }
    },
    underlayColor: underlayColor,
    disabled: props.isDisabled
  };
  return /*#__PURE__*/React.createElement(TouchableHighlight, _extends({}, touchableProps, {
    style: [ButtonComponentStyles.buttonCommonStyles, {
      backgroundColor: backgroundColor,
      borderColor: borderColor
    }, props.buttonType === 'ELEVATED' && !props.isDisabled && {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 1
    }]
  }), /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 11
    }
  }, props.svgImage && /*#__PURE__*/React.createElement(props.svgImage, {
    style: {
      height: 15,
      width: 15
    },
    color: textColor
  }), /*#__PURE__*/React.createElement(Text, {
    style: [ButtonComponentStyles.buttonText, {
      color: textColor
    }]
  }, props.buttonText)));
};
//# sourceMappingURL=Button.component.js.map