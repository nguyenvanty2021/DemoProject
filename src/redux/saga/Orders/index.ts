import { put, select, takeLatest,delay } from "@redux-saga/core/effects";
import ordersAPI from "../../../api/Orders";
import { notificationComponent } from "../../../Components/Notification";
import { API } from "../../../constants/API";
import { ORDERS } from "../../../constants/Orders";
import {
  ListResponse,
  OrdersProps,
  ReducersProps,
  SagaProps,
} from "../../../models";
import { loading } from "../../actions/Loading";
function* deleteOrder(data: SagaProps) {
  try {
    yield put(loading(true));
    const response: OrdersProps = yield ordersAPI.deleteOrder(data?.payload);
    if (response?.status === API.SUCCESS) {
      const order: OrdersProps[] = yield select(
        (state: ReducersProps) => state.OrdersReducers
      );
      const index = order.findIndex(
        (state: OrdersProps) => state.id === data?.payload
      );
      if (index > -1) {
        order.splice(index, 1);
        yield put({ type: ORDERS.REDUCERS, payload: [...order] });
        notificationComponent(
          "success",
          3,
          "Success",
          "Order delete successful!!!"
        );
      }
    }
    yield put(loading(false));
  } catch (error) {
    yield put(loading(false));
  }
}
function* updateOrder(data: SagaProps) {
  try {
    yield put(loading(true));
    const response: ListResponse<OrdersProps> = yield ordersAPI.updateTask(
      data?.payload
    );
    console.log(response);
    if (response?.status === API.SUCCESS) {
      const order: OrdersProps[] = yield select(
        (state: ReducersProps) => state.OrdersReducers
      );
      const index = order.findIndex(
        (state: OrdersProps) => state.id === response?.data?.id
      );
      if (index > -1) {
        order[index] = response.data;
        yield put({ type: ORDERS.REDUCERS, payload: [...order] });
        notificationComponent(
          "success",
          3,
          "Success",
          "Order update successful!!!"
        );
      }
    }
    yield put(loading(false));
  } catch (error) {
    yield put(loading(false));
  }
}
function* getAllOrders(data: SagaProps) {
  yield delay(100); // not remove, debounce api
  try {
    yield put(loading(true));
    /* @ts-ignore */
    const response: ListResponse<OrdersProps> = yield ordersAPI.getAllOrders();
    if (response?.status === API.SUCCESS) {
      yield put({ type: ORDERS.REDUCERS, payload: response?.data });
    }
    yield put(loading(false));
  } catch (error) {
    yield put(loading(false));
  }
}
export default function* ordersSaga() {
  yield takeLatest(ORDERS.GET_ALL, getAllOrders);
  yield takeLatest(ORDERS.DELETE, deleteOrder);
  yield takeLatest(ORDERS.UPDATE_SAGA, updateOrder);
}
