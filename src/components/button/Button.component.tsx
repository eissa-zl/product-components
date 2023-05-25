import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { ButtonComponentStyles } from './Button.styles';
import { darkenHexColor } from '../../utils/colorConversion';

export type ButtonType = "FILLED" | "OUTLINED" | "TEXT" | "ELEVATED" | "TONAL";

type ButtonComponentProps = {

  /**
   * type of button {@link ButtonType|button-prop-type}
   */
  buttonType: ButtonType,
  
  /**
   * value of the text in button
   */
  buttonText: string,

    /**
   * value of color of the text
   */
  buttonTextColor: string,

      /**
   * if true, button is disabled
   */
  isDisabled?: boolean,

  /**
   * svg image source in button
   */
  svgImage?: any

  /**
   *function triggred when the user presses on the button
   */
  onPress: () => void
} & (
    { buttonType: 'OUTLINED' | 'TEXT' } | { buttonType: Exclude<ButtonType, 'OUTLINED' | 'TEXT'>, buttonBackgroundColor: string }
  );

  /**
 * Button to let user get a action done by pressing it
 * @parms {@link ButtonComponentProps|button-component-props}
 */
export const ButtonComponent = (props: ButtonComponentProps) => {

  const [backgroundColor, setBackgroundColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [underlayColor, setUnderlayColor] = useState("");

  useEffect(() => {
    switch (props.buttonType) {
      case 'FILLED':
        setButtonColors(
          props.buttonTextColor,
          props.buttonBackgroundColor,
          props.buttonBackgroundColor,
          props.buttonBackgroundColor + "d9"
        )
        if (props.isDisabled == true) {
          setButtonColors(
            "#959396",
            "#e3e0e3",
            "#e3e0e3",
          )
        }
        break;
      case 'OUTLINED':
        setButtonColors(
          props.buttonTextColor,
          "#FFFFFF",
          "#79747e",
          props.buttonTextColor + "17",
        )
        if (props.isDisabled == true) {
          setButtonColors(
            "#a9a6a9",
            "#FFFFFF",
            "#e3e0e3"
          )
        }
        break;
      case 'TEXT':
        setButtonColors(
          props.buttonTextColor,
          '#00000000',
          "#00000000",
          props.buttonTextColor + "17"
        )
        if (props.isDisabled == true) {
          setButtonColors(
            "#b6b3b6",
            "#fffbfe",
            "#fffbfe"
          )
        }
        break;
      case 'ELEVATED':
        setButtonColors(
          props.buttonTextColor,
          props.buttonBackgroundColor,
          props.buttonBackgroundColor,
          darkenHexColor(props.buttonBackgroundColor,3)
        )
        if (props.isDisabled == true) {
          setButtonColors(
            "#979598",
            "#e3e0e3",
            "#e3e0e3",
          )
        }
        break;
      case 'TONAL':
        setButtonColors(
          props.buttonTextColor,
          props.buttonBackgroundColor,
          props.buttonBackgroundColor,
          darkenHexColor(props.buttonBackgroundColor,5)
        )
        if (props.isDisabled == true) {
          setButtonColors(
            "#979598",
            "#e3e0e3",
            "#e3e0e3",
          )
        }
        break;
    }

  }, [props])

  function setButtonColors(currentTextColor: string, currentBackgroundColor: string, currentBorderColor: string, currentUnderlayColor: string = ""): void {
    setTextColor(currentTextColor);
    setBackgroundColor(currentBackgroundColor);
    setUnderlayColor(currentUnderlayColor);
    setBorderColor(currentBorderColor);
  }

  var touchableProps = {
    onPress: (): void => { props.onPress },
    onPressIn: (): void => {
      switch (props.buttonType) {
        case 'OUTLINED':
          break;
        case 'TEXT':
          setBorderColor(underlayColor)
          break;
        default:
          setBorderColor(underlayColor)
          break;
      }
    },
    onPressOut: (): void => {
      switch (props.buttonType) {
        case 'OUTLINED':
          setBorderColor('#79747e')
          break;
        case 'TEXT':
          setBorderColor('transparent')
          break;
        default:
          setBorderColor(props.buttonBackgroundColor)
          break;
      }
    },
    underlayColor: underlayColor,
    disabled: props.isDisabled,
  };

  return (
    <TouchableHighlight
      {...touchableProps}
      style={[
        ButtonComponentStyles.buttonCommonStyles,
        {
          backgroundColor: backgroundColor,
          borderColor: borderColor,
        },
        props.buttonType === 'ELEVATED'
        && !props.isDisabled
        && {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.3,
          shadowRadius: 2,
          elevation: 1,

        }
      ]}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 11 }}>
        {props.svgImage && <props.svgImage style={{ height: 15, width: 15 }} color={textColor}></props.svgImage>}
        <Text style={
          [
            ButtonComponentStyles.buttonText,
            {
              color: textColor
            }
          ]
        }>{props.buttonText}</Text>
      </View>
    </TouchableHighlight>
  );
}
