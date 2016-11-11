'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ravi.hamsa on 10/8/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var LayoutList = function (_Component) {
    _inherits(LayoutList, _Component);

    function LayoutList() {
        _classCallCheck(this, LayoutList);

        return _possibleConstructorReturn(this, (LayoutList.__proto__ || Object.getPrototypeOf(LayoutList)).apply(this, arguments));
    }

    _createClass(LayoutList, [{
        key: 'render',
        value: function render() {
            var columns = this.props.columns;
            var colClassName = 'col-md-' + Math.round(12 / columns);
            var itemClassName = this.props.itemClassName || 'list-item';
            var rowClassName = this.props.rowClassName || '';
            var items = this.props.items;
            var otherProps = _lodash2.default.omit(this.props, 'className', 'style', 'tagName', 'noDataMessage', 'ListItem', 'itemClassName', 'itemTagName');
            var ListItemClass = this.props.ListItem || _ListItem2.default;
            var children = [];
            for (var i = 0; i < items.length; i += columns) {
                var colChildren = [];
                for (var j = 0; j < columns; j++) {
                    var item = items[i + j];
                    if (item) {
                        colChildren.push(_react2.default.createElement(ListItemClass, _extends({ key: item.id, ref: item.id, itemData: item, itemIndex: i + j,
                            className: colClassName + ' ' + itemClassName,
                            tagName: 'div' }, otherProps)));
                    }
                }

                children.push(_react2.default.createElement(
                    'div',
                    { className: 'row ' + rowClassName, key: i },
                    colChildren
                ));
            }

            return _react2.default.createElement(
                'div',
                { className: this.props.className },
                children
            );
        }
    }]);

    return LayoutList;
}(_react.Component);

exports.default = LayoutList;