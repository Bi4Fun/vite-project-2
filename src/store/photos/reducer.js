import { SET_LIST, GET_LIST } from "./constants";

const initialState = {
  list: [],
  isLoading: false,
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case SET_LIST:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default photosReducer;
