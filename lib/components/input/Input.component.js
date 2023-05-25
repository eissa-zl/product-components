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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInputComponent = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Input_styles_1 = __importDefault(require("../input/Input.styles"));
/**
 * Used in forms or area where we need user's input as text
 * @parms {@link TextInputComponentProps|input-component-props}
 */
var TextInputComponent = function (_a) {
    var label = _a.label, value = _a.value, onChange = _a.onChange, _b = _a.placeholder, placeholder = _b === void 0 ? "Type Here" : _b, _c = _a.supportingText, supportingText = _c === void 0 ? "" : _c, _d = _a.placeholderTextColor, placeholderTextColor = _d === void 0 ? "grey" : _d, _e = _a.secureTextEntry, secureTextEntry = _e === void 0 ? false : _e, _f = _a.showSupportingText, showSupportingText = _f === void 0 ? false : _f, onBlur = _a.onBlur, onFocus = _a.onFocus, containerStyle = _a.containerStyle, inputstyle = _a.inputstyle, labelstyle = _a.labelstyle, supportingtextstyle = _a.supportingtextstyle;
    var containerStyles = Input_styles_1.default.containerStyles, labelStyles = Input_styles_1.default.labelStyles, supportingTextStyles = Input_styles_1.default.supportingTextStyles, inputStyles = Input_styles_1.default.inputStyles;
    //Label Background is is White
    return (react_1.default.createElement(react_native_1.KeyboardAvoidingView, { behavior: "padding", style: __assign(__assign({}, containerStyles), containerStyle) },
        react_1.default.createElement(react_native_1.Text, { style: __assign(__assign({}, labelStyles), labelstyle) }, label),
        react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.TextInput, { style: __assign(__assign({}, inputStyles), inputstyle), placeholder: placeholder, value: value, onChangeText: onChange, autoCorrect: false, multiline: true, secureTextEntry: secureTextEntry, placeholderTextColor: placeholderTextColor, textAlignVertical: 'center', onBlur: onBlur })),
        showSupportingText && react_1.default.createElement(react_native_1.Text, { style: __assign(__assign({}, supportingTextStyles), supportingtextstyle) }, supportingText)));
};
exports.TextInputComponent = TextInputComponent;
