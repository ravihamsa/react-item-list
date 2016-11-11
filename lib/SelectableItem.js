"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ListItem2 = require("./ListItem");

var _ListItem3 = _interopRequireDefault(_ListItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ravi.hamsa on 10/8/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SelectableItem = function (_ListItem) {
    _inherits(SelectableItem, _ListItem);

    function SelectableItem() {
        _classCallCheck(this, SelectableItem);

        var _this = _possibleConstructorReturn(this, (SelectableItem.__proto__ || Object.getPrototypeOf(SelectableItem)).apply(this, arguments));

        var _this$props = _this.props,
            itemData = _this$props.itemData,
            selectionManager = _this$props.selectionManager;

        _this.state = {
            selected: selectionManager.isSelected(itemData)
        };

        return _this;
    }

    _createClass(SelectableItem, [{
        key: "updateSelectionState",
        value: function updateSelectionState() {
            var _props = this.props,
                itemData = _props.itemData,
                selectionManager = _props.selectionManager;

            this.setState({
                selected: selectionManager.isSelected(itemData)
            });
        }
    }, {
        key: "selectItem",
        value: function selectItem(event) {
            event.preventDefault();
            var _props2 = this.props,
                itemData = _props2.itemData,
                selectionManager = _props2.selectionManager;

            if (selectionManager._multiSelect) {
                selectionManager.toggle(itemData);
            } else {
                selectionManager.select(itemData);
            }
        }
    }, {
        key: "renderContent",
        value: function renderContent() {
            var itemData = this.props.itemData;
            var ContainerTag = this.props.tagName;
            var tagProps = this.getTagProps();
            return _react2.default.createElement(
                ContainerTag,
                tagProps,
                _react2.default.createElement(
                    "a",
                    { href: "#select", onClick: this.selectItem.bind(this) },
                    itemData.name
                )
            );
        }
    }, {
        key: "getTagProps",
        value: function getTagProps() {
            return {
                className: this.state.selected ? 'active list-item' : 'list-item'
            };
        }
    }]);

    return SelectableItem;
}(_ListItem3.default);

exports.default = SelectableItem;