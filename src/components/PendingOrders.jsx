import React       from 'react';
import { connect } from 'react-redux';
import classNames  from 'classnames'
import moment from 'moment'

import { openModal, clearOrder } from '../actions'

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancelOrder(order) {
      dispatch(openModal('cancel', order));
    },
    clearOrder: (id) => dispatch(clearOrder(id))
  };
};

class PendingOrders extends React.Component {
  propTypes = {
    orders       : React.PropTypes.orders,
    onCancelOrder: React.PropTypes.func
  };

  startTimer = (order) => {
    if (order.status === 'ready') {

      setTimeout(() => {
        this.props.clearOrder(order.id)
      }, 250);

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
    const ordersPending = this.props.orders.filter(order => order.status === "pending");
    ordersPending.sort((a, b) => {
      if (moment(a.createdAt).isAfter(b.createdAt)) return 1
      if (moment(a.createdAt).isBefore(b.createdAt)) return -1
      return 0
    })

    const ordersInPrep = this.props.orders.filter(order => order.status === "prepare");
    ordersInPrep.sort((a, b) => {
      if (moment(a.createdAt).isAfter(b.createdAt)) return 1
      if (moment(a.createdAt).isBefore(b.createdAt)) return -1
      return 0
    })

    const ordersReady = this.props.orders.filter(order => order.status === "ready");
    ordersReady.sort((a, b) => {
      if (moment(a.createdAt).isAfter(b.createdAt)) return 1
      if (moment(a.createdAt).isBefore(b.createdAt)) return -1
      return 0
    })

    const orders = [...ordersReady, ...ordersInPrep, ...ordersPending];
    console.log(orders)
    return (
      <div className="b-sell__page__orders">
          {orders.map(order => {
              const orderClasses = classNames(
                'b-sell__page__orders__order',
                `b-sell__page__orders__order--${order.status}`
              );

              const orderName = order.items.length > 0 ? order.items.filter(i => i).map(i => i.name).join(', ') : order.name;

              return (
                <div
                  className={orderClasses}
                  onTouchStart={() => this.startTimer(order)}
                  onMousedown={() => this.startTimer(order)}
                  onTouchEnd={() => this.stopTimer()}
                  onMouseUp={() => this.stopTimer()}>
                  #{order.code} {order.buyerName !== order.code ? `${order.buyerFirstName} (${order.buyerName})` : null} {orderName}
                </div>
              );
            })
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingOrders);
