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

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('../../text/windows/text');

var _text2 = _interopRequireDefault(_text);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _windows = require('../../style/background/windows');

var _windows2 = _interopRequireDefault(_windows);

var _windows3 = require('../../style/theme/windows');

var _windows4 = require('../../style/color/windows');

var _windows5 = require('./styles/windows10');

var _windows6 = _interopRequireDefault(_windows5);

var _placeholderStyle = require('../../placeholderStyle');

var _placeholderStyle2 = _interopRequireDefault(_placeholderStyle);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

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

var TextInput = (_dec = (0, _hidden2.default)(), _dec2 = (0, _dimension2.default)(), _dec3 = (0, _margin2.default)(), _dec4 = (0, _windows4.ColorContext)(), _dec5 = (0, _windows3.ThemeContext)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextInput).apply(this, arguments));
  }

  _createClass(TextInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var label = _props.label;
      var style = _props.style;

      var props = _objectWithoutProperties(_props, ['label', 'style']);

      var componentStyle = _extends({}, _windows6.default.textBox, style);

      if (this.context.theme === 'dark') {
        componentStyle = _extends({}, componentStyle, _windows6.default.textBoxDarkTheme);
      }

      componentStyle[':focus'] = _extends({}, componentStyle[':focus'], { borderColor: this.context.color });

      props = (0, _windows.removeBackgroundProps)(props);

      var input = _react2.default.createElement(_placeholderStyle2.default, { placeholderStyle: this.placeholderStyle }, (0, _windows2.default)(_react2.default.createElement('input', _extends({
        ref: 'element',
        type: 'text',
        style: componentStyle
      }, props)), this.props));

      if (label) {
        return _react2.default.createElement('div', props, _react2.default.createElement(_text2.default, { style: { marginBottom: '5px' } }, label), input);
      }
      return input;
    }
  }, {
    key: 'placeholderStyle',
    get: function get() {
      return this.context.theme === 'dark' ? _windows6.default[':placeholderDarkTheme'] : _windows6.default[':placeholder'];
    }
  }, {
    key: 'value',
    get: function get() {
      return this.refs.element.value;
    },
    set: function set(value) {
      this.refs.element.value = value;
    }
  }]);

  return TextInput;
}(_react.Component), _class2.propTypes = _extends({}, _windows3.themePropTypes, _hidden.hiddenPropTypes, _dimension.dimensionPropTypes, _margin.marginPropTypes, _windows.backgroundPropTypes, {
  label: _react.PropTypes.string
}), _class2.contextTypes = _extends({}, _windows3.themeContextTypes, _windows4.colorContextTypes), _temp)) || _class) || _class) || _class) || _class) || _class) || _class);
exports.default = TextInput;