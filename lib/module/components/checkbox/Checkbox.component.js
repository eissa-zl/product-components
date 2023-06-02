import { useState } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { CheckboxStyles } from './Checkbox.styles';
import CheckedIcon from '../../assets/svg/checkIcon.svg';
import IndeterminateIcon from '../../assets/svg/indeterminateIcon.svg';
import { colorCodes } from '../../utils/colorCodes';

/**
 * Used when user needs to select multiple items
 * @parms {@link CheckboxComponentProps|checkbox-component-props}
 */

export const CheckboxComponent = props => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(props.isDefaultSelected ? props.isDefaultSelected : false);
  const handleChange = () => {
    props.setCurrentSelected(!selectedCheckbox);
    setSelectedCheckbox(!selectedCheckbox);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TouchableHighlight, {
    disabled: props.isDisabled,
    style: [{
      borderRadius: 50,
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center'
    }, props.isDisabled ? {
      opacity: 1
    } : null],
    activeOpacity: 1,
    onPress: () => handleChange(),
    underlayColor: props.activeBgColor
  }, /*#__PURE__*/React.createElement(View, {
    style: CheckboxStyles.wrapper
  }, /*#__PURE__*/React.createElement(View, {
    style: [CheckboxStyles.radio, {
      height: 28,
      width: 28
    }, props.isDisabled ? {
      borderColor: colorCodes.LIGHT.disabledBg
    } : {
      borderColor: props.outerBgColor
    }]
  }, selectedCheckbox ? /*#__PURE__*/React.createElement(View, {
    style: [CheckboxStyles.radioBg, {
      height: 28,
      width: 28
    }, props.isDisabled ? {
      backgroundColor: colorCodes.LIGHT.disabledBg
    } : {
      backgroundColor: props.innerBgColor
    }]
  }, props.checkboxState == 'checked' ? /*#__PURE__*/React.createElement(CheckedIcon, {
    width: 16,
    height: 16
  }) : /*#__PURE__*/React.createElement(IndeterminateIcon, {
    width: 16,
    height: 16
  })) : null))));
};
//# sourceMappingURL=Checkbox.component.js.map