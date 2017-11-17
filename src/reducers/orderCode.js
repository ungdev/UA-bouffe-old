import clone from 'lodash.clone';

const initialState = {
  incrementalCode: 1,
  playerCode: null
};

const orderCode = (state = initialState, action) => {
  const newState = clone(state);

  switch(action.type) {
    case 'NEXT_ORDER_CODE':
      newState.incrementalCode++;
      break;
    case 'CLEAN_PLAYER_CODE':
      newState.playerCode = null;
      break;
    case 'SET_PLAYER_CODE':
      newState.playerCode = action.payload.code;
      break;
  }

  return newState;
};

export default orderCode;
