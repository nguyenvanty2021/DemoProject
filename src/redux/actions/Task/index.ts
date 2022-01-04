import { TASK_CONSTANTS } from "../../../constants/Task";
import { Task } from "../../../models";
export const getAllTaskActions = (data: Task[]) => {
  return {
    type: TASK_CONSTANTS.GET_ALL,
    payload: data,
  };
};
export const searchTask = (e: string) => {
  return {
    type: TASK_CONSTANTS.SEARCH,
    payload: e,
  };
};
export const searchTaskSuccess = (data: Task[]) => {
  return {
    type: TASK_CONSTANTS.SEARCH_SUCCESS,
    payload: data,
  };
};
export const addTask = (obj: Task) => {
  return {
    type: TASK_CONSTANTS.ADD_TASK,
    payload: obj,
  };
};
export const addTaskSuccess = (data: Task[]) => {
  return {
    type: TASK_CONSTANTS.ADD_TASK_SUCCESS,
    payload: data,
  };
};
export const deleteTask = (id: string) => {
  return {
    type: TASK_CONSTANTS.DELETE_TASK,
    payload: id,
  };
};
export const deleteTaskSuccess = (data: Task[]) => {
  return {
    type: TASK_CONSTANTS.DELETE_TASK_SUCCESS,
    payload: data,
  };
};
export const updateTask = (id: string, obj: Task) => {
  return {
    type: TASK_CONSTANTS.UPDATE_TASK,
    payload: {id: id, obj: obj},
  };
};
export const updateTaskSuccess = (data: Task[]) => {
  return {
    type: TASK_CONSTANTS.UPDATE_TASK_SUCCESS,
    payload: data,
  };
};
