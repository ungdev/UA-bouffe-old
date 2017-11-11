export const closeModal = (modalName, payload) => {
  return {
    type: 'CLOSE_MODAL',
    name: modalName,
    payload
  };
};

export const closeIntermediateModal = (modalName, payload) => {
  return (dispatch) => {
    return new Promise(resolve => {
      dispatch(closeModal(modalName, payload));
      resolve();
    });
  }
};

export const openModal = (modalName, payload) => {
  return {
    type: 'OPEN_MODAL',
    name: modalName,
    payload
  };
};
