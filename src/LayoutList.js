/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import ListItem from './ListItem'
import _ from 'lodash';

export default class LayoutList extends Component {
    render() {
        var columns = this.props.columns;
        var colClassName = 'col-md-' + Math.round(12 / columns);
        var itemClassName = this.props.itemClassName || 'list-item';
        var rowClassName = this.props.rowClassName || ''
        var items = this.props.items;
        var otherProps = _.omit(this.props, 'className', 'style', 'tagName', 'noDataMessage', 'ListItem', 'itemClassName', 'itemTagName');
        var ListItemClass = this.props.ListItem || ListItem;
        var children = [];
        for (var i = 0; i < items.length; i += columns) {
            var colChildren = [];
            for (var j = 0; j < columns; j++) {
                var item = items[i + j];
                if (item) {
                    colChildren.push(<ListItemClass key={item.id} ref={item.id} itemData={item} itemIndex={i + j}
                                                    className={colClassName + ' ' + itemClassName}
                                                    tagName="div"  {...otherProps} />)
                }
            }

            children.push(<div className={'row ' + rowClassName} key={i}>
                {colChildren}
            </div>)
        }

        return <div className={this.props.className}>{children}</div>;

    }
}
