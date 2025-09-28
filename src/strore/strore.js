import { legacy_createStore as createStore, combineReducers } from "redux";

//Reducers child:
import productReducer from "./product/reducer";

const rootReducer = combineReducers({
  product: productReducer,
});

const store = createStore(rootReducer);

export default store;
