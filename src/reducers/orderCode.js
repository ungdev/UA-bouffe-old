const orderCode = (state = 1, action) => {
  switch(action.type) {
    case 'NEXT_ORDER_CODE':
      return (state + 1) % 101;
  }

  return state;
};

export default orderCode;
