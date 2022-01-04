import { combineReducers } from "redux";
import loading from "./Loading/index";
import OrdersReducers from "./Orders/index";
const rootReducer = combineReducers({ loading, OrdersReducers });
export default rootReducer;
