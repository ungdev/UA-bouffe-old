import React       from 'react';
import { connect } from 'react-redux';
import classNames  from 'classnames';

import { removeItem, openModal } from '../actions';

const mapStateToProps = state => {
  return {
    basket: state
      .basket
      .map(item => {
        item.effectivePrice = state.lowerPrice ? item.lowerPrice : item.price;
        return item;
      })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveItemClick(index) {
      dispatch(removeItem(index));
    },

    onSendBasket() {
      dispatch(openModal('valid'));
    }
  };
};

class Sell extends React.Component {
  propTypes = {
    basket           : React.PropTypes.array,
    onRemoveItemClick: React.PropTypes.func,
  };

  getTotalPrice() {
    return this.props.basket
      .map(item => item.effectivePrice / 100)
      .reduce((a, b) => a + b, 0)
      .toFixed(1);
  }

  render() {
    return (
      <div className="b-sell__page__sidebar">
        <div className="b-sell__page__overflow">
          {this.props.basket.map((item, i) => {
            const name = item.items ?
              item.items.map(i => i.name).join(', ') :
              item.name;

            const itemClasses = classNames(
              'b-sell__page__sidebar__item',
              { 'b-sell__page__sidebar__item--promotion': item.items }
            );

            return (
              <div className={itemClasses}>
                <span>
                  {name} - {(item.effectivePrice / 100).toFixed(1)}€
                </span>
                <span onClick={() => this.props.onRemoveItemClick(i)}>
                  &times;
                </span>
              </div>
            );
          })}
        </div>
        <div className="b-sell__page__sidebar__valid" onClick={() => this.props.onSendBasket()}>
          <span>
            {this.getTotalPrice()}€
          </span>
          &nbsp;
          <span>&#10004;</span>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sell);
