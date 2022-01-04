import { LOADING } from "../../../constants/Loading";
export const loading = (data: boolean) => {
  return {
    type: LOADING.START,
    payload: data,
  };
};
