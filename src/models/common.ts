export interface PaginationParams {
  _limit: number;
  _page: number;
  _total: number;
}
export interface ListResponse<T> {
  data: any;
  status: number;
  //pagination?: PaginationParams;
  config: any;
  headers: any;
  request: any;
  statusText: string;
}
export interface LoadingProps {
  type: string;
  payload: boolean;
}
//   export interface ListParams {
//     _page: number;
//     _limit: number;
//     _sort: string;
//     _order: 'asc' | 'desc';
//     [key: string]: any;
//   }
export interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  component: any;
  props?: any;
}
export interface SagaProps {
  type: string;
  payload: any;
}