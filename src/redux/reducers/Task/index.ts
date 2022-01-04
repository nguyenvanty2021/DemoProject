import { TASK_CONSTANTS } from "../../../constants/Task";
import { Task, TaskReducers } from "../../../models";
const initialState: Task[] = [];
const task = (state = initialState, action: TaskReducers) => {
  switch (action.type) {
    case TASK_CONSTANTS.GET_ALL: {
      console.log(action);
      if (action && action.payload && action.payload.length > 0) {
        state = [...action.payload];
      }
      return [...state];
    }
    case TASK_CONSTANTS.ADD_TASK_SUCCESS: {
      state = [...action.payload];
      return [...state];
    }
    case TASK_CONSTANTS.UPDATE_TASK_SUCCESS: {
      state = [...action.payload];
      return [...state];
    }
    case TASK_CONSTANTS.DELETE_TASK_SUCCESS: {
      state = [...action.payload];
      return [...state];
    }
    case TASK_CONSTANTS.SEARCH_SUCCESS: {
      console.log(action);
      state = [...action.payload];
      return [...state];
    }
    default:
      return state;
  }
};
export default task;
