"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeComponent = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Badge_styles_1 = require("./Badge.styles");
var BadgeComponent = function (props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_native_1.View, { style: [Badge_styles_1.BadgeStyles.badgeContainer, { backgroundColor: props.backgroundColor }] },
            react_1.default.createElement(react_native_1.Text, { style: [Badge_styles_1.BadgeStyles.textField, { color: props.textColor }] }, props.count))));
};
exports.BadgeComponent = BadgeComponent;
