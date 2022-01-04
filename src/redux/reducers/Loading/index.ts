import { LoadingProps } from "./../../../models/common";
import { LOADING } from "../../../constants/Loading";
const initialState: boolean = false;
const loading = (state = initialState, action: LoadingProps) => {
  switch (action.type) {
    case LOADING.START: {
      console.log("ne", action);
      state = action.payload;
      return state;
    }
    default:
      return state;
  }
};
export default loading;
