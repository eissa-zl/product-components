import { StyleSheet } from 'react-native';
import { colorCodes } from '../../utils/colorCodes';
export const CheckboxStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    gap: 4,
    marginHorizontal: 15,
    justifyContent: 'space-between'
  },
  radio: {
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: colorCodes.LIGHT.disabledBg
  },
  radioBg: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorCodes.LIGHT.disabledBg
  }
});
//# sourceMappingURL=Checkbox.styles.js.map