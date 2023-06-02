"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconComponent = void 0;
var _reactNative = require("react-native");
var _Icon = require("./Icon.styles");
/**
 * Used as an icon
 * @parms {@link IconComponentProps|icon-component-props}
 */
const IconComponent = props => {
  return /*#__PURE__*/React.createElement(_reactNative.TouchableHighlight, {
    disabled: props.isDisabled,
    style: [_Icon.IconStyles.mainContainer, props.isDisabled ? {
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
exports.IconComponent = IconComponent;
//# sourceMappingURL=Icon.component.js.map