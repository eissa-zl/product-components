import { TouchableHighlight } from 'react-native';
import { IconStyles } from './Icon.styles';
/**
 * Used as an icon
 * @parms {@link IconComponentProps|icon-component-props}
 */
export const IconComponent = props => {
  return /*#__PURE__*/React.createElement(TouchableHighlight, {
    disabled: props.isDisabled,
    style: [IconStyles.mainContainer, props.isDisabled ? {
      opacity: 0.3
    } : {}, {
      backgroundColor: props.BGColor,
      height: props.BGsize,
      width: props.BGsize
    }],
    underlayColor: props.activeBgColor,
    onPress: () => {}
  }, /*#__PURE__*/React.createElement(props.SVGImage, {
    width: props.imgSize,
    height: props.imgSize
  }));
};
//# sourceMappingURL=Icon.component.js.map