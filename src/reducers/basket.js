const initialState = [];

const basket = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat([ action.payload ]);
    case 'REMOVE_ITEM':
      return state.filter((_, i) => i !== action.payload);
    case 'CLEAR_BASKET':
      return [];
  }

  return state;
};

export default basket;
