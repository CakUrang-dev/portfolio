import actionType from "../actions/rootAction";

const initialState = {
  modalIsOpen: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ModalChange:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
      };
    default:
      return state;
  }
};

export default modalReducer;
