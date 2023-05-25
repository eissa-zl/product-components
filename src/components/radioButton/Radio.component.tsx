import React, { useState } from "react";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { RadioStyles } from "./Radio.styles";

type RadioComponentProps = {
  /**
   * Used as an icon
   * options to be shown adjecent to radio button
   */
  optionNames: string[];

  /**
   * inner background color
   */
  innerBgColor: string;

  /**
   * outer background color
   */
  outerBgColor: string;

  /**
   * text color for text adjecent to radio buttons
   */
  optionTextColor: string;

  /**
   * size of text adjecent to radio
   */
  fontSize: number;

  /**
   * needs the text which we want to be selected by default
   */
  defaultSelect?: string;

  /**
   * if true, radio buttons are disabled
   */
  isDisabled: boolean;

  /**
   * alignment of the text relative to radio button, can be left or right
   */
  textAlignment?: string;

    /**
   * background color when radio button is active
   */
  activeBgColor: string;

    /**
   *setter for radio button state
   */
  setCurrentSelected: (value: React.SetStateAction<string>) => void;
};

/**
 * Used when user needs to select one of multiple options
 * @parms {@link RadioComponentProps|radio-component-props}
 */
export const RadioComponent = (props: RadioComponentProps) => {
  const innerBgColor = props.innerBgColor ? props.innerBgColor : "black";
  const outerBgColor = props.outerBgColor ? props.outerBgColor : "black";
  const fontSize = props.fontSize ? props.fontSize : 20;
  const textColor = props.optionTextColor ? props.optionTextColor : "black";
  const textAlign = props.textAlignment ? props.textAlignment : "left";

  const [selectedRadio, setSelectedRadio] = useState(
    props.defaultSelect ? props.defaultSelect : props.optionNames[0]
  );

  const selectOption = (optionName: string) => {
    props.setCurrentSelected(optionName);
    setSelectedRadio(optionName);
  };

  return (
    <>
      {props.optionNames.map((item: any, index: any) => (
        <TouchableHighlight
          style={[props.isDisabled ? { opacity: 0.3 } : {}, { width: "100%" }]}
          disabled={props.isDisabled}
          key={index}
          onPress={() => selectOption(item)}
          underlayColor={props.activeBgColor}
        >
          <View
            style={[
              RadioStyles.wrapper,
              { gap: 4, margin: 3, flexDirection: "row" },
            ]}
          >
            {textAlign === "left" ? (
              <Text style={{ fontSize: fontSize, color: textColor }}>
                {item}
              </Text>
            ) : null}
            <View
              style={[
                RadioStyles.radio,
                {
                  borderColor: outerBgColor,
                  height: 28,
                  width: 28,
                },
              ]}
            >
              {selectedRadio == item ? (
                <View
                  style={[
                    RadioStyles.radioBg,
                    {
                      backgroundColor: innerBgColor,
                      height: 15,
                      width: 15,
                    },
                  ]}
                ></View>
              ) : null}
            </View>
            {textAlign === "right" ? (
              <Text style={{ fontSize: fontSize, color: textColor }}>
                {item}
              </Text>
            ) : null}
          </View>
        </TouchableHighlight>
      ))}
    </>
  );
};
