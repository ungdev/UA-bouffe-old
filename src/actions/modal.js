export const closeModal = (modalName, payload) => {
  return {
    type: 'CLOSE_MODAL',
    name: modalName,
    payload
  };
};

export const openModal = (modalName, payload) => {
  return {
    type: 'OPEN_MODAL',
    name: modalName,
    payload
  };
};
