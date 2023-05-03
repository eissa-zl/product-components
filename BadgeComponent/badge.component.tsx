import React from 'react'
import {
    Text,
    View,
} from 'react-native';
import { BadgeStyles } from './badge.styles';

type BadgeComponentProps = {
    backgroundColor: string,
    textColor: string,
    count: string
}

export const BadgeComponent = (props: BadgeComponentProps) => {
    return (
        <>
            <View style={[BadgeStyles.badgeContainer, { backgroundColor: props.backgroundColor }]}>
                <Text style={[BadgeStyles.textField, { color: props.textColor }]}>
                    {props.count}
                </Text>
            </View>
        </>
    )
}
