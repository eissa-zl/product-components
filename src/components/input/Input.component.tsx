import React from 'react'
import { View, Text, TextInput,KeyboardAvoidingView, StyleProp, StyleSheet } from 'react-native'
import styles from '../input/Input.styles'

export const TextInputComponent = ({label, value, onChange, placeholder = "Type Here",supportingText="", placeholderTextColor = "grey", secureTextEntry = false, showSupportingText = false, onBlur, onFocus,containerStyle,inputstyle,labelstyle,supportingtextstyle,}: TextInputComponentProps) => {
    const { containerStyles, labelStyles, supportingTextStyles, inputStyles } = styles

    //Label Background is is White

    return (
        <KeyboardAvoidingView behavior="padding" style={{...containerStyles,...containerStyle}}>
            <Text style={{...labelStyles,...labelstyle}}>{label}</Text> 
            <View>
                <TextInput
                    style={{...inputStyles,...inputstyle}}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChange}
                    autoCorrect={false}
                    multiline={true}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor={placeholderTextColor}
                    textAlignVertical={'center'}
                    onBlur={onBlur}
                />
            </View>
            {showSupportingText && <Text style={{...supportingTextStyles,...supportingtextstyle}}>{supportingText}</Text>}
        </KeyboardAvoidingView >
    )
}

type TextInputComponentProps = {
    label: string,
    value: string,
    showSupportingText: boolean,
    placeholder: string,
    onChange: () => void,
    supportingText?:string,
    containerStyle:any,
    inputstyle?:any,
    labelstyle?:any,
    supportingtextstyle?:any,
    secureTextEntry?: boolean,
    placeholderTextColor?: string,
    onFocus?: () => void,
    onBlur?: () => void,
}
