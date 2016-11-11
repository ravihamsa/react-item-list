/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component} from "react";
import ListItem from './ListItem';
import _ from 'lodash';

export default class List extends Component {
    renderNoItems() {
        var noItemMessage = this.props.noDataMessage || 'No Items Found';
        return <li className="no-data">{noItemMessage}</li>
    }

    renderItems(items) {
        return items;
    }

    renderChildren(items) {
        var tagProps = this.getTagProps();
        tagProps.className = tagProps.className || 'list';
        if (items.length === 0) {
            tagProps.className += ' zero-length';
        }
        var ContainerTag = this.props.tagName || 'ul';

        return <ContainerTag {...tagProps}>
            {items.length > 0 ? this.renderItems(items) : this.renderNoItems()}
        </ContainerTag>
    }

    getTagProps() {
        return _.pick(this.props, 'className', 'style')
    }

    render() {
        var self = this;
        var itemArray = self.props.items;


        var ListItemClass = self.props.ListItem || ListItem;

        var otherProps = _.omit(this.props, 'className', 'style', 'tagName', 'noDataMessage', 'ListItem', 'itemClassName', 'itemTagName');
        otherProps.tagName = this.props.itemTagName || 'li';
        otherProps.className = this.props.itemClassName || 'list-item';

        var listItems = itemArray.map(function (item, index) {
            return <ListItemClass key={item.id} ref={item.id} itemIndex={index} itemData={item} {...otherProps}/>
        });

        return this.renderChildren(listItems);

    }
}
