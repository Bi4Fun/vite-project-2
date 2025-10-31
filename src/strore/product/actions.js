import http, { httpClient } from "../../utils/http";

import { useDispatch, useSelector } from "react-redux";
import { SET_LIST, GET_LIST } from "./constants";

const setList = (payload) => ({ type: SET_LIST, payload });
// const getList = (payload) => ({ type: GET_LIST, payload });

const getList = async () => {
  const httpProuctResponse = await http.get("/products");
  dispatch(productActions.setList(httpProuctResponse.data.items));
  return { type: GET_LIST };
};

const productActions = { setList, getList };

export default productActions;
