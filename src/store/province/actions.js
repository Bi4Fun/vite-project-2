import http from "../../utils/http";
import { SET_LIST, GET_LIST } from "./constants";

const setList = (payload) => ({ type: SET_LIST, payload });

const getList = () => {
  return async (dispatch) => {
    dispatch({ type: GET_LIST });
    try {
      const httpProvinceResponse = await http.get("/address/provinces");
      dispatch(setList(httpProvinceResponse.data));
    } catch (err) {
      console.error("Failed to fetch provinces:", err);
    }
  };
};

const provinceActions = { setList, getList };

export default provinceActions;
