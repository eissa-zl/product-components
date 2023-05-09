import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { ButtonComponentStyles } from './Button.styles';

export type ButtonType = "FILLED" | "OUTLINED" | "TEXT" | "ELEVATED" | "TONAL";

type ButtonComponentProps = {
  buttonType: ButtonType,
  buttonText: string,
  buttonTextColor: string,
  buttonUnderlayColor: string
  isDisabled?: boolean,
  svgImage?: any
  onPress: () => void
} & (
    { buttonType: 'OUTLINED' | 'TEXT' } | { buttonType: Exclude<ButtonType, 'OUTLINED' | 'TEXT'>, buttonBackgroundColor: string }
  );

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
          props.buttonUnderlayColor,
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
          props.buttonUnderlayColor
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
          props.buttonUnderlayColor
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
          props.buttonUnderlayColor,
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
          props.buttonUnderlayColor,
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
          setBorderColor(props.buttonUnderlayColor)
          break;
        default:
          setBorderColor(props.buttonUnderlayColor)
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
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', gap:11 }}>
        {props.svgImage && <props.svgImage style={{height:15, width:15}} color={textColor}></props.svgImage>}
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
