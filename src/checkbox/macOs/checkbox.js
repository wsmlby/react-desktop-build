'use strict';

var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
};

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

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _ = require('./styles/10.11');

var _2 = _interopRequireDefault(_);

var _checkmark = require('./checkmark');

var _checkmark2 = _interopRequireDefault(_checkmark);

var _text = require('../../text/macOs/text');

var _text2 = _interopRequireDefault(_text);

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

var Checkbox = (_dec = (0, _hidden2.default)(), _dec(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this));

    _this.onChange = function (event) {
      _this.setState({ checked: event.target.checked });
      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    };

    _this.state = {
      checked: props.defaultChecked === true
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var label = _props.label;

      var props = _objectWithoutProperties(_props, ['style', 'label']);

      var componentStyle = _extends({}, _2.default.checkbox, style);
      var labelStyle = _2.default.label;
      var shadowColor = '#0050a5';

      if (this.state.checked) {
        componentStyle = _extends({}, componentStyle, _2.default['checkbox:checked']);
      }

      if ((0, _radium.getState)(this.state, null, ':active')) {
        if (this.state.checked) {
          componentStyle = _extends({}, componentStyle, _2.default['checkbox:checked:active']);
          shadowColor = '#001d99';
        } else {
          componentStyle = _extends({}, componentStyle, _2.default['checkbox:active']);
        }
      }

      return _react2.default.createElement('div', { style: _2.default.container }, _react2.default.createElement('label', { style: labelStyle }, _react2.default.createElement('div', { style: _2.default.inputWrapper }, _react2.default.createElement('input', _extends({
        ref: 'element',
        type: 'checkbox'
      }, props, {
        style: componentStyle,
        onChange: this.onChange
      })), _react2.default.createElement(_checkmark2.default, { show: this.state.checked, shadowColor: shadowColor })), _react2.default.createElement(_text2.default, { style: { display: 'inline' } }, label)));
    }
  }]);

  return Checkbox;
}(_react.Component), _class2.propTypes = _extends({}, _hidden.hiddenPropTypes, {
  label: _react.PropTypes.string,
  onChange: _react.PropTypes.func
}), _temp)) || _class) || _class);
exports.default = Checkbox;