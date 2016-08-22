'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _windowFocus = require('../../../windowFocus');

var _windowFocus2 = _interopRequireDefault(_windowFocus);

var _ = require('./styles/10.11');

var _2 = _interopRequireDefault(_);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Close = (_dec = (0, _windowFocus2.default)(), _dec(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Close, _Component);

  function Close() {
    _classCallCheck(this, Close);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Close).apply(this, arguments));
  }

  _createClass(Close, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var isWindowFocused = _props.isWindowFocused;
      var showIcon = _props.showIcon;

      var props = _objectWithoutProperties(_props, ['style', 'isWindowFocused', 'showIcon']);

      delete props.isFullscreen;

      var iconStyle = _extends({}, _2.default.close.icon, {
        opacity: showIcon ? 1 : 0
      });

      var componentStyle = _extends({}, _2.default.close.button, style);
      if (!isWindowFocused && !showIcon) {
        componentStyle = _extends({}, componentStyle, _2.default.close.unfocused);
      }

      return _react2.default.createElement(
        'a',
        _extends({
          style: componentStyle
        }, props),
        _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', width: '6px', height: '6px', viewBox: '0 0 6 6', style: iconStyle },
          _react2.default.createElement('polygon', { fill: '#4d0000', points: '6,0.8 5.2,0 3,2.2 0.8,0 0,0.8 2.2,3 0,5.2 0.8,6 3,3.8 5.2,6 6,5.2 3.8,3 ' })
        )
      );
    }
  }]);

  return Close;
}(_react.Component), _class2.propTypes = {
  style: _react.PropTypes.object,
  showIcon: _react.PropTypes.bool
}, _temp)) || _class) || _class);
exports.default = Close;