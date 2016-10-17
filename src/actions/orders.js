import Horizon from '@horizon/client';

const hz = new Horizon();

export const orders = (allOrders) => {
  return {
    type: 'ORDERS',
    payload: allOrders
  };
};

export const listenForOrders = () => {
  const ordersFeed = hz('orders');

  return (dispatch) => {
    return ordersFeed
      .watch()
      .subscribe(allOrders => {
        dispatch(orders(allOrders));
      });
  };
};
