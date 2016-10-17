import React       from 'react';
import { connect } from 'react-redux';
import classNames  from 'classnames';

import { lowerPrice } from '../actions';

import * as items from '../items';

import Item       from './Item';
import Sidebar    from './Sidebar';
import ValidModal from './ValidModal';
import PromoModal from './PromoModal';

const p2 = n => ((n < 10) ? `0${n}` : n).toString();

const mapStateToProps = state => {
  return {
    lowerPrice: state.lowerPrice
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSwitch() {
      dispatch(lowerPrice());
    }
  };
};

class Sell extends React.Component {
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
    const toggleClasses = classNames(
      'b-sell__title__priceType',
      {
        'b-sell__title__priceType--switched': this.props.lowerPrice
      }
    );

    const toggleText = (this.props.lowerPrice) ? 'Prix orga' : 'Prix normal';

    return (
      <div className="b-sell">
        <PromoModal></PromoModal>
        <ValidModal></ValidModal>
        <div className="b-sell__title">
          <span>UA 2016 - {this.getDate()}</span>
          <div className={toggleClasses} onClick={() => this.props.onSwitch()}>
            {toggleText}
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sell);
