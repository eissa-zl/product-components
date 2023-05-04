import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, TouchableHighlight } from 'react-native';
import { ButtonComponentStyles } from './Button.styles';

export type ButtonType = "FILLED" | "OUTLINED";

type ButtonComponentProps = {
  buttonType: ButtonType,
  buttonText: string,
  buttonTextColor: string,
  buttonBackgroundColor: string,
  buttonUnderlayColor: string,
  isDisabled: boolean,
  onPress: () => void
}

export const ButtonComponent = (props: ButtonComponentProps) => {


  const [backgroundColor, setBackgroundColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [underlayColor, setUnderlayColor] = useState("");

  useEffect(() => {
    switch (props.buttonType) {
      case 'FILLED':
        setButtonColors(props.buttonTextColor, props.buttonBackgroundColor, props.buttonUnderlayColor ,props.buttonBackgroundColor)
        if (props.isDisabled == true) {
          setButtonColors("#959396", "#e3e0e3", "#e3e0e3","#e3e0e3")
        }
        break;
      case 'OUTLINED':
        setButtonColors(props.buttonBackgroundColor, "white", "#ece7f3","#79747e")
        break;
    }

  }, [props])

  function setButtonColors(currentTextColor: string, currentBackgroundColor: string, currentUnderlayColor:string ,currentBorderColor: string): void {
    setTextColor(currentTextColor);
    setBackgroundColor(currentBackgroundColor);
    setUnderlayColor(currentUnderlayColor);
    setBorderColor(currentBorderColor);
  }

  var touchableProps = {
    onPress: (): void => { props.onPress },
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
        }
      ]}>
      <Text style={
        [
          ButtonComponentStyles.buttonText,
          {
            color: textColor
          }
        ]
      }>{props.buttonText}</Text>
    </TouchableHighlight>
  );
}
