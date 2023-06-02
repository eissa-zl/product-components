"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darkenHexColor = darkenHexColor;
exports.hexToRgb = hexToRgb;
exports.rgbToHex = rgbToHex;
function darkenHexColor(hex, percentage) {
  var rgb = hexToRgb(hex);
  rgb.r = Math.round(rgb.r * (1 - percentage / 100));
  rgb.g = Math.round(rgb.g * (1 - percentage / 100));
  rgb.b = Math.round(rgb.b * (1 - percentage / 100));
  var darkenedHex = rgbToHex(rgb.r, rgb.g, rgb.b);
  return darkenedHex;
}
function hexToRgb(hex) {
  hex = hex.replace('#', '');
  // const hexRegex = /^[0-9A-Fa-f]{6}$/g;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return {
    r,
    g,
    b
  };
}
function rgbToHex(r, g, b) {
  const componentToHex = c => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}
//# sourceMappingURL=colorConversion.js.map