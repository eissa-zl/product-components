import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RadioStyles } from "./Radio.styles";
import { RadioComponentProps } from "./Radio.type";

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
        <TouchableOpacity
          style={[props.isDisabled ? { opacity: 0.3 } : {}, { width: "100%" }]}
          disabled={props.isDisabled}
          key={index}
          onPress={() => selectOption(item)}
        >
          <View
            style={[
              RadioStyles.wrapper,
              { gap: 4, margin: 3, flexDirection: "row" },
            ]}
          >
            {textAlign === "left" ? (
              <Text style={{ fontSize: fontSize, color: textColor,flex:1 }}>
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
              <Text style={{ fontSize: fontSize, color: textColor ,flex:1 }}>
                {item}
              </Text>
            ) : null}
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};
