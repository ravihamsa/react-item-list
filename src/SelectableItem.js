/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import ListItem from './ListItem';


export default class SelectableItem extends ListItem {
    constructor() {
        super(...arguments);
        let {itemData, selectionManager} = this.props;
        this.state = {
            selected: selectionManager.isSelected(itemData)
        }

    }

    updateSelectionState() {
        let {itemData, selectionManager} = this.props;
        this.setState({
            selected: selectionManager.isSelected(itemData)
        })
    }

    selectItem(event) {
        event.preventDefault();
        let {itemData, selectionManager} = this.props;
        if (selectionManager._multiSelect) {
            selectionManager.toggle(itemData);
        } else {
            selectionManager.select(itemData);
        }
    }

    renderContent() {
        var itemData = this.props.itemData;
        var ContainerTag = this.props.tagName
        var tagProps = this.getTagProps();
        return (<ContainerTag {...tagProps} >
            <a href="#select" onClick={this.selectItem.bind(this)}>{itemData.name}</a>
        </ContainerTag>);
    }

    getTagProps() {
        return {
            className: this.state.selected ? 'active list-item' : 'list-item'
        }
    }
}
