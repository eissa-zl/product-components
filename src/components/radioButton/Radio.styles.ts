import React from 'react';
import { StyleSheet } from 'react-native';

export const RadioStyles = StyleSheet.create({
    wrapper: {
        margin: 3,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        gap: 4, 
        flexDirection: 'row'
    },
    radio: {
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioBg: {
        borderRadius: 20,
    },
})