/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component} from "react";


export default class ListItem extends Component {
    render() {
        return this.renderContent();
    }

    renderContent() {
        var itemData = this.props.itemData;
        var ContainerTag = this.props.tagName
        var tagProps = this.getTagProps();
        return (<ContainerTag {...tagProps}>{itemData.name}</ContainerTag>);
    }


    getTagProps() {
        return _.pick(this.props, 'className', 'style')
    }
}
