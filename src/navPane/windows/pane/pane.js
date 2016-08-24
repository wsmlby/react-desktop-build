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

var _item = require('./item/item');

var _item2 = _interopRequireDefault(_item);

var _button = require('./button/button');

var _button2 = _interopRequireDefault(_button);

var _windows = require('./style/windows10');

var _windows2 = _interopRequireDefault(_windows);

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

var Pane = (_temp = _class = function (_Component) {
  _inherits(Pane, _Component);

  function Pane(props) {
    var _Object$getPrototypeO;

    _classCallCheck(this, Pane);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Pane)).call.apply(_Object$getPrototypeO, [this, props].concat(args)));

    _this.toggleOpen = function () {
      if (_this.props.onPaneToggle) _this.props.onPaneToggle(!_this.state.isPaneExpanded);
      _this.setState({ isPaneExpanded: !_this.state.isPaneExpanded });
    };

    _this.state = {
      isPaneExpanded: props.defaultIsPaneExpanded
    };
    return _this;
  }

  _createClass(Pane, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var canPaneToggle = _props.canPaneToggle;
      var paneCompactedLength = _props.paneCompactedLength;
      var paneExpandedLength = _props.paneExpandedLength;

      var button = !canPaneToggle ? null : _react2.default.createElement(_button2.default, { style: _windows2.default.buttonStyle, onClick: this.toggleOpen });

      var componentStyle = _extends({}, _windows2.default.pane);

      if (canPaneToggle) {
        if (this.state.isPaneExpanded) componentStyle.width = paneExpandedLength;else componentStyle.width = paneCompactedLength;
      } else {
        componentStyle.width = paneExpandedLength;
      }

      return _react2.default.createElement('div', {
        style: componentStyle
      }, _react2.default.createElement('div', { style: _windows2.default.padding }), button, this.renderItems());
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this2 = this;

      return _react.Children.map(this.props.items, function (item, index) {
        return _react2.default.createElement(_item2.default, {
          key: index,
          isPaneExpanded: _this2.state.isPaneExpanded,
          title: item.props.title,
          icon: item.props.icon,
          push: item.props.push,
          onSelect: item.props.onSelect,
          selected: item.props.selected
        });
      });
    }
  }]);

  return Pane;
}(_react.Component), _class.Item = _item2.default, _class.propTypes = {
  items: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.array]),
  canPaneToggle: _react.PropTypes.bool,
  onPaneToggle: _react.PropTypes.func,
  defaultIsPaneExpanded: _react.PropTypes.bool,
  paneCompactedLength: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  paneExpandedLength: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
}, _class.defaultProps = {
  canPaneToggle: true,
  defaultIsPaneExpanded: true,
  paneCompactedLength: '48px',
  paneExpandedLength: '200px'
}, _temp);
exports.default = Pane;