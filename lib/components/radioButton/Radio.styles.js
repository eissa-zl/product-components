"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioStyles = void 0;
var react_native_1 = require("react-native");
exports.RadioStyles = react_native_1.StyleSheet.create({
    wrapper: {
        margin: 3,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        gap: 4,
        flexDirection: 'row'
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
