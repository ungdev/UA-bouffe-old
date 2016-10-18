import React       from 'react';
import { connect } from 'react-redux';
import classNames  from 'classnames';

import { changeOrderStatus } from '../actions';

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

class Prepare extends React.Component {
  propTypes = {
    orders: React.PropTypes.array
  };

  onChangeStatusClick(order, status) {
    const orders = window.hz('orders');

    orders.update({
        id: order.id,
        status
      });
  }

  render() {
    const orders = this.props.orders.sort((a, b) => a < b);

    return (
      <div className="b-prepare">
        <div className="b-prepare__title">
          <span>UA Bouffe 2016</span>
        </div>
        <div className="b-prepare__orders">
          {orders.map(order => {
            const pendingClasses = classNames(
              'b-prepare__orders__order__status',
              'b-prepare__orders__order__pending',
              { 'b-prepare__orders__order__status--active': order.status === 'pending' }
            );

            const prepareClasses = classNames(
              'b-prepare__orders__order__status',
              'b-prepare__orders__order__prepare',
              { 'b-prepare__orders__order__status--active': order.status === 'prepare' }
            );

            const readyClasses = classNames(
              'b-prepare__orders__order__status',
              'b-prepare__orders__order__ready',
              { 'b-prepare__orders__order__status--active': order.status === 'ready' }
            );

            const orderClasses = `b-prepare__orders__order b-prepare__orders__order--${order.status}`;

            return (
              <div className={orderClasses}>
                <div className="b-prepare__orders__order__name">{order.name}</div>
                <div
                  className={pendingClasses}
                  onClick={() => this.onChangeStatusClick(order, 'pending')}>
                  Attente
                </div>
                <div
                  className={prepareClasses}
                  onClick={() => this.onChangeStatusClick(order, 'prepare')}>
                  Prépartion
                </div>
                <div
                  className={readyClasses}
                  onClick={() => this.onChangeStatusClick(order, 'ready')}>
                  Prêt
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Prepare);
