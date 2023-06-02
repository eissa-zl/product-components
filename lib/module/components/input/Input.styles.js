import { StyleSheet } from 'react-native';
const TextComponentStyles = StyleSheet.create({
  inputStyles: {
    width: '100%',
    height: '100%',
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 15
  },
  labelStyles: {
    position: 'absolute',
    fontSize: 15,
    top: '-18%',
    left: '5%',
    zIndex: 2,
    color: 'black',
    backgroundColor: 'white',
    margin: 'auto'
  },
  supportingTextStyles: {
    position: 'relative',
    left: '5%',
    color: 'black'
  },
  containerStyles: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    opacity: 1,
    borderRadius: 10
  }
});
export default TextComponentStyles;
//# sourceMappingURL=Input.styles.js.map