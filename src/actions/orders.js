import Horizon from '@horizon/client';

const hz = new Horizon();

export const nextOrderCode = () => {
  return {
    type: 'NEXT_ORDER_CODE'
  };
};

export const orders = (allOrders) => {
  return {
    type   : 'ORDERS',
    payload: allOrders
  };
};

export const listenForOrders = () => {
  const ordersFeed = hz('orders');

  return (dispatch) => {
    return ordersFeed
      .order('created', 'descending')
      .watch()
      .subscribe(allOrders => {
        dispatch(orders(allOrders));
      });
  };
};
