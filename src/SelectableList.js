/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import List from './List';
import _ from 'lodash';


export default class SelectableList extends List {
    componentDidMount() {
        let selectionManager = this.props.selectionManager;
        let self = this;
        if (selectionManager) {
            this.unsubscribeSelection = selectionManager.on('change', function (selection, prevSelection) {
                let fullList = _.flatten([selection, prevSelection]);
                _.each(fullList, function (item) {
                    if (item) {
                        self.refs[item.id].updateSelectionState();
                    }
                })
            })
        }
    }

    componentWillUnmount() {
        if (this.unsubscribeSelection) {
            this.unsubscribeSelection();
        }
    }
}
