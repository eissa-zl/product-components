"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
const styles = _reactNative.StyleSheet.create({
  containerStyles: {
    width: 120,
    height: 40,
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 20,
    alignItems: 'center',
    color: '#1D192B'
  },
  primaryIconStyles: {
    width: 20,
    height: 20
  },
  closeIconStyles: {
    width: 20,
    height: 20,
    paddingEnd: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto'
  },
  textStyles: {
    color: '#1D192B',
    flex: 1,
    textAlign: 'center',
    width: 30
  },
  shadowProps: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13
  }
});
exports.styles = styles;
//# sourceMappingURL=Chip.style.js.map