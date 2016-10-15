const initialState = false;

const lowerPrice = (state = initialState, action) => {
  if (action.type === 'TOGGLE_LOWER_PRICE') {
    return !state;
  }

  return state;
};

export default lowerPrice;
