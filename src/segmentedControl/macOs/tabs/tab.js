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

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../style/10.11');

var _2 = _interopRequireDefault(_);

var _windowFocus = require('../../../windowFocus');

var _windowFocus2 = _interopRequireDefault(_windowFocus);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

var Tab = (_dec = (0, _windowFocus2.default)(), _dec(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var style = _props.style;
      var onSelect = _props.onSelect;
      var afterSelected = _props.afterSelected;
      var prevSelected = _props.prevSelected;
      var lastChild = _props.lastChild;
      var firstChild = _props.firstChild;
      var isWindowFocused = _props.isWindowFocused;

      var componentStyle = _extends({}, _2.default.tab, style);

      if (firstChild) componentStyle = _extends({}, componentStyle, _2.default.firstChild);
      if (lastChild) componentStyle = _extends({}, componentStyle, _2.default.lastChild);

      if (prevSelected) componentStyle = _extends({}, componentStyle, _2.default.prevSelected);
      if (afterSelected) componentStyle = _extends({}, componentStyle, _2.default.afterSelected);

      if (this.props.selected) {
        componentStyle = _extends({}, componentStyle, _2.default.selected);
        if (!isWindowFocused) componentStyle = _extends({}, componentStyle, _2.default.selectedUnfocused);
        if (firstChild) componentStyle = _extends({}, componentStyle, _2.default.firstChildSelected);
        if (lastChild) componentStyle = _extends({}, componentStyle, _2.default.lastChildSelected);
      }

      return _react2.default.createElement('div', {
        onClick: onSelect,
        style: componentStyle
      }, children);
    }
  }]);

  return Tab;
}(_react.Component), _class2.propTypes = {
  selected: _react.PropTypes.bool,
  prevSelected: _react.PropTypes.bool,
  afterSelected: _react.PropTypes.bool,
  firstChild: _react.PropTypes.bool,
  lastChild: _react.PropTypes.bool,
  onSelect: _react.PropTypes.func
}, _temp)) || _class) || _class);
exports.default = Tab;