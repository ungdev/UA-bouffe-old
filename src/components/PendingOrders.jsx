import React       from 'react';
import { connect } from 'react-redux';
import classNames  from 'classnames';

import { openModal } from '../actions';

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancelOrder(order) {
      dispatch(openModal('cancel', order));
    }
  };
};

class PendingOrders extends React.Component {
  propTypes = {
    orders       : React.PropTypes.orders,
    onCancelOrder: React.PropTypes.func
  };

  startTimer(order) {
    // Cancel also to avoid double event click/touch
    this.stopTimer();
    console.log('START');

    this.timeout = setTimeout(() => {
      console.log('GO');
      this.props.onCancelOrder(order);
    }, 750);
  }

  stopTimer() {
    console.log('CLEAR');
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div className="b-sell__page__orders">
        {this.props.orders.map(order => {

          const orderClasses = classNames(
            'b-sell__page__orders__order',
            `b-sell__page__orders__order--${order.status}`
          );

          return (
            <div
              className={orderClasses}
              onMouseDown={() => this.startTimer(order)}
              onTouchStart={() => this.startTimer(order)}
              onMouseUp={() => this.stopTimer()}
              onTouchEnd={() => this.stopTimer()}>
              {order.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingOrders);
