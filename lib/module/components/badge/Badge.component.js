import { Text, View } from 'react-native';
import { BadgeStyles } from './Badge.styles';
// import { useTheme } from 'src/core/theme';
/**
 * Badges can be used as part of links or buttons to provide a counter.
 * @parms {@link BadgeComponentProps|badge-component-props}
 */
export const BadgeComponent = props => {
  // const theme=useTheme(props?.theme)

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(View, {
    style: [BadgeStyles.badgeContainer, {
      backgroundColor: props.backgroundColor
    }]
  }, /*#__PURE__*/React.createElement(Text, {
    style: [BadgeStyles.textField, {
      color: props.textColor
    }]
  }, props.text)));
};
//# sourceMappingURL=Badge.component.js.map