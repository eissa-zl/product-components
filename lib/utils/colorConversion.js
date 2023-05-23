"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbToHex = exports.hexToRgb = exports.darkenHexColor = void 0;
function darkenHexColor(hex, percentage) {
    var rgb = hexToRgb(hex);
    rgb.r = Math.round(rgb.r * (1 - percentage / 100));
    rgb.g = Math.round(rgb.g * (1 - percentage / 100));
    rgb.b = Math.round(rgb.b * (1 - percentage / 100));
    var darkenedHex = rgbToHex(rgb.r, rgb.g, rgb.b);
    return darkenedHex;
}
exports.darkenHexColor = darkenHexColor;
function hexToRgb(hex) {
    hex = hex.replace("#", "");
    var hexRegex = /^[0-9A-Fa-f]{6}$/g;
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    return {
        r: r,
        g: g,
        b: b
    };
}
exports.hexToRgb = hexToRgb;
function rgbToHex(r, g, b) {
    var componentToHex = function (c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return "#".concat(componentToHex(r)).concat(componentToHex(g)).concat(componentToHex(b));
}
exports.rgbToHex = rgbToHex;
