const orders = (state = [], action) => {
  switch(action.type) {
    case 'ORDERS':
      return action.payload;
  }

  return state;
};

export default orders;
