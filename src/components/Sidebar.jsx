import React       from 'react';
import { connect } from 'react-redux';

import { removeItem } from '../actions';

const mapStateToProps = state => {
  return {
    basket: state.basket
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveItemClick(index) {
      dispatch(removeItem(index));
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
      .map(item => item.price / 100)
      .reduce((a, b) => a + b, 0)
      .toFixed(1);
  }

  render() {
    return (
      <div className="b-sell__page__sidebar">
        {this.props.basket.map((item, i) => {
          return (
            <div className="b-sell__page__sidebar__item">
              <span>{item.name}</span>
              <span onClick={() => this.props.onRemoveItemClick(i)}>
                &times;
              </span>
            </div>
          );
        })}
        <div className="b-sell__page__sidebar__valid">
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
