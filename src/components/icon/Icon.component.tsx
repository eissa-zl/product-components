import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { IconStyles } from './Icon.styles';

type IconComponentProps = {

    /**
     * source for svg image, pass as require('../assets/icon.svg)
     */
    SVGImage: React.FunctionComponent<React.SVGAttributes<SVGElement>>,

       /**
     * background color for the icon component
     */
    BGColor: string,

           /**
     * background color when the compoenent is active
     */
    activeBgColor: string,

           /**
     * icon component size
     */
    BGsize: number,

               /**
     * image size
     */
    imgSize: number,

                   /**
     * if true,icon is disabled
     */
    isDisabled: boolean
}

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
