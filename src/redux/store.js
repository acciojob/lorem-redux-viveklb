import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import loremReducer from "./reducer";

const store = createStore(loremReducer, applyMiddleware(thunk));

export default store;
