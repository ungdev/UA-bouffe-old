import React from 'react';

import * as items from '../items';

import Item    from './Item';
import Sidebar from './Sidebar';

export default class Sell extends React.Component {
  getItems() {
    return Object.keys(items).map(item => items[item]);
  }

  render() {
    return (
      <div className="b-sell">
        <div className="b-sell__title">
          <span>UA Bouffe 2016</span>
        </div>
        <div className="b-sell__page">
          <div className="b-sell__page__items">
            {this.getItems().map(item => {
              return (
                <Item {...item}></Item>
              );
            })}
          </div>
          <Sidebar></Sidebar>
        </div>
      </div>
    );
  }
}
