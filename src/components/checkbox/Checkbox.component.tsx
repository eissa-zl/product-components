import { useState } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { CheckboxStyles } from './Checkbox.styles';
import CheckedIcon from '../../assets/svg/checkIcon.svg';
import IndeterminateIcon from '../../assets/svg/indeterminateIcon.svg';
import { CheckboxComponentProps } from './Checkbox.type';
import colorCodes from '../../utils/colorCodes';

/**
 * Used when user needs to select multiple items
 * @parms {@link CheckboxComponentProps|checkbox-component-props}
 */

export const CheckboxComponent = (props: CheckboxComponentProps) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(
    props.isDefaultSelected ? props.isDefaultSelected : false
  );
  const handleChange = () => {
    props.setCurrentSelected(!selectedCheckbox);
    setSelectedCheckbox(!selectedCheckbox);
  };

  return (
    <>
      <TouchableHighlight
        disabled={props.isDisabled}
        style={[
          {
            borderRadius: 50,
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          },
          props.isDisabled ? { opacity: 1 } : null,
        ]}
        activeOpacity={1}
        onPress={() => handleChange()}
        underlayColor={props.activeBgColor}
      >
        <View style={CheckboxStyles.wrapper}>
          <View
            style={[
              CheckboxStyles.radio,
              {
                height: 28,
                width: 28,
              },
              props.isDisabled
                ? { borderColor: colorCodes.primaryDisabledBgLight }
                : { borderColor: props.outerBgColor },
            ]}
          >
            {selectedCheckbox ? (
              <View
                style={[
                  CheckboxStyles.radioBg,
                  {
                    height: 28,
                    width: 28,
                  },
                  props.isDisabled
                    ? { backgroundColor: colorCodes.primaryDisabledBgLight }
                    : { backgroundColor: props.innerBgColor },
                ]}
              >
                {props.checkboxState == 'checked' ? (
                  <CheckedIcon width={16} height={16} />
                ) : (
                  <IndeterminateIcon width={16} height={16} />
                )}
              </View>
            ) : null}
          </View>
        </View>
      </TouchableHighlight>
    </>
  );
};
