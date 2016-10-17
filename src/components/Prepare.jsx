import React from 'react';
import { connect } from 'react-redux';

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
  render() {
    console.log(this.props.orders);
    return (
      <div className="b-prepare">
        <div className="b-prepare__title">
          <span>UA Bouffe 2016</span>
        </div>
        <div className="b-prepare__orders">
          {this.props.orders.map(order => {
            return (
              <div className="b-prepare__orders__order">{order.name}</div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Prepare);
