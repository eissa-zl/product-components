import React from 'react'
import { Text, View } from 'react-native';
import { BadgeStyles } from './Badge.styles';
import { BadgeComponentProps } from './Badge.type';

/**
 * Badges can be used as part of links or buttons to provide a counter.
 * @parms {@link BadgeComponentProps|badge-component-props}
 */
export const BadgeComponent = (props: BadgeComponentProps) => {
    return (
        <View
            style={[BadgeStyles.badgeContainer, props.theme === 'light' ?
                { backgroundColor: '#B3261E' } : { backgroundColor: '#F2B8B5' }]}>
            <Text
                style={[BadgeStyles.textField, props.theme === 'light' ?
                    { color: '#FFFFFF' } : { color: '#1C1B1F' }]}>
                {props.text}
            </Text>
        </View>
    )
}
