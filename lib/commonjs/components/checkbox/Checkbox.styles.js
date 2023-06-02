"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxStyles = void 0;
var _reactNative = require("react-native");
var _colorCodes = require("../../utils/colorCodes");
const CheckboxStyles = _reactNative.StyleSheet.create({
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
    backgroundColor: _colorCodes.colorCodes.LIGHT.disabledBg
  },
  radioBg: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: _colorCodes.colorCodes.LIGHT.disabledBg
  }
});
exports.CheckboxStyles = CheckboxStyles;
//# sourceMappingURL=Checkbox.styles.js.map