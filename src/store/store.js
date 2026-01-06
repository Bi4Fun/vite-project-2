import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
//Reducers child:
import productReducer from "./product/reducer";
import provinceReducer from "./province/reducer";
import usersReducer from "./users/reducer";
import todosReducer from "./todo/reducer";
import photosReducer from "./photos/reducer";

const rootReducer = combineReducers({
  product: productReducer,
  province: provinceReducer,
  users: usersReducer,
  todo: todosReducer,
  photos: photosReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
