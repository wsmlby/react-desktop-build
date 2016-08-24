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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./style/10.11');

var _2 = _interopRequireDefault(_);

var _text = require('../../../../text/macOs/text');

var _text2 = _interopRequireDefault(_text);

var _margin = require('../../../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _padding = require('../../../../style/padding');

var _padding2 = _interopRequireDefault(_padding);

var _fontSize = require('../../../../style/fontSize');

var _mapStyles3 = require('../../../../utils/mapStyles');

var _mapStyles4 = _interopRequireDefault(_mapStyles3);

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

var Header = (_temp = _class = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var color = _props.color;
      var bold = _props.bold;
      var size = _props.size;
      var children = _props.children;
      var style = _props.style;

      var props = _objectWithoutProperties(_props, ['color', 'bold', 'size', 'children', 'style']);

      props = (0, _padding.removePaddingProps)((0, _margin.removeMarginProps)(props));

      var _mapStyles = (0, _mapStyles4.default)(style, Header.mapStyles);

      var _mapStyles2 = _slicedToArray(_mapStyles, 2);

      var headerStyle = _mapStyles2[0];
      var textStyle = _mapStyles2[1];

      return _react2.default.createElement('header', _extends({}, props, { style: headerStyle }), (0, _padding2.default)((0, _margin2.default)(_react2.default.createElement('h2', { style: _2.default.title }, _react2.default.createElement(_text2.default, { color: color, size: size, bold: bold, style: textStyle }, children)), this.props), this.props));
    }
  }]);

  return Header;
}(_react.Component), _class.propTypes = _extends({}, _margin.marginPropTypes, _padding.paddingPropTypes, _fontSize.fontSizePropTypes, {
  color: _react.PropTypes.string,
  bold: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.string])
}), _class.defaultProps = {
  color: '#5a5b5c',
  bold: true,
  size: '10'
}, _class.mapStyles = {
  text: ['color', 'fontSize', 'fontWeight', 'lineHeight', 'fontFamily']
}, _temp);
exports.default = Header;