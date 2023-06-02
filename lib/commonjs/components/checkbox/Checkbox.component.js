"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxComponent = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _Checkbox = require("./Checkbox.styles");
var _checkIcon = _interopRequireDefault(require("../../assets/svg/checkIcon.svg"));
var _indeterminateIcon = _interopRequireDefault(require("../../assets/svg/indeterminateIcon.svg"));
var _colorCodes = require("../../utils/colorCodes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Used when user needs to select multiple items
 * @parms {@link CheckboxComponentProps|checkbox-component-props}
 */

const CheckboxComponent = props => {
  const [selectedCheckbox, setSelectedCheckbox] = (0, _react.useState)(props.isDefaultSelected ? props.isDefaultSelected : false);
  const handleChange = () => {
    props.setCurrentSelected(!selectedCheckbox);
    setSelectedCheckbox(!selectedCheckbox);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactNative.TouchableHighlight, {
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
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: _Checkbox.CheckboxStyles.wrapper
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_Checkbox.CheckboxStyles.radio, {
      height: 28,
      width: 28
    }, props.isDisabled ? {
      borderColor: _colorCodes.colorCodes.LIGHT.disabledBg
    } : {
      borderColor: props.outerBgColor
    }]
  }, selectedCheckbox ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_Checkbox.CheckboxStyles.radioBg, {
      height: 28,
      width: 28
    }, props.isDisabled ? {
      backgroundColor: _colorCodes.colorCodes.LIGHT.disabledBg
    } : {
      backgroundColor: props.innerBgColor
    }]
  }, props.checkboxState == 'checked' ? /*#__PURE__*/React.createElement(_checkIcon.default, {
    width: 16,
    height: 16
  }) : /*#__PURE__*/React.createElement(_indeterminateIcon.default, {
    width: 16,
    height: 16
  })) : null))));
};
exports.CheckboxComponent = CheckboxComponent;
//# sourceMappingURL=Checkbox.component.js.map