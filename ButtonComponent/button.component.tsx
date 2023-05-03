import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, TouchableHighlight } from 'react-native';
import { ButtonComponentStyles } from './button.styles';

export type ButtonType = "FILLED" | "OUTLINED";

type ButtonComponentProps = {
  buttonType: ButtonType,
  buttonText: string,
  buttonTextColor: string,
  buttonBackgroundColor: string,
  buttonUnderlayColor: string,
  onPress: () => void
}

export const ButtonComponent = (props: ButtonComponentProps) => {

  let backgroundColor: string = "";
  let borderColor: string = "";
  let textColor: string = "";

  switch (props.buttonType) {
    case 'FILLED':
      backgroundColor = props.buttonBackgroundColor;
      borderColor = props.buttonBackgroundColor;
      textColor = props.buttonTextColor;
      break;
    case 'OUTLINED':
      backgroundColor = "white";
      borderColor = "#79747e";
      textColor = props.buttonBackgroundColor;
      break;
  }

  return (
    <TouchableHighlight underlayColor={props.buttonUnderlayColor} onPress={props.onPress} style={[
      // ButtonComponentStyles[props.buttonType],
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
