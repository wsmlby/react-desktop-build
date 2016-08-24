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

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _dec, _dec2, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _ = require('./styles/10.11');

var _2 = _interopRequireDefault(_);

var _text = require('../../text/macOs/text');

var _text2 = _interopRequireDefault(_text);

var _label = require('../../label/macOs/label');

var _label2 = _interopRequireDefault(_label);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _fontSize = require('../../style/fontSize');

var _fontSize2 = _interopRequireDefault(_fontSize);

var _placeholderStyle = require('../../placeholderStyle');

var _placeholderStyle2 = _interopRequireDefault(_placeholderStyle);

var _mapStyles3 = require('../../utils/mapStyles');

var _mapStyles4 = _interopRequireDefault(_mapStyles3);

var _styleHelper = require('../../styleHelper');

var _focusRingAnimation = require('./focusRingAnimation');

var _focusRingAnimation2 = _interopRequireDefault(_focusRingAnimation);

var _centerPlaceholderAnimation = require('./centerPlaceholderAnimation');

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

var TextFieldOSX = (_dec = (0, _hidden2.default)(), _dec2 = (0, _dimension2.default)(), _dec(_class = _dec2(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(TextFieldOSX, _Component);

  function TextFieldOSX() {
    _classCallCheck(this, TextFieldOSX);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextFieldOSX).call(this));

    _this.handleKeydown = function (e) {
      if (e.keyCode === 8 && e.target.value.length === 1) {
        _this.setState({ showPlaceholder: true });
      }
    };

    _this.handleKeypress = function (e) {
      var noEffect = [0, 13];
      if (e.which === 13 && _this.props.onEnter) {
        _this.props.onEnter(e);
      }

      if (!e.which || noEffect.indexOf(e.which) !== -1) return null;
      if (String.fromCharCode(e.which)) {
        if (_this.state.showPlaceholder) {
          _this.setState({ showPlaceholder: false });
        }
      }
    };

    _this.handleChange = function (e) {
      if (e.target.value && _this.state.showPlaceholder) {
        _this.setState({ showPlaceholder: false });
      } else if (!e.target.value && !_this.state.showPlaceholder) {
        _this.setState({ showPlaceholder: true });
      }
    };

    _this.handleBlur = function (e) {
      if (_this.props.centerPlaceholder) {
        if (!e.target.value) {
          (0, _centerPlaceholderAnimation.pushCenter)(e.target, _reactDom2.default.findDOMNode(_this.refs.label));
        }
      }

      _this.setState({ isFocused: false });
    };

    _this.handleFocus = function (e) {
      if (_this.props.centerPlaceholder) {
        if (!e.target.value) {
          (0, _centerPlaceholderAnimation.pullLeft)(e.target, _reactDom2.default.findDOMNode(_this.refs.label));
        }
      }
      setTimeout(function () {
        return _this.setState({ isFocused: true });
      });
    };

    _this.state = {
      isFocused: false,
      showPlaceholder: true,
      iconPadding: null
    };
    return _this;
  }

  _createClass(TextFieldOSX, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var el = _reactDom2.default.findDOMNode(this).getElementsByTagName('INPUT')[0];
      el.addEventListener('blur', this.handleBlur);
      el.addEventListener('focus', this.handleFocus);
      el.addEventListener('keypress', this.handleKeypress);
      el.addEventListener('keydown', this.handleKeydown);
      el.addEventListener('keyup', this.handleChange);
      el.addEventListener('change', this.handleChange);

      if (this.props.icon) {
        setTimeout(function () {
          return _this2.setState({
            iconPadding: _reactDom2.default.findDOMNode(_this2.refs.icon).getBoundingClientRect().width
          });
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var el = _reactDom2.default.findDOMNode(this).getElementsByTagName('INPUT')[0];
      el.removeEventListener('blur', this.handleBlur);
      el.removeEventListener('focus', this.handleFocus);
      el.removeEventListener('keypress', this.handleKeypress);
      el.removeEventListener('keydown', this.handleKeydown);
      el.removeEventListener('keyup', this.handleChange);
      el.removeEventListener('change', this.handleChange);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var label = _props.label;
      var size = _props.size;
      var rounded = _props.rounded;
      var focusRing = _props.focusRing;
      var placeholder = _props.placeholder;
      var centerPlaceholder = _props.centerPlaceholder;
      var icon = _props.icon;

      var props = _objectWithoutProperties(_props, ['style', 'label', 'size', 'rounded', 'focusRing', 'placeholder', 'centerPlaceholder', 'icon']);

      delete props.onEnter;

      var _mapStyles = (0, _mapStyles4.default)(style, TextFieldOSX.mapStyles);

      var _mapStyles2 = _slicedToArray(_mapStyles, 2);

      var inputStyle = _mapStyles2[0];
      var containerStyle = _mapStyles2[1];

      var componentStyle = _extends({}, _2.default.textField);

      if (rounded) rounded = rounded === true ? '4px' : (0, _styleHelper.parseDimension)(rounded);

      var focusElement = void 0;
      if (this.state.isFocused && focusRing) {
        componentStyle = _extends({}, componentStyle, rounded ? _2.default.textFieldRoundedFocus : _2.default.textFieldFocus);

        var focusElementStyle = _extends({}, _2.default.focusElement, {
          animation: 'x .25s linear forwards',
          animationName: (0, _focusRingAnimation2.default)(rounded)
        });
        focusElement = _react2.default.createElement('div', { style: focusElementStyle });
      }

      var labelComponent = label ? _react2.default.createElement(_label2.default, { margin: '0 0 3px 0' }, label) : null;

      props = (0, _fontSize.removeFontSizeProps)((0, _dimension.removeDimensionProps)((0, _margin.removeMarginProps)((0, _hidden.removeHiddenProps)(props))));

      if (rounded) {
        componentStyle.borderRadius = (0, _styleHelper.parseDimension)(rounded);
      }

      if (size && parseInt(size) !== 13) {
        var ratio = size / 13;
        componentStyle.lineHeight = (0, _styleHelper.parseDimension)(size * 1.4);
        componentStyle.paddingLeft = (0, _styleHelper.parseDimension)(3.5 * ratio);
        componentStyle.paddingRight = (0, _styleHelper.parseDimension)(3.5 * ratio);
      }

      var input = (0, _fontSize2.default)(_react2.default.createElement('input', _extends({
        key: 'element',
        ref: 'element',
        type: 'text',
        style: componentStyle
      }, props)), this.props);

      if (this.state.iconPadding) {
        inputStyle.paddingLeft = (0, _styleHelper.parseDimension)(this.state.iconPadding + 12);
      }

      if (this.context.titlebarChild) {
        inputStyle = _extends({}, inputStyle, _2.default.titleBarTextField);
        if (this.state.isFocused && focusRing) {
          inputStyle = _extends({}, inputStyle, _2.default.titleBarTextFieldFocus);
        }
      }

      input = (0, _react.cloneElement)(input, _extends({}, input.props, { style: _extends({}, input.props.style, inputStyle) }));
      var placeholderElement = void 0;

      if (centerPlaceholder) {
        placeholderElement = _react2.default.createElement('div', { style: _2.default.label }, _react2.default.createElement('div', { ref: 'label', style: _2.default.labelContent }, _react2.default.createElement('div', { ref: 'icon', style: _2.default.icon }, icon), this.state.showPlaceholder ? _react2.default.createElement(_text2.default, { color: '#c0c0c0', size: '12' }, placeholder) : null));
      } else if (placeholder) {
        input = _react2.default.createElement(_placeholderStyle2.default, { placeholderStyle: _2.default.textField[':placeholder'] }, (0, _react.cloneElement)(input, _extends({}, input.props, { style: _extends({}, input.props.style, inputStyle) })));
      }

      return (0, _margin2.default)(_react2.default.createElement('div', { style: _extends({}, _2.default.container, this.state.isFocused ? _2.default.containerFocus : {}, containerStyle) }, labelComponent, _react2.default.createElement('div', { style: _2.default.wrapper }, _react2.default.createElement(_radium.StyleRoot, null, focusElement), placeholderElement, input)), this.props);
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

  return TextFieldOSX;
}(_react.Component), _class2.propTypes = _extends({}, _hidden.hiddenPropTypes, _margin.marginPropTypes, _dimension.dimensionPropTypes, _fontSize.fontSizePropTypes, {
  label: _react.PropTypes.string,
  rounded: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.string]),
  focusRing: _react.PropTypes.bool,
  onEnter: _react.PropTypes.func,
  centerPlaceholder: _react.PropTypes.bool,
  icon: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.array]),
  placeholder: _react.PropTypes.string
}), _class2.defaultProps = {
  focusRing: true
}, _class2.mapStyles = {
  container: ['margin', 'width', 'height', 'display']
}, _class2.contextTypes = {
  titlebarChild: _react.PropTypes.bool
}, _temp)) || _class) || _class) || _class);
exports.default = TextFieldOSX;