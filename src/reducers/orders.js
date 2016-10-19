const orders = (state = [], action) => {
  switch(action.type) {
    case 'ORDERS':
      return action.payload.filter(order => !order.removed);
  }

  return state;
};

export default orders;
