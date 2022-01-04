import { ListResponse, Task, UpdateTaskProps } from "../../models";
import axiosClient from "../axiosClient";
const taskAPI = {
  getAllTask(): Promise<ListResponse<Task>> {
    const url = "/task";
    return axiosClient.get(url);
    // return axiosClient.get(url, {
    //   params: {
    //     _page: 1,
    //     _limit: 10,
    //   },
    // });
  },
  addTask(obj: Task): Promise<Task> {
    const url = "/task";
    return axiosClient.post(url, obj);
    // return axiosClient.get(url, {
    //   params: {
    //     _page: 1,
    //     _limit: 10,
    //   },
    // });
  },
  deleteTask(id: string): Promise<Task> {
    const url = `/task/${id}`;
    return axiosClient.delete(url);
    // return axiosClient.get(url, {
    //   params: {
    //     _page: 1,
    //     _limit: 10,
    //   },
    // });
  },
  updateTask(data: UpdateTaskProps): Promise<Task> {
    const url = `/task/${data.id}`;
    return axiosClient.put(url, data.obj);
    // return axiosClient.get(url, {
    //   params: {
    //     _page: 1,
    //     _limit: 10,
    //   },
    // });
  },
};
export default taskAPI;
