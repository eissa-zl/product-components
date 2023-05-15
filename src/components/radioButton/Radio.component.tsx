import React, { useState } from 'react'
import {
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';
import { RadioStyles } from './Radio.styles';

type RadioComponentProps = {
    optionNames: string[],
    innerBgColor: string,
    outerBgColor: string,
    optionTextColor: string,
    fontSize: number,
    defaultSelect?: string,
    isDisabled: boolean,
    textAlignment: string
    setCurrentSelected: (value: React.SetStateAction<string>) => void,
}

export const RadioComponent = (props: RadioComponentProps) => {

    const innerBgColor = props.innerBgColor ? props.innerBgColor : 'black';
    const outerBgColor = props.outerBgColor ? props.outerBgColor : 'black';
    const fontSize = props.fontSize ? props.fontSize : 20;
    const textColor = props.optionTextColor ? props.optionTextColor : 'black';

    const [selectedRadio, setSelectedRadio] = useState(
        props.defaultSelect ? props.defaultSelect : props.optionNames[0]
    );

    const selectOption = (optionName: string) => {
        props.setCurrentSelected(optionName);
        setSelectedRadio(optionName);
    }

    return (
        <>
            {props.optionNames.map((item: any, index: any) => (
                <TouchableHighlight style={{ width: '100%' }} disabled={props.isDisabled} key={index} onPress={() => selectOption(item)} underlayColor={'white'}>
                    <View style={RadioStyles.wrapper}>
                        {props.textAlignment === 'left' ?
                            <Text style={{ fontSize: fontSize, color: textColor }}>
                                {item}
                            </Text>
                            : null}
                        <View
                            style={[
                                RadioStyles.radio,
                                {
                                    borderColor: outerBgColor,
                                    height: 28,
                                    width: 28,
                                },
                            ]}>
                            {selectedRadio == item ? (
                                <View
                                    style={[
                                        RadioStyles.radioBg,
                                        {
                                            backgroundColor: innerBgColor,
                                            height: 15,
                                            width: 15,
                                        },
                                    ]}></View>
                            ) : null}
                        </View>
                        {props.textAlignment === 'right' ?
                            <Text style={{ fontSize: fontSize, color: textColor }}>
                                {item}
                            </Text>
                            : null}
                    </View>
                </TouchableHighlight>
            ))}
        </>
    )
}
