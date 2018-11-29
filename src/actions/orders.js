import moment from 'moment'
import axios from '../lib/axios'


export const nextOrderCode = () => {
  return {
    type: 'NEXT_ORDER_CODE'
  };
};

export const cleanPlayerCode = () => {
  return {
    type: 'CLEAN_PLAYER_CODE'
  };
};

export const setPlayerCode = (code) => {
  return {
    type: 'SET_PLAYER_CODE',
    payload: {code}
  };
};

export const orders = (allOrders) => {
  return {
    type   : 'ORDERS',
    payload: allOrders
  }
}

export const allorders = (allOrders) => {
  return {
    type   : 'ALLORDERS',
    payload: allOrders
  }
}

export const changeStatus = (orderId, status) => {
  return async () => {
    try {
      await axios.put(`orders/${orderId}`, { status })
    } catch (err) {
      console.log(err)
    }
  }
}

export const clearOrder = (id, force = false) => {
  return async () => {
    try {
      await axios.delete(`orders/${id}`, { force })
    } catch (err) {
      console.log(err)
    }
  }
}

export const listenForOrders = (socket) => {
  return (dispatch) => {
    return socket.on('orders', (data) => {
      const o = data.sort((a, b) => {
        if(moment(a.createdAt).isAfter(b.createdAt)) return -1
        if(moment(a.createdAt).isBefore(b.createdAt)) return 1
        if(a.id > b.id) return -1
        if(a.id < b.id) return 1
        return 0
      }).map(order => {
        const items = JSON.parse(order.items)
        return { ...order, items }
      })
      dispatch(orders(o))
      dispatch(allorders(o))
    })
  };
};
