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
exports.SearchComponent = void 0;
var react_native_1 = require("react-native");
var Input_component_1 = require("../input/Input.component");
var Search_styles_1 = require("./Search.styles");
var react_1 = __importDefault(require("react"));
var inputstyles = Search_styles_1.styles.inputstyles, containerstyles = Search_styles_1.styles.containerstyles, iconstyles = Search_styles_1.styles.iconstyles;
var SearchComponent = function (_a) {
    var theme = _a.theme, value = _a.value, onChange = _a.onChange, _b = _a.placeholder, placeholder = _b === void 0 ? "Type Here" : _b, _c = _a.placeholderTextColor, placeholderTextColor = _c === void 0 ? "#777777" : _c, onBlur = _a.onBlur, onFocus = _a.onFocus;
    var themeObj = {
        'backgroundColor': '#F5F6F6',
        color: '#1A1A1A',
    };
    if (theme === 'DARK') {
        themeObj = {
            'backgroundColor': '#1A1A1A',
            color: '#F5F6F6',
        };
    }
    return (react_1.default.createElement(react_native_1.View, { style: containerstyles },
        react_1.default.createElement(react_native_1.Image, { source: require('./../../assets/png/search.png'), style: iconstyles }),
        react_1.default.createElement(Input_component_1.TextInputComponent, { value: value, onChange: onChange, onFocus: onFocus, onBlur: onBlur, placeholder: placeholder, placeholderTextColor: placeholderTextColor, label: '', supportingText: "", showSupportingText: false, containerStyle: __assign(__assign({}, containerstyles), themeObj), inputstyle: __assign(__assign({}, inputstyles), themeObj) })));
};
exports.SearchComponent = SearchComponent;
