import httpJSONPlaceholder from "../../utils/httpJSONPlaceholder";
import { SET_LIST, GET_LIST } from "./constants";

const setList = (payload) => ({ type: SET_LIST, payload });

const getList = (limit = 50) => {
  return async (dispatch) => {
    dispatch({ type: GET_LIST });
    try {
      const httpPhotosResponse = await httpJSONPlaceholder.get(
        `/photos?_limit=${limit}`
      );
      dispatch(photosActions.setList(httpPhotosResponse));
    } catch (err) {
      console.error("Failed to fetch photos:", err);
    }
  };
};

const photosActions = { setList, getList };

export default photosActions;
