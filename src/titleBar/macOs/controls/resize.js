'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

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

var Resize = (_dec = (0, _windowFocus2.default)(), _dec(_class = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Resize, _Component);

  function Resize() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Resize);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Resize)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleKeydown = function (e) {
      if (e.altKey) _this.setState({ altKey: true });
    }, _this.handleKeyup = function () {
      if (_this.state.altKey) _this.setState({ altKey: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Resize, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeydown);
      document.addEventListener('keyup', this.handleKeyup);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var onClick = _props.onClick;
      var onMaximizeClick = _props.onMaximizeClick;
      var isWindowFocused = _props.isWindowFocused;
      var showIcon = _props.showIcon;

      var props = _objectWithoutProperties(_props, ['style', 'onClick', 'onMaximizeClick', 'isWindowFocused', 'showIcon']);

      delete props.isFullscreen;

      var iconStyle = _extends({}, _2.default.resize.icon, {
        opacity: showIcon ? 1 : 0
      });

      var componentStyle = _extends({}, _2.default.resize.button, style);
      if (!isWindowFocused && !showIcon) {
        componentStyle = _extends({}, componentStyle, _2.default.resize.unfocused);
      }

      var icon = void 0;
      if (this.props.isFullscreen) {
        iconStyle = _extends({}, iconStyle, {
          width: '8px',
          height: '7.9px',
          marginTop: '1px',
          marginLeft: '1px'
        });

        icon = _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', width: '8px', height: '7.9px', viewBox: '0 0 8 7.9', style: iconStyle },
          _react2.default.createElement('path', { fill: '#006400', d: 'M4.5,3.9H8L4,0v3.4C4.3,3.4,4.6,3.7,4.5,3.9z' }),
          _react2.default.createElement('path', { fill: '#006400', d: 'M3.5,4H0l4,3.9V4.5C3.7,4.5,3.5,4.3,3.5,4z' })
        );
      } else if (this.state.altKey) {
        iconStyle = _extends({}, iconStyle, {
          width: '8px',
          height: '8px',
          marginTop: '1px',
          marginLeft: '1px'
        });

        onClick = onMaximizeClick;
        icon = _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', width: '8px', height: '8px', viewBox: '0 0 8 8', style: iconStyle },
          _react2.default.createElement('polygon', {
            fill: '#006400',
            points: '8,3.5 4.5,3.5 4.5,0 3.5,0 3.5,3.5 0,3.5 0,4.5 3.5,4.5 3.5,8 4.5,8 4.5,4.5 8,4.5 '
          })
        );
      } else {
        iconStyle = _extends({}, iconStyle, {
          width: '6px',
          height: '5.9px'
        });

        icon = _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', width: '6px', height: '5.9px', viewBox: '0 0 6 5.9', style: iconStyle },
          _react2.default.createElement('path', { fill: '#006400', d: 'M5.4,0h-4L6,4.5V0.6C5.7,0.6,5.3,0.3,5.4,0z' }),
          _react2.default.createElement('path', { fill: '#006400', d: 'M0.6,5.9h4L0,1.4l0,3.9C0.3,5.3,0.6,5.6,0.6,5.9z' })
        );
      }

      return _react2.default.createElement(
        'a',
        _extends({
          style: componentStyle,
          onClick: onClick
        }, props),
        icon
      );
    }
  }]);

  return Resize;
}(_react.Component), _class2.propTypes = {
  isFullscreen: _react.PropTypes.bool,
  showIcon: _react.PropTypes.bool
}, _temp2)) || _class) || _class);
exports.default = Resize;