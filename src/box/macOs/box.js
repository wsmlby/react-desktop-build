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

var _ = require('./styles/10.11');

var _2 = _interopRequireDefault(_);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _padding = require('../../style/padding');

var _padding2 = _interopRequireDefault(_padding);

var _alignment = require('../../style/alignment');

var _alignment2 = _interopRequireDefault(_alignment);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _macOs = require('../../style/background/macOs');

var _color = require('../../color');

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

var Box = (_dec = (0, _dimension2.default)(), _dec2 = (0, _margin2.default)(), _dec3 = (0, _padding2.default)(), _dec4 = (0, _alignment2.default)(), _dec5 = (0, _hidden2.default)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_temp = _class2 = function (_Component) {
  _inherits(Box, _Component);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Box).apply(this, arguments));
  }

  _createClass(Box, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var style = _props.style;
      var background = _props.background;
      var label = _props.label;

      var props = _objectWithoutProperties(_props, ['children', 'style', 'background', 'label']);

      var hasSegmentedControls = false;

      var componentStyle = _extends({}, _2.default.box, style);
      if (hasSegmentedControls) {
        componentStyle = _extends({}, _2.default.segmentedControls);
      }

      if (background) {
        background = (0, _color.convertColor)(background);
        componentStyle = _extends({}, componentStyle, {
          backgroundColor: background,
          borderTopColor: (0, _color.darkenColor)(background, .3),
          borderLeftColor: (0, _color.darkenColor)(background, .24),
          borderRightColor: (0, _color.darkenColor)(background, .24),
          borderBottomColor: (0, _color.darkenColor)(background, .19)
        });
      }

      if (label) {
        return _react2.default.createElement('div', _extends({ style: _2.default.wrapper }, props), _react2.default.createElement(_text2.default, { margin: '0 0 1px 7px', size: 11 }, label), _react2.default.createElement('div', {
          ref: 'box',
          style: componentStyle
        }, children));
      }
      componentStyle = _extends({}, _2.default.wrapper, componentStyle);
      return _react2.default.createElement('div', _extends({
        ref: 'box',
        style: componentStyle
      }, props), children);
    }
  }]);

  return Box;
}(_react.Component), _class2.propTypes = _extends({}, _macOs.backgroundPropTypes, _dimension.dimensionPropTypes, _margin.marginPropTypes, _padding.paddingPropTypes, _alignment.alignmentPropTypes, _hidden.hiddenPropTypes, {
  label: _react.PropTypes.string
}), _class2.styleRefs = {
  padding: 'box',
  dimension: 'box'
}, _temp)) || _class) || _class) || _class) || _class) || _class);
exports.default = Box;