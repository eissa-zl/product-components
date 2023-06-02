"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const TextComponentStyles = _reactNative.StyleSheet.create({
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
var _default = TextComponentStyles;
exports.default = _default;
//# sourceMappingURL=Input.styles.js.map