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
    if (order.status === 'ready') {
      const orders = window.hz('orders');

      orders.update({
        id     : order.id,
        removed: true
      });

      return;
    }

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

          const orderName = order.items ? order.items.filter(i => i).map(i => i.name).join(', ') : order.name;

          return (
            <div
              className={orderClasses}
              onTouchStart={() => this.startTimer(order)}
              onMousedown={() => this.startTimer(order)}
              onTouchEnd={() => this.stopTimer()}
              onMouseUp={() => this.stopTimer()}>
              #{order.code} {orderName}
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingOrders);
