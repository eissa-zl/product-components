"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxStyles = void 0;
var react_native_1 = require("react-native");
exports.CheckboxStyles = react_native_1.StyleSheet.create({
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
    },
    radioBg: {
        borderRadius: 5,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
