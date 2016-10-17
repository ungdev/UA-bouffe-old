import React       from 'react';
import { connect } from 'react-redux';

import { listenForOrders } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    setupOrders() {
      dispatch(listenForOrders());
    }
  };
};

class App extends React.Component {
  componentDidMount() {
    this.props.setupOrders();
  }

  render() {
    return this.props.children;
  }
}

export default connect(null, mapDispatchToProps)(App);

