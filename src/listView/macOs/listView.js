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

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ = require('./style/10.11');

var _2 = _interopRequireDefault(_);

var _macOs = require('../../style/background/macOs');

var _macOs2 = _interopRequireDefault(_macOs);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _padding = require('../../style/padding');

var _padding2 = _interopRequireDefault(_padding);

var _header = require('./header/header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./footer/footer');

var _footer2 = _interopRequireDefault(_footer);

var _row = require('./row/row');

var _row2 = _interopRequireDefault(_row);

var _rubberBandEffect = require('rubber-band-effect');

var _rubberBandEffect2 = _interopRequireDefault(_rubberBandEffect);

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

var ListView = (_dec = (0, _macOs2.default)(), _dec2 = (0, _dimension2.default)(), _dec3 = (0, _hidden2.default)(), _dec4 = (0, _margin2.default)(), _dec5 = (0, _padding2.default)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_temp = _class2 = function (_Component) {
  _inherits(ListView, _Component);

  function ListView() {
    _classCallCheck(this, ListView);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListView).apply(this, arguments));
  }

  _createClass(ListView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.disableRubberBand) {
        (0, _rubberBandEffect2.default)(_reactDom2.default.findDOMNode(this.refs.scrollable));
      }
    }
  }, {
    key: 'mapChildren',
    value: function mapChildren(children) {
      var hasDirectRows = false;
      var header = null,
          items = null,
          footer = null;
      _react.Children.map(children, function (child) {
        if (child.type === _header2.default) return header = child;else if (child.type === _footer2.default) return footer = child;else if (child.type === _row2.default) hasDirectRows = true;

        if (!items) items = [];
        items.push(child);
      });

      if (hasDirectRows) {
        items = _react2.default.createElement('ul', { style: _2.default.list }, items);
      }

      return { header: header, items: items, footer: footer };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var style = _props.style;

      var props = _objectWithoutProperties(_props, ['children', 'style']);

      delete props.disableRubberBand;

      var _mapChildren = this.mapChildren(children);

      var header = _mapChildren.header;
      var items = _mapChildren.items;
      var footer = _mapChildren.footer;

      return _react2.default.createElement('section', _extends({ style: _extends({}, _2.default.container, style) }, props), header, _react2.default.createElement('div', { ref: 'scrollable', style: _extends({}, _2.default.scrollable) }, items), footer);
    }
  }]);

  return ListView;
}(_react.Component), _class2.propTypes = _extends({}, _macOs.backgroundPropTypes, _dimension.dimensionPropTypes, _hidden.hiddenPropTypes, _margin.marginPropTypes, _padding.paddingPropTypes, {
  disableRubberBand: _react.PropTypes.bool
}), _class2.defaultProps = {
  disableRubberBand: false
}, _temp)) || _class) || _class) || _class) || _class) || _class);
exports.default = ListView;