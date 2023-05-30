import React, { useState } from 'react'
import { Text, TouchableHighlight, View, } from 'react-native';
import { CheckboxStyles } from './Checkbox.styles';
import CheckedIcon from '../../assets/svg/checkIcon.svg';
import IndeterminateIcon from '../../assets/svg/indeterminateIcon.svg';
import { CheckboxComponentProps } from './Checkbox.type';

/**
* Used when user needs to select multiple items
* @parms {@link CheckboxComponentProps|checkbox-component-props}
*/

export const CheckboxComponent = (props: CheckboxComponentProps) => {
    const [selectedCheckbox, setSelectedCheckbox] = useState(props.isDefaultSelected ? props.isDefaultSelected : false);
    const handleChange = () => {
        props.setCurrentSelected(!selectedCheckbox);
        setSelectedCheckbox(!selectedCheckbox);
    }

    let svgColor: string;
    if (props.theme === 'light') {
        svgColor = '#FFFFFF'
    }
    else {
        svgColor = '#000000'
    }

    return (
        <>
            <TouchableHighlight
                disabled={props.isDisabled}
                style={[{ borderRadius: 50, width: 60, height: 60, alignItems: 'center', justifyContent: 'center' },
                props.isDisabled ? { opacity: 1 } : null]}
                activeOpacity={1} onPress={() => handleChange()}
                underlayColor={props.activeBgColor}>
                <View style={CheckboxStyles.wrapper}>
                    <View
                        style={[
                            CheckboxStyles.radio,
                            {
                                height: 28,
                                width: 28,
                            },
                            props.isDisabled ? { borderColor: '#E6E1E5' } : { borderColor: props.outerBgColor, }
                        ]}>
                        {selectedCheckbox ? (
                            <View
                                style={[
                                    CheckboxStyles.radioBg,
                                    {
                                        height: 28,
                                        width: 28,
                                    },
                                    props.isDisabled ? { backgroundColor: '#E6E1E5' } : { backgroundColor: props.innerBgColor, }
                                ]}>
                                {props.checkboxState == "checked" ?
                                    <CheckedIcon color={svgColor} width={16} height={16} /> :
                                    <IndeterminateIcon color={svgColor} width={16} height={16} />
                                }
                            </View>
                        ) : null}
                    </View>
                </View>
            </TouchableHighlight>
        </>
    )
}
