import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga";
const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const middlewares = [thunk, sagaMiddleware];
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga);
  return store;
};
export default configureStore;
