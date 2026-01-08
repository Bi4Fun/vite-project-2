import httpJSONPlaceholder from "../../utils/httpJSONPlaceholder";
import { SET_LIST, GET_LIST } from "./constants";
import loadingActions from "../loading/actions";

const setList = (payload) => ({ type: SET_LIST, payload });

const getList = (limit = 50) => {
  return async (dispatch) => {
    dispatch({ type: GET_LIST });
    dispatch(loadingActions.showLoading());
    try {
      const httpPhotosResponse = await httpJSONPlaceholder.get(
        `/photos?_limit=${limit}`
      );
      dispatch(photosActions.setList(httpPhotosResponse));
    } catch (err) {
      console.error("Failed to fetch photos:", err);
    } finally {
      dispatch(loadingActions.hideLoading());
    }
  };
};

const photosActions = { setList, getList };

export default photosActions;
