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
  constructor(props) {
    super(props);
    this.state={disabled : false};
  }

  propTypes = {
    orders       : React.PropTypes.orders,
    onCancelOrder: React.PropTypes.func
  };

  startTimer = (order) => {
    if ((order.status === 'ready') && (!this.state.disabled)) {
      console.log('CLEAR');

      setTimeout(() => {
        this.props.clearOrder(order.id);
        setTimeout(() => {
          this.setState({disabled : false});
        }, 100);
      }, 100);

      return;
    } else {
      console.log('START');
  
      this.timeout = setTimeout(() => {
        console.log('GO');
        this.props.onCancelOrder(order);
        this.setState({disabled : false});
      }, 750);
    }
  }

//  stopTimer() {
//    console.log('CLEAR');
//    clearTimeout(this.timeout);
//  }

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
              let code = order.code
              if (code.startsWith('W')) code = 'Invité' + code.substr(1, code.length)
              if (code.startsWith('X')) code = 'Visiteur' + code.substr(1, code.length)
              if (code.startsWith('Y')) code = 'Casteur' + code.substr(1, code.length)
              if (code.startsWith('Z')) code = 'Orga' + code.substr(1, code.length)
              return (
                <button
                  className={orderClasses}
                  disabled={this.state.disabled}
                  onTouchDown={() => {
                    this.setState({disabled : true});
                    this.startTimer(order);}
                  }
                  onMouseDown={() => {
                    this.setState({disabled : true});
                    this.startTimer(order);}
                  }>
                  #{code} {order.buyerName !== order.code ? `${order.buyerFirstName} (${order.buyerName})` : null} {orderName}
                </button>
              );
            })
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingOrders);
