import React from 'react'
import { View, Text, TextInput,KeyboardAvoidingView, StyleProp, StyleSheet } from 'react-native'
import styles from '../input/Input.styles'

/**
 * Used in forms or area where we need user's input as text
 * @parms {@link TextInputComponentProps|input-component-props}
 */
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
    /**
     * denotes what type of data the user needs to enter in input field (eg:Name) 
     */
    label: string,

     /**
     * denotes the value of input field
     */
    value: string,

      /**
     * if true, supporting text is visible
     */
    showSupportingText: boolean,

     /**
     * denotes placeholder text for input field
     */
    placeholder: string,

    /**
     * denotes a function which is triggered when input field value changes
     */
    onChange: () => void,

    /**
     * supporting text under input field. Used for showing error or required fields
     */
    supportingText?:string,

        /**
     * takes a object with styles for input field container
     */
    containerStyle:any,

           /**
     * takes a object with styles for input field 
     */
    inputstyle?:any,

     /**
     * takes a object with styles for label
     */
    labelstyle?:any,

     /**
     * takes a object with styles for supporting text
     */
    supportingtextstyle?:any,

     /**
     * if true, vaule in input field is hidden like a password field
     */
    secureTextEntry?: boolean,
    
     /**
     * for overriding default placeholder 
     */
    placeholderTextColor?: string,

  /**
     * denotes a function which is triggered when user focus on input field
     */
    onFocus?: () => void,

      /**
     * denotes a function which is triggered when user moves out or unfocuses the input field
     */
    onBlur?: () => void,
}
