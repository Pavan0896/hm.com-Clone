import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";

const rootreducers = ()=>{};
const store = legacy_createStore(rootreducers, applyMiddleware(thunk));

export default store;
