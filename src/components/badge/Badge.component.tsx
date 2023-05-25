import React from 'react'
import {
    Text,
    View,
} from 'react-native';
import { BadgeStyles } from './Badge.styles';


type BadgeComponentProps = {

    /**
     * background color of the badge
     */
    backgroundColor: string,

    /**
     * color of the text inside badge
     */
    textColor: string,

    /**
     * the text to be shown in the badge
     */
    text: string
}


/**
 * Badges can be used as part of links or buttons to provide a counter.
 * @parms {@link BadgeComponentProps|badge-component-props}
 */
export const BadgeComponent = (props: BadgeComponentProps) => {
    return (
        <>
            <View style={[BadgeStyles.badgeContainer, { backgroundColor: props.backgroundColor }]}>
                <Text style={[BadgeStyles.textField, { color: props.textColor }]}>
                    {props.text}
                </Text>
            </View>
        </>
    )
}
