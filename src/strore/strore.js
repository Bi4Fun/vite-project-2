import { legacy_createStore as createStore, combineReducers } from "redux";

//Reducers child:
import productReducer from "./product/reducer";
import provinceReducer from "./province/reducer";

const rootReducer = combineReducers({
  product: productReducer,
  province: provinceReducer,
});

const store = createStore(rootReducer);

export default store;
