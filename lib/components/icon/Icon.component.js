"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconComponent = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Icon_styles_1 = require("./Icon.styles");
/**
* Used as an icon
* @parms {@link IconComponentProps|icon-component-props}
*/
var IconComponent = function (props) {
    return (react_1.default.createElement(react_native_1.TouchableHighlight, { disabled: props.isDisabled, style: [Icon_styles_1.IconStyles.mainContainer, props.isDisabled ? { opacity: 0.3 } : {},
            {
                backgroundColor: props.BGColor,
                height: props.BGsize,
                width: props.BGsize
            }], underlayColor: props.activeBgColor, onPress: function () { } },
        react_1.default.createElement(props.SVGImage, { width: props.imgSize, height: props.imgSize })));
};
exports.IconComponent = IconComponent;
