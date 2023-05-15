import React from 'react';
import { StyleSheet } from 'react-native';

export const CheckboxStyles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        gap: 4,
        marginHorizontal: 15,
        justifyContent: 'space-between'
    },
    radio: {
        borderWidth: 2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    radioBg: {
        borderRadius: 5,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
})