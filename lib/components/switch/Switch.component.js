"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchComponent = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Switch_styles_1 = require("./Switch.styles");
var SwitchComponent = function (props) {
    var toggleSwitch = function () { return props.setIsEnabled(function (previousState) { return !previousState; }); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_native_1.Switch, { disabled: props.isDisabled, trackColor: { false: props.disabledTrackColor, true: props.enabledTrackColor }, thumbColor: props.isEnabled ? props.enabledThumbColor : props.disabledThumbColor, onValueChange: toggleSwitch, value: props.isEnabled, style: [Switch_styles_1.SwitchStyles.switchContainer, props.isDisabled ? { opacity: 0.4 } : {}] })));
};
exports.SwitchComponent = SwitchComponent;
