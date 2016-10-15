export const addItem = item => {
  return {
    type   : 'ADD_ITEM',
    payload: item
  };
};

export const removeItem = item => {
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

export const sendBasket = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(clearBasket());
    }, 500);
  };
};
