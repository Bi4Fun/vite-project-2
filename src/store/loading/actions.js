import { SHOW_LOADING, HIDE_LOADING } from "./constants";

const showLoading = () => ({ type: SHOW_LOADING });

const hideLoading = () => ({ type: HIDE_LOADING });

const loadingActions = { showLoading, hideLoading };

export default loadingActions;
