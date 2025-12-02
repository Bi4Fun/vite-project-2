import httpJSONPlaceholder from "../../utils/httpJSONPlaceholder";
import { SET_LIST, GET_LIST } from "./constants";

const setList = (payload) => ({ type: SET_LIST, payload });

const getList = () => {
  return async (dispatch) => {
    dispatch({ type: GET_LIST });
    try {
      const httpUsersResponse = await httpJSONPlaceholder.get("/users");
      dispatch(usersActions.setList(httpUsersResponse));
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };
};

const usersActions = { setList, getList };

export default usersActions;
