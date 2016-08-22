'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapStyles;
function mapStyles(styles, map) {
  var popped = [];
  var mappedStyles = {};

  var _loop = function _loop(prop) {
    if (map.hasOwnProperty(prop)) {
      mappedStyles[prop] = {};
      map[prop].forEach(function (key) {
        if (styles !== undefined && typeof styles[key] !== 'undefined') {
          popped.push(key);
          mappedStyles[prop][key] = styles[key];
        }
      });
    }
  };

  for (var prop in map) {
    _loop(prop);
  }
  var remaining = {};
  for (var _prop in styles) {
    if (styles.hasOwnProperty(_prop)) {
      if (popped.indexOf(_prop) === -1) {
        remaining[_prop] = styles[_prop];
      }
    }
  }

  var finalStyles = [remaining];
  for (var _prop2 in mappedStyles) {
    if (mappedStyles.hasOwnProperty(_prop2)) {
      finalStyles.push(mappedStyles[_prop2]);
    }
  }

  return finalStyles;
}