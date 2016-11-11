# Simple List 


```js

import React, {Component, PropTypes} from "react";
import {List} from 'react-item-list';


let arrayOfItems = [{id: '1', name: 'one'}, {id: '2', name: 'two'}];

class MyComponent extends Component {
    render() {
        return <div>
            <List items={arrayOfItems} />
        </div>
    }
}


```


# Custom Item Component


```js

import React, {Component, PropTypes} from "react";
import {List} from 'react-item-list';


let arrayOfItems = [{id: '1', name: 'one'}, {id: '2', name: 'two'}];


class MyItem extends  Component {
    render(){
        let itemData = this.props.itemData;
        return <li>This Item has id {itemData.id} and name {itemData.name} </li>
    }
}

class MyComponent extends Component {
    render() {
        return <div>
            <List items={arrayOfItems} ListItem={MyItem} />
        </div>
    }
}


```