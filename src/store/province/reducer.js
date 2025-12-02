import { SET_LIST, GET_LIST } from "./constants";

const initState = {
  list: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LIST:
      return { ...state };
    case SET_LIST:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default reducer;
