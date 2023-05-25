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
exports.ButtonComponent = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Button_styles_1 = require("./Button.styles");
var colorConversion_1 = require("../../utils/colorConversion");
var ButtonComponent = function (props) {
    var _a = (0, react_1.useState)(""), backgroundColor = _a[0], setBackgroundColor = _a[1];
    var _b = (0, react_1.useState)(""), borderColor = _b[0], setBorderColor = _b[1];
    var _c = (0, react_1.useState)(""), textColor = _c[0], setTextColor = _c[1];
    var _d = (0, react_1.useState)(""), underlayColor = _d[0], setUnderlayColor = _d[1];
    (0, react_1.useEffect)(function () {
        switch (props.buttonType) {
            case 'FILLED':
                setButtonColors(props.buttonTextColor, props.buttonBackgroundColor, props.buttonBackgroundColor, props.buttonBackgroundColor + "d9");
                if (props.isDisabled == true) {
                    setButtonColors("#959396", "#e3e0e3", "#e3e0e3");
                }
                break;
            case 'OUTLINED':
                setButtonColors(props.buttonTextColor, "#FFFFFF", "#79747e", props.buttonTextColor + "17");
                if (props.isDisabled == true) {
                    setButtonColors("#a9a6a9", "#FFFFFF", "#e3e0e3");
                }
                break;
            case 'TEXT':
                setButtonColors(props.buttonTextColor, '#00000000', "#00000000", props.buttonTextColor + "17");
                if (props.isDisabled == true) {
                    setButtonColors("#b6b3b6", "#fffbfe", "#fffbfe");
                }
                break;
            case 'ELEVATED':
                setButtonColors(props.buttonTextColor, props.buttonBackgroundColor, props.buttonBackgroundColor, (0, colorConversion_1.darkenHexColor)(props.buttonBackgroundColor, 3));
                if (props.isDisabled == true) {
                    setButtonColors("#979598", "#e3e0e3", "#e3e0e3");
                }
                break;
            case 'TONAL':
                setButtonColors(props.buttonTextColor, props.buttonBackgroundColor, props.buttonBackgroundColor, (0, colorConversion_1.darkenHexColor)(props.buttonBackgroundColor, 5));
                if (props.isDisabled == true) {
                    setButtonColors("#979598", "#e3e0e3", "#e3e0e3");
                }
                break;
        }
    }, [props]);
    function setButtonColors(currentTextColor, currentBackgroundColor, currentBorderColor, currentUnderlayColor) {
        if (currentUnderlayColor === void 0) { currentUnderlayColor = ""; }
        setTextColor(currentTextColor);
        setBackgroundColor(currentBackgroundColor);
        setUnderlayColor(currentUnderlayColor);
        setBorderColor(currentBorderColor);
    }
    var touchableProps = {
        onPress: function () { props.onPress; },
        onPressIn: function () {
            switch (props.buttonType) {
                case 'OUTLINED':
                    break;
                case 'TEXT':
                    setBorderColor(underlayColor);
                    break;
                default:
                    setBorderColor(underlayColor);
                    break;
            }
        },
        onPressOut: function () {
            switch (props.buttonType) {
                case 'OUTLINED':
                    setBorderColor('#79747e');
                    break;
                case 'TEXT':
                    setBorderColor('transparent');
                    break;
                default:
                    setBorderColor(props.buttonBackgroundColor);
                    break;
            }
        },
        underlayColor: underlayColor,
        disabled: props.isDisabled,
    };
    return (react_1.default.createElement(react_native_1.TouchableHighlight, __assign({}, touchableProps, { style: [
            Button_styles_1.ButtonComponentStyles.buttonCommonStyles,
            {
                backgroundColor: backgroundColor,
                borderColor: borderColor,
            },
            props.buttonType === 'ELEVATED'
                && !props.isDisabled
                && {
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 2,
                    elevation: 1,
                }
        ] }),
        react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 11 } },
            props.svgImage && react_1.default.createElement(props.svgImage, { style: { height: 15, width: 15 }, color: textColor }),
            react_1.default.createElement(react_native_1.Text, { style: [
                    Button_styles_1.ButtonComponentStyles.buttonText,
                    {
                        color: textColor
                    }
                ] }, props.buttonText))));
};
exports.ButtonComponent = ButtonComponent;
