"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BadgeComponent = void 0;
var _reactNative = require("react-native");
var _Badge = require("./Badge.styles");
// import { useTheme } from 'src/core/theme';

/**
 * Badges can be used as part of links or buttons to provide a counter.
 * @parms {@link BadgeComponentProps|badge-component-props}
 */
const BadgeComponent = props => {
  // const theme=useTheme(props?.theme)

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_Badge.BadgeStyles.badgeContainer, {
      backgroundColor: props.backgroundColor
    }]
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [_Badge.BadgeStyles.textField, {
      color: props.textColor
    }]
  }, props.text)));
};
exports.BadgeComponent = BadgeComponent;
//# sourceMappingURL=Badge.component.js.map