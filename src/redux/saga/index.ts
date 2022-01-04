import { all } from "@redux-saga/core/effects";
import ordersSaga from "./Orders";
import taskSaga from "./Task";
export default function* rootSaga() {
  yield all([taskSaga(), ordersSaga()]);
}
