'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontSizePropTypes = undefined;
exports.removeFontSizeProps = removeFontSizeProps;

exports.default = function () {
  for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  return (0, _styleHelper2.default)(options, fontSizePropTypes, mapFontSizeStyle, mapFontSizeStyles);
};

var _react = require('react');

var _styleHelper = require('../styleHelper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var fontSizePropTypes = exports.fontSizePropTypes = {
  size: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

function removeFontSizeProps(props) {
  return (0, _styleHelper.extractProps)(props, fontSizePropTypes)[0];
}

function mapFontSizeStyle(key, value) {
  return ['fontSize', (0, _styleHelper.parseDimension)(value)];
}

function mapFontSizeStyles(styles) {
  if (styles.fontSize && !styles.lineHeight) {
    styles.lineHeight = (0, _styleHelper.parseDimension)(parseInt(styles.fontSize) * 1.2);
  }
  return styles;
}