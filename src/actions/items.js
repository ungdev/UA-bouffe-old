import Horizon from '@horizon/client';

const hz = new Horizon();

export const addItem = (item) => {
  return {
    type   : 'ADD_ITEM',
    payload: item
  };
};

export const removeItem = (item) => {
  return {
    type   : 'REMOVE_ITEM',
    payload: item
  };
};

export const clearBasket = () => {
  return {
    type: 'CLEAR_BASKET'
  };
};

export const sendBasket = (basket) => {
  return (dispatch) => {
    const orders = hz('orders');

    orders.insert(basket);

    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(clearBasket());
        resolve();
      }, 500);
    });
  };
};
