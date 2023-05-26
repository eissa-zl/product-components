import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { IconStyles } from './Icon.styles';
import { IconComponentProps } from './Icon.type';

  /**
 * Used as an icon
 * @parms {@link IconComponentProps|icon-component-props}
 */
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
            <props.SVGImage width={props.imgSize} height={props.imgSize} />
        </TouchableHighlight>
    )
}
