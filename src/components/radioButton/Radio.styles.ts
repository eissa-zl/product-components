import { StyleSheet } from 'react-native';

export const RadioStyles = StyleSheet.create({
  wrapper: {
    margin: 3,
    width: 150,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 1,
    flexDirection: 'row',
  },
  radio: {
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioBg: {
    borderRadius: 20,
  },
});
