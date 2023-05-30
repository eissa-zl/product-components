import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { IconStyles } from './Icon.styles';

export type IconTheme = "light" | "dark";

type IconComponentProps = {
    SVGImage: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
    BGColor: string,
    activeBgColor: string,
    BGsize: number,
    imgSize: number,
    isDisabled?: boolean,
    iconTheme: IconTheme,
    onPress: () => void
}

export const IconComponent = (props: IconComponentProps) => {

    let svgColor: string;
    if (props.iconTheme === 'light') {
        svgColor = '#FFFFFF'
    }
    else {
        svgColor = '#000000'
    }

    return (
        <TouchableHighlight
            disabled={props.isDisabled}
            style={[IconStyles.mainContainer, props.isDisabled ? { backgroundColor: 'rgba(28, 27, 31, 0.12)' } :
                { backgroundColor: props.BGColor },
            {
                height: props.BGsize,
                width: props.BGsize
            }]}
            underlayColor={props.activeBgColor}
            onPress={props.onPress}
        >
            <props.SVGImage color={svgColor} width={props.imgSize} height={props.imgSize} />
        </TouchableHighlight>
    )
}
