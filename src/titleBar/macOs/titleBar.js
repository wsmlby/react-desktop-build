'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _controls = require('./controls/controls');

var _controls2 = _interopRequireDefault(_controls);

var _ = require('./styles/10.11');

var _2 = _interopRequireDefault(_);

var _windowFocus = require('../../windowFocus');

var _windowFocus2 = _interopRequireDefault(_windowFocus);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleBar = (_dec = (0, _dimension2.default)({ width: '100%' }), _dec2 = (0, _windowFocus2.default)(), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(TitleBar, _Component);

  function TitleBar() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, TitleBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TitleBar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.resize = function () {
      if (_this.refs.title) {
        var barRect = _this.refs.element.getBoundingClientRect();
        _this.refs.title.style.overflow = 'visible';
        _this.refs.title.style.paddingRight = 0;
        _this.refs.title.style.flexGrow = 0;
        var titleRect = _this.refs.title.getBoundingClientRect();
        _this.refs.title.style.overflow = 'hidden';
        _this.refs.title.style.flexGrow = 1;

        var barWidth = barRect.width - 6;
        var contentWidth = titleRect.width + (_this.props.controls ? 60 : 0);

        var padding = barWidth - contentWidth;
        if (padding > 60) padding = 60;

        _this.refs.title.style.paddingRight = padding + 'px';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TitleBar, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        titlebarChild: true
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.resize);
      this.resize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.resize();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var inset = _props.inset;
      var controls = _props.controls;
      var title = _props.title;
      var transparent = _props.transparent;
      var isWindowFocused = _props.isWindowFocused;
      var style = _props.style;

      var props = _objectWithoutProperties(_props, ['children', 'inset', 'controls', 'title', 'transparent', 'isWindowFocused', 'style']);

      delete props.isFullscreen;
      delete props.onCloseClick;
      delete props.onMinimizeClick;
      delete props.onMaximizeClick;
      delete props.onResizeClick;

      var componentStyle = _extends({}, _2.default.titleBar);

      var titleStyle = _2.default.title;

      if (inset) {
        componentStyle = _extends({}, componentStyle, _2.default.titleBarInset);
      }

      if (!isWindowFocused) {
        componentStyle = _extends({}, componentStyle, _2.default.unfocusedTitleBar);
        titleStyle = _extends({}, titleStyle, _2.default.unfocusedTitle);
      }

      controls = !controls || _react2.default.createElement(_controls2.default, _extends({ ref: 'controls', inset: inset }, this.props));
      title = !title || _react2.default.createElement(
        'div',
        { ref: 'title', style: titleStyle },
        title
      );

      if (transparent) {
        delete componentStyle.backgroundImage;
        delete componentStyle.borderBottomWidth;
        delete componentStyle.borderBottomStyle;
        delete componentStyle.borderBottomColor;
        delete componentStyle.borderTopWidth;
        delete componentStyle.borderTopStyle;
        delete componentStyle.borderTopColor;
        delete componentStyle.borderTopLeftRadius;
        delete componentStyle.borderTopRightRadius;
      }

      return _react2.default.createElement(
        'div',
        _extends({
          ref: 'element',
          style: _extends({}, componentStyle, style)
        }, props),
        controls,
        title,
        children
      );
    }
  }]);

  return TitleBar;
}(_react.Component), _class2.propTypes = _extends({}, _dimension.dimensionPropTypes, {
  title: _react.PropTypes.string,
  inset: _react.PropTypes.bool,
  controls: _react.PropTypes.bool,
  transparent: _react.PropTypes.bool,
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
}), _class2.childContextTypes = {
  titlebarChild: _react.PropTypes.bool
}, _temp2)) || _class) || _class);
exports.default = TitleBar;