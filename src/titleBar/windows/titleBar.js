'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _dec, _dec2, _dec3, _dec4, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _windows = require('../../style/background/windows');

var _windows2 = _interopRequireDefault(_windows);

var _hidden = require('../../style/hidden');

var _windows3 = require('../../style/color/windows');

var _windows4 = require('../../style/theme/windows');

var _windowFocus = require('../../windowFocus');

var _windowFocus2 = _interopRequireDefault(_windowFocus);

var _controls = require('./controls/controls');

var _controls2 = _interopRequireDefault(_controls);

var _windows5 = require('./styles/windows10');

var _windows6 = _interopRequireDefault(_windows5);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TitleBar = (_dec = (0, _windows2.default)(function (nextProps, prevProps, background) {
  return _extends({}, nextProps, { hasBackground: background });
}), _dec2 = (0, _windowFocus2.default)(), _dec3 = (0, _windows4.ThemeContext)(), _dec4 = (0, _windows3.ColorContext)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_temp = _class2 = function (_Component) {
  _inherits(TitleBar, _Component);

  function TitleBar() {
    _classCallCheck(this, TitleBar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TitleBar).apply(this, arguments));
  }

  _createClass(TitleBar, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        isMaximized: this.props.isMaximized
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var style = _props.style;
      var controls = _props.controls;
      var title = _props.title;
      var isWindowFocused = _props.isWindowFocused;
      var hasBackground = _props.hasBackground;
      var hidden = _props.hidden;

      var props = _objectWithoutProperties(_props, ['children', 'style', 'controls', 'title', 'isWindowFocused', 'hasBackground', 'hidden']);

      delete props.isMaximized;
      delete props.onCloseClick;
      delete props.onMinimizeClick;
      delete props.onMaximizeClick;
      delete props.onRestoreDownClick;

      var componentStyle = _extends({}, _windows6.default.titleBar, style);
      var titleStyle = _windows6.default.title;

      if (!isWindowFocused && this.context.theme !== 'dark') {
        titleStyle = _extends({}, titleStyle, _windows6.default.unfocusedTitle);
      }

      if (this.context.theme === 'dark') {
        titleStyle = _extends({}, titleStyle, _windows6.default.titleDark);
      }

      componentStyle = _extends({}, componentStyle, {
        visibility: !hidden ? 'visible' : 'hidden',
        display: !hidden ? 'flex' : 'none'
      });

      if (this.context.theme === 'dark') {
        componentStyle = _extends({}, componentStyle, _windows6.default.titleBarDark);
      }

      var controlsComponent = !controls || _react2.default.createElement(_controls2.default, this.props);
      var titleComponent = !title || _react2.default.createElement('div', { style: titleStyle }, this.props.title);

      if (hasBackground) delete componentStyle.backgroundColor;

      return _react2.default.createElement('div', _extends({
        ref: 'element',
        style: componentStyle
      }, props), titleComponent, controlsComponent, children);
    }
  }]);

  return TitleBar;
}(_react.Component), _class2.propTypes = _extends({}, _hidden.hiddenPropTypes, _windows4.themePropTypes, _windows3.colorPropTypes, _windows.backgroundPropTypes, {
  title: _react.PropTypes.string,
  controls: _react.PropTypes.bool,
  isMaximized: _react.PropTypes.bool,
  onCloseClick: _react.PropTypes.func,
  onMinimizeClick: _react.PropTypes.func,
  onMaximizeClick: _react.PropTypes.func,
  onRestoreDownClick: _react.PropTypes.func
}), _class2.childContextTypes = {
  isMaximized: _react.PropTypes.bool
}, _class2.contextTypes = _extends({}, _windows4.themeContextTypes), _temp)) || _class) || _class) || _class) || _class);
exports.default = TitleBar;