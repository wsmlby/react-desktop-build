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

var _dec, _dec2, _dec3, _dec4, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _item = require('./item/item');

var _item2 = _interopRequireDefault(_item);

var _tabs = require('./tabs/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _ = require('./style/10.11');

var _2 = _interopRequireDefault(_);

var _box = require('../../box/macOs/box');

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
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

var warnOnce = false;
function applyItem() {
  return function (ComposedComponent) {
    var nextItem = _item2.default;
    ComposedComponent.prototype.Item = ComposedComponent.Item = function () {
      if (!warnOnce) {
        warnOnce = true;
        console.warn('React Desktop: Using SegmentedControl.Item is deprecated, import SegmentedControlItem instead.');
      }

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(nextItem, [null].concat(args)))();
    };
    return ComposedComponent;
  };
}

var SegmentedControl = (_dec = applyItem(), _dec2 = (0, _dimension2.default)(), _dec3 = (0, _margin2.default)(), _dec4 = (0, _hidden2.default)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_temp = _class2 = function (_Component) {
  _inherits(SegmentedControl, _Component);

  function SegmentedControl() {
    _classCallCheck(this, SegmentedControl);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SegmentedControl).apply(this, arguments));
  }

  _createClass(SegmentedControl, [{
    key: 'select',
    value: function select(item) {
      this.refs.tabs.select(item);
    }
  }, {
    key: 'unselect',
    value: function unselect(item) {
      this.refs.tabs.unselect(item);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var box = _props.box;

      var props = _objectWithoutProperties(_props, ['children', 'box']);

      var content = void 0;
      if (box) {
        content = _react2.default.createElement(_box2.default, { style: { marginTop: '-11px', zIndex: 0 } }, this.renderItem());
      } else {
        content = _react2.default.createElement('div', null, this.renderItem());
      }

      return _react2.default.createElement('div', _extends({
        style: _2.default.sergmentedControl
      }, props), _react2.default.createElement(_tabs2.default, { style: { position: 'relative', zIndex: 1 } }, children), content);
    }
  }, {
    key: 'renderItem',
    value: function renderItem() {
      var child = null;
      var children = void 0;
      // todo: use Children.map
      if (!this.props.children) {
        return null;
      } else if (Object.prototype.toString.call(this.props.children) !== '[object Array]') {
        children = [this.props.children];
      } else {
        children = [].concat(_toConsumableArray(this.props.children));
      }
      for (var i = 0, len = children.length; i < len; ++i) {
        if (children[i].props.selected) child = children[i];
      }
      return child;
    }
  }]);

  return SegmentedControl;
}(_react.Component), _class2.propTypes = _extends({}, _dimension.dimensionPropTypes, _margin.marginPropTypes, _hidden.hiddenPropTypes, {
  box: _react.PropTypes.bool
}), _temp)) || _class) || _class) || _class) || _class);
exports.default = SegmentedControl;