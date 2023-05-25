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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxComponent = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Checkbox_styles_1 = require("./Checkbox.styles");
var checkIcon_svg_1 = __importDefault(require("../../assets/svg/checkIcon.svg"));
var indeterminateIcon_svg_1 = __importDefault(require("../../assets/svg/indeterminateIcon.svg"));
var CheckboxComponent = function (props) {
    var _a = (0, react_1.useState)(props.isDefaultSelected ? props.isDefaultSelected : false), selectedCheckbox = _a[0], setSelectedCheckbox = _a[1];
    var handleChange = function () {
        props.setCurrentSelected(!selectedCheckbox);
        setSelectedCheckbox(!selectedCheckbox);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_native_1.TouchableHighlight, { disabled: props.isDisabled, style: [{ borderRadius: 50, width: 60, height: 60, alignItems: 'center', justifyContent: 'center' },
                props.isDisabled ? { opacity: 1 } : null], activeOpacity: 1, onPress: function () { return handleChange(); }, underlayColor: props.activeBgColor },
            react_1.default.createElement(react_native_1.View, { style: Checkbox_styles_1.CheckboxStyles.wrapper },
                react_1.default.createElement(react_native_1.View, { style: [
                        Checkbox_styles_1.CheckboxStyles.radio,
                        {
                            height: 28,
                            width: 28,
                        },
                        props.isDisabled ? { borderColor: '#E6E1E5' } : { borderColor: props.outerBgColor, }
                    ] }, selectedCheckbox ? (react_1.default.createElement(react_native_1.View, { style: [
                        Checkbox_styles_1.CheckboxStyles.radioBg,
                        {
                            height: 28,
                            width: 28,
                        },
                        props.isDisabled ? { backgroundColor: '#E6E1E5' } : { backgroundColor: props.innerBgColor, }
                    ] }, props.checkboxState == "checked" ?
                    react_1.default.createElement(checkIcon_svg_1.default, { width: 16, height: 16 }) : react_1.default.createElement(indeterminateIcon_svg_1.default, { width: 16, height: 16 }))) : null)))));
};
exports.CheckboxComponent = CheckboxComponent;
