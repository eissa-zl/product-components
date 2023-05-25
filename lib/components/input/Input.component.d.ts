import React from 'react';
/**
 * Used in forms or area where we need user's input as text
 * @parms {@link TextInputComponentProps|input-component-props}
 */
export declare const TextInputComponent: ({ label, value, onChange, placeholder, supportingText, placeholderTextColor, secureTextEntry, showSupportingText, onBlur, onFocus, containerStyle, inputstyle, labelstyle, supportingtextstyle, }: TextInputComponentProps) => React.JSX.Element;
type TextInputComponentProps = {
    /**
     * denotes what type of data the user needs to enter in input field (eg:Name)
     */
    label: string;
    /**
    * denotes the value of input field
    */
    value: string;
    /**
   * if true, supporting text is visible
   */
    showSupportingText: boolean;
    /**
    * denotes placeholder text for input field
    */
    placeholder: string;
    /**
     * denotes a function which is triggered when input field value changes
     */
    onChange: () => void;
    /**
     * supporting text under input field. Used for showing error or required fields
     */
    supportingText?: string;
    /**
 * takes a object with styles for input field container
 */
    containerStyle: any;
    /**
* takes a object with styles for input field
*/
    inputstyle?: any;
    /**
    * takes a object with styles for label
    */
    labelstyle?: any;
    /**
    * takes a object with styles for supporting text
    */
    supportingtextstyle?: any;
    /**
    * if true, vaule in input field is hidden like a password field
    */
    secureTextEntry?: boolean;
    /**
    * for overriding default placeholder
    */
    placeholderTextColor?: string;
    /**
       * denotes a function which is triggered when user focus on input field
       */
    onFocus?: () => void;
    /**
   * denotes a function which is triggered when user moves out or unfocuses the input field
   */
    onBlur?: () => void;
};
export {};
