import React from 'react';

import * as items from '../items';

import Item    from './Item';
import Sidebar from './Sidebar';

const p2 = n => ((n < 10) ? `0${n}` : n).toString();

export default class Sell extends React.Component {
  getItems() {
    return Object.keys(items).map(item => items[item]);
  }

  getDate() {
    const d = new Date();
    return `${p2(d.getHours())}:${p2(d.getMinutes())}:${p2(d.getSeconds())}`;
  }

  componentDidMount() {
    this.timeUpdate();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  timeUpdate() {
    this.timeout = setTimeout(() => {
      this.forceUpdate();
      this.timeUpdate();
    }, 1000);
  }

  render() {
    return (
      <div className="b-sell">
        <div className="b-sell__title">
          <span>UA 2016 - {this.getDate()}</span>
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
