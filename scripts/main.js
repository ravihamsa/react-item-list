/**
 * Created by ravi.hamsa on 11/11/16.
 */
import React, {Component, PropTypes} from "react";
import {List} from '../src/';


let listItem = React.createElement(List, {items: [{id: '1', name: 'one'}, {id: '2', name: 'two'}]})

ReactDOM.render(listItem, document.getElementById('list'));