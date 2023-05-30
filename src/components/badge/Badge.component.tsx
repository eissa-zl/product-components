import React from 'react'
import { Text, View } from 'react-native';
import { BadgeStyles } from './Badge.styles';

export type BadgeTheme = "light" | "dark";

type BadgeComponentProps = {
    badgeTheme: BadgeTheme
    count: string
}

export const BadgeComponent = (props: BadgeComponentProps) => {
    return (
        <View
            style={[BadgeStyles.badgeContainer, props.badgeTheme === 'light' ?
                { backgroundColor: '#B3261E' } : { backgroundColor: '#F2B8B5' }]}>
            <Text
                style={[BadgeStyles.textField, props.badgeTheme === 'light' ?
                    { color: '#FFFFFF' } : { color: '#1C1B1F' }]}>
                {props.count}
            </Text>
        </View>
    )
}
