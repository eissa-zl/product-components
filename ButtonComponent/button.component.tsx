import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonComponentStyles } from './button.styles';

export type ButtonType = "PRIMARY" | "SECONDARY";

type ButtonComponentProps = {
  buttonText: string,
  buttonType: ButtonType,
  onPress: () => void
}

export const ButtonComponent = (props: ButtonComponentProps) => (
  <TouchableOpacity onPress={props.onPress} style={ButtonComponentStyles[props.buttonType]}>
    <Text style={
      props.buttonType === "PRIMARY"
        ? ButtonComponentStyles.primaryButtonText
        : ButtonComponentStyles.secondaryButtonText
    }>{props.buttonText}</Text>
  </TouchableOpacity>
);
