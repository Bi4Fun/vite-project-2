import http from "../../utils/http";
import { SET_LIST, GET_LIST } from "./constants";

const setList = (payload) => ({ type: SET_LIST, payload });

const getList = () => {
  return async (dispatch) => {
    dispatch({ type: GET_LIST });
    try {
      const httpProductResponse = await http.get("/products");
      dispatch(setList(httpProductResponse.data.items));
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };
};

const productActions = { setList, getList };

export default productActions;
