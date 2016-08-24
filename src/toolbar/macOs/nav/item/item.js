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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('../../../../text/macOs/text');

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

var styles = {
  container: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    WebkitAppRegion: 'no-drag',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1px',
    marginLeft: '5px',
    marginRight: '5px',
    width: '64px'
  },
  iconContainer: {
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: '1px'
  }
};

var Item = (_temp = _class = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var title = _props.title;
      var icon = _props.icon;
      var style = _props.style;
      var selected = _props.selected;

      var props = _objectWithoutProperties(_props, ['title', 'icon', 'style', 'selected']);

      return _react2.default.createElement('div', { className: '_reactDesktop-Toolbar-Nav-Item-SVG' + (selected ? ' _selected' : '') }, _react2.default.createElement('a', _extends({
        style: _extends({}, styles.container, style)
      }, props), _react2.default.createElement('div', { style: styles.iconContainer }, icon), _react2.default.createElement(_text2.default, { size: '11', color: '#1e1c1e' }, title)));
    }
  }]);

  return Item;
}(_react.Component), _class.propTypes = {
  titel: _react.PropTypes.string,
  icon: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.array]),
  selected: _react.PropTypes.bool,
  onClick: _react.PropTypes.func
}, _temp);
exports.default = Item;