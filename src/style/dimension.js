'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionPropTypes = undefined;
exports.removeDimensionProps = removeDimensionProps;

exports.default = function () {
  for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  return (0, _styleHelper2.default)(options, dimensionPropTypes, mapDimensionStyle);
};

var _react = require('react');

var _styleHelper = require('../styleHelper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dimensionPropTypes = exports.dimensionPropTypes = {
  width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

function removeDimensionProps(props) {
  return (0, _styleHelper.extractProps)(props, dimensionPropTypes)[0];
}

function mapDimensionStyle(key, value) {
  return [key, (0, _styleHelper.parseDimension)(value)];
}