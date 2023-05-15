import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { IconStyles } from './Icon.styles';

type IconComponentProps = {
    SVGImage: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
    BGColor: string,
    activeBgColor: string,
    BGsize: number,
    imgSize: number,
    isDisabled: boolean
}

export const IconComponent = (props: IconComponentProps) => {
    return (
        <TouchableHighlight
            disabled={props.isDisabled}
            style={[IconStyles.mainContainer, props.isDisabled ? { opacity: 0.3 } : {},
            {
                backgroundColor: props.BGColor,
                height: props.BGsize,
                width: props.BGsize
            }]}
            underlayColor={props.activeBgColor}
            onPress={() => { }}>
            <View style={[IconStyles.mainContainer, { backgroundColor: props.BGColor, height: props.BGsize, width: props.BGsize }]}>
                <props.SVGImage width={props.imgSize} height={props.imgSize} />
            </View>
        </TouchableHighlight>
    )
}
