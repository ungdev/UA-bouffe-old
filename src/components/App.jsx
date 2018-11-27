import React       from 'react';
import { connect } from 'react-redux'
import io from 'socket.io-client'

import { listenForOrders } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    listenForOrders(socket) {
      dispatch(listenForOrders(socket))
    }
  };
};

class App extends React.Component {

  componentDidMount() {
    this.socket = io.connect('localhost:3001')
    this.socket.on('connect', () => {
      console.log('Client has connected to the server!')
      this.props.listenForOrders(this.socket)
    })
  }

  render() {
    this.props.children.props.socket = this.socket
    return this.props.children
  }
}

export default connect(null, mapDispatchToProps)(App);

