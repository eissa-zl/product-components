"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChipComponent = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var ChipComponent_style_1 = require("./ChipComponent.style");
var containerStyles = ChipComponent_style_1.styles.containerStyles, primaryIconStyles = ChipComponent_style_1.styles.primaryIconStyles, textStyles = ChipComponent_style_1.styles.textStyles, closeIconStyles = ChipComponent_style_1.styles.closeIconStyles, shadowProps = ChipComponent_style_1.styles.shadowProps;
/**
 * Used to show a value in chip format. Usually used as filter tags
 * @parms {@link ChipComponentProps|chip-component-props}
 */
var ChipComponent = function (_a) {
    var primaryIconSrc = _a.primaryIconSrc, closeIconSrc = _a.closeIconSrc, text = _a.text, disabled = _a.disabled, _b = _a.optionalBtnNeeded, optionalBtnNeeded = _b === void 0 ? true : _b, _c = _a.theme, theme = _c === void 0 ? 'LIGHT' : _c, _d = _a.borderType, borderType = _d === void 0 ? 'SHADOW' : _d, shadowProp = _a.shadowProp, onPress = _a.onPress, crossBtnPressed = _a.crossBtnPressed, containerStyle = _a.containerStyle, primaryIconStyle = _a.primaryIconStyle, closeIconStyle = _a.closeIconStyle, textStyle = _a.textStyle;
    var _e = (0, react_1.useState)(false), isButtonPressed = _e[0], setButtonPressed = _e[1];
    var _f = (0, react_1.useState)({
        color: '#1C1B1F',
        backgroundColor: 'white'
    }), themeObj = _f[0], setThemeObj = _f[1];
    (0, react_1.useEffect)(function () {
        if (theme === 'DARK') {
            setThemeObj({
                color: '#CAC4D0',
                backgroundColor: '#1C1B1F'
            });
        }
        else {
            setThemeObj({
                color: '#1C1B1F',
                backgroundColor: 'white'
            });
        }
    }, [theme]);
    var handleButtonPress = function () {
        setButtonPressed(true);
        if (onPress)
            onPress();
    };
    return (react_1.default.createElement(react_native_1.Pressable, { onPress: handleButtonPress }, function (_a) {
        var pressed = _a.pressed;
        return (react_1.default.createElement(react_native_1.View, { style: [__assign(__assign({}, containerStyles), containerStyle), { backgroundColor: themeObj.backgroundColor }, pressed &&
                    (theme === 'DARK' ? { backgroundColor: 'black' } : { backgroundColor: '#CAC4D0' }), borderType === 'SHADOW' && __assign(__assign({}, shadowProps), shadowProp), disabled === true && { opacity: 0.6 }], pointerEvents: disabled === true ? 'none' : 'auto' },
            primaryIconSrc && react_1.default.createElement(react_native_1.Image, { style: __assign(__assign({}, primaryIconStyles), primaryIconStyle), source: primaryIconSrc }),
            react_1.default.createElement(react_native_1.Text, { style: [__assign(__assign({}, textStyles), textStyle), { color: themeObj.color }] }, text),
            optionalBtnNeeded &&
                react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: crossBtnPressed, style: __assign(__assign({}, closeIconStyles), closeIconStyle) }, closeIconSrc ?
                    react_1.default.createElement(react_native_1.Image, { source: closeIconSrc }) :
                    react_1.default.createElement(react_native_1.Image, { source: require('../../assets/png/cross.png') }))));
    }));
};
exports.ChipComponent = ChipComponent;
