import { Text, View } from 'react-native';

import { BadgeStyles } from './Badge.styles';
import { BadgeComponentProps } from './Badge.type';

/**
 * Badges can be used as part of links or buttons to provide a counter.
 * @parms {@link BadgeComponentProps|badge-component-props}
 */
export const BadgeComponent = (props: BadgeComponentProps) => {
  return (
    <>
      <View
        style={[
          BadgeStyles.badgeContainer,
          { backgroundColor: props.backgroundColor },
        ]}
      >
        <Text style={[BadgeStyles.textField, { color: props.textColor }]}>
          {props.text}
        </Text>
      </View>
    </>
  );
};
