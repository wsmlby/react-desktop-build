'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _close = require('./close');

var _close2 = _interopRequireDefault(_close);

var _minimize = require('./minimize');

var _minimize2 = _interopRequireDefault(_minimize);

var _resize = require('./resize');

var _resize2 = _interopRequireDefault(_resize);

var _lock = require('./lock');

var _lock2 = _interopRequireDefault(_lock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  controls: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    display: 'flex',
    width: '61px'
  },

  inset: {
    marginLeft: '5px'
  }
};

var Controls = (_temp = _class = function (_Component) {
  _inherits(Controls, _Component);

  function Controls() {
    _classCallCheck(this, Controls);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Controls).call(this));

    _this.state = {
      isOver: false
    };
    return _this;
  }

  _createClass(Controls, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          style: _extends({}, styles.controls),
          onMouseEnter: function onMouseEnter() {
            return _this2.setState({ isOver: true });
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.setState({ isOver: false });
          }
        },
        _react2.default.createElement(_close2.default, { onClick: this.props.onCloseClick, showIcon: this.state.isOver }),
        this.props.showMinimize ? _react2.default.createElement(_minimize2.default, { onClick: this.props.onMinimizeClick, showIcon: this.state.isOver }) : null,
        this.props.showResize ? _react2.default.createElement(_resize2.default, {
          isFullscreen: this.props.isFullscreen,
          onClick: this.props.onResizeClick,
          onMaximizeClick: this.props.onMaximizeClick,
          showIcon: this.state.isOver
        }) : null,
        this.props.showLock ? _react2.default.createElement(_lock2.default, { onLockClick: this.props.onLockClick, onUnlockClick: this.props.onUnlockClick, showIcon: this.state.isOver }) : null
      );
    }
  }]);

  return Controls;
}(_react.Component), _class.propTypes = {
  inset: _react.PropTypes.bool,
  isFullscreen: _react.PropTypes.bool,
  onCloseClick: _react.PropTypes.func,
  onMinimizeClick: _react.PropTypes.func,
  onMaximizeClick: _react.PropTypes.func,
  onResizeClick: _react.PropTypes.func,
  onLockClick: _react.PropTypes.func,
  onUnlockClick: _react.PropTypes.func,
  showMinimize: _react.PropTypes.bool,
  showResize: _react.PropTypes.bool,
  showLock: _react.PropTypes.bool
}, _class.defaultProps = {
  showMinimize: false,
  showMaximize: false,
  showLock: false
}, _temp);
exports.default = Controls;