export interface Task {
  id?: string;
  title: string;
  description: string;
  data: any;
  status?: boolean | number;
}
export interface TaskReducers {
  payload: Task[];
  type: string;
}
export interface TasksSelector {
  task: Task[];
}
export interface TaskList {
  task: Task[];
  handleUpdate: (id:string, obj: any) => void;
  handleDelete: (id: string) => void;
  handleAddTask: any;
  handleSearch: (e: any) => void;
}
export interface SearchTask {
  payload: string;
  type: string;
}
export interface AddTask {
  payload: Task;
  type: string;
}
export interface UpdateTaskProps {
  obj: Task;
  id: string;
}
export interface UpdateTask {
  payload: UpdateTaskProps;
  type: string;
}
export interface Column {
  title: string
  dataIndex: string
  render?: any
}