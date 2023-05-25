"use strict";
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
exports.RadioComponent = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Radio_styles_1 = require("./Radio.styles");
/**
 * Used when user needs to select one of multiple options
 * @parms {@link RadioComponentProps|radio-component-props}
 */
var RadioComponent = function (props) {
    var innerBgColor = props.innerBgColor ? props.innerBgColor : "black";
    var outerBgColor = props.outerBgColor ? props.outerBgColor : "black";
    var fontSize = props.fontSize ? props.fontSize : 20;
    var textColor = props.optionTextColor ? props.optionTextColor : "black";
    var textAlign = props.textAlignment ? props.textAlignment : "left";
    var _a = (0, react_1.useState)(props.defaultSelect ? props.defaultSelect : props.optionNames[0]), selectedRadio = _a[0], setSelectedRadio = _a[1];
    var selectOption = function (optionName) {
        props.setCurrentSelected(optionName);
        setSelectedRadio(optionName);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, props.optionNames.map(function (item, index) { return (react_1.default.createElement(react_native_1.TouchableHighlight, { style: [props.isDisabled ? { opacity: 0.3 } : {}, { width: "100%" }], disabled: props.isDisabled, key: index, onPress: function () { return selectOption(item); }, underlayColor: props.activeBgColor },
        react_1.default.createElement(react_native_1.View, { style: [
                Radio_styles_1.RadioStyles.wrapper,
                { gap: 4, margin: 3, flexDirection: "row" },
            ] },
            textAlign === "left" ? (react_1.default.createElement(react_native_1.Text, { style: { fontSize: fontSize, color: textColor } }, item)) : null,
            react_1.default.createElement(react_native_1.View, { style: [
                    Radio_styles_1.RadioStyles.radio,
                    {
                        borderColor: outerBgColor,
                        height: 28,
                        width: 28,
                    },
                ] }, selectedRadio == item ? (react_1.default.createElement(react_native_1.View, { style: [
                    Radio_styles_1.RadioStyles.radioBg,
                    {
                        backgroundColor: innerBgColor,
                        height: 15,
                        width: 15,
                    },
                ] })) : null),
            textAlign === "right" ? (react_1.default.createElement(react_native_1.Text, { style: { fontSize: fontSize, color: textColor } }, item)) : null))); })));
};
exports.RadioComponent = RadioComponent;
