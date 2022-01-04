import { loading } from "./../../actions/Loading/index";
import {
  addTaskSuccess,
  deleteTaskSuccess,
  searchTaskSuccess,
  updateTaskSuccess,
} from "./../../actions/Task/index";
import { Task } from "./../../../models/task";
import {
  fork,
  take,
  call,
  takeLatest,
  delay,
  select,
  put,
} from "redux-saga/effects";
import { TASK_CONSTANTS } from "../../../constants/Task";
import { SearchTask, AddTask, UpdateTask } from "../../../models";
import taskAPI from "../../../api/Task";
import { API } from "../../../constants/API";
import history from "../../../utils/history";
function* watching1() {
  while (true) {
    // usually using while when using take
    console.log("watching1");
    yield take("Contants__here");
    // call api, process...
  }
}
function* watching2() {
  while (true) {
    // usually using while when using take
    console.log("watching2");
    yield take("Contants__here");
    // call api, process...
  }
}
function* searchTaskSaga(data: SearchTask) {
  // thêm delay ở search giống như debounce, có delay ở đây mới debounce được nha + takeLatest
  yield delay(500);
  // lấy state task từ reducer lên
  const task: Task[] = yield select((state) => state.task);
  const { payload } = data;
  console.log(payload);
  yield put(loading(true));
  const result: Task[] = task.filter(
    (values) => values.title.toLowerCase().indexOf(payload) !== -1
  );
  console.log(result);
  yield put(searchTaskSuccess(result));
  // yield delay(500);
  yield put(loading(false));
}
function* addTaskSaga(data: AddTask) {
  console.log(data);
  const { payload } = data;
  console.log(payload);
  yield put(loading(true));
  const response: Task = yield call(taskAPI.addTask, payload);
  console.log(response);
  if (response.status === API.ACTION) {
    const task: Task[] = yield select((state) => state.task);
    task.unshift(response.data);
    yield put(addTaskSuccess([...task]));
  }
  yield put(loading(false));
}
function* deleteTaskSaga(data: SearchTask) {
  const { payload } = data;
  yield put(loading(true));
  const response: Task = yield call(taskAPI.deleteTask, payload);
  console.log(response);
  if (response.status === API.SUCCESS) {
    const task: Task[] = yield select((state) => state.task);
    const index: number = task.findIndex((values) => values.id === payload);
    if (index > -1) {
      task.splice(index, 1);
      yield put(deleteTaskSuccess([...task]));
    }
  }
  yield put(loading(false));
}
function forwardTo(location: string) {
  history.push(location);
}
function* updateTaskSaga(data: UpdateTask) {
  console.log(data);
  yield put(loading(true));
  const response: Task = yield call(taskAPI.updateTask, data.payload);
  console.log(response);
  if (response.status === API.SUCCESS) {
    const task: Task[] = yield select((state) => state.task);
    const index: number = task.findIndex(
      (values) => values.id === response.data.id
    );
    if (index > -1) {
      task[index] = response.data;
      yield put(updateTaskSuccess([...task]));

      yield call(forwardTo, "/test");
    }
  }
  yield put(loading(false));
}
export default function* taskSaga() {
  // fork là: non-blocking -> không cần chờ đợi nhau, 2 thằng đều thực thi cùng 1 lúc, thằng nào xong trước thì xong trước
  yield takeLatest(TASK_CONSTANTS.ADD_TASK, addTaskSaga);
  yield takeLatest(TASK_CONSTANTS.DELETE_TASK, deleteTaskSaga);
  yield takeLatest(TASK_CONSTANTS.UPDATE_TASK, updateTaskSaga);
  yield fork(watching1);
  yield fork(watching2);
  yield takeLatest(TASK_CONSTANTS.SEARCH, searchTaskSaga);
  // yield all([helloSaga(), counterSaga(), authenticationSaga()]);
}
