import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer, prodReducer } from "./reducers";

const rootreducer = combineReducers({
  products: prodReducer,
  auth: authReducer,
});
const store = legacy_createStore(rootreducer, applyMiddleware(thunk));

export default store;
