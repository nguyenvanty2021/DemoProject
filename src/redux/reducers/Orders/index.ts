import { ORDERS } from "../../../constants/Orders";
import { OrdersProps, SagaProps } from "../../../models";
const initialState: OrdersProps[] = [];
const OrdersReducers = (state = initialState, action: SagaProps) => {
  switch (action.type) {
    case ORDERS.REDUCERS: {
      state = action.payload;
      return [...state];
    }
    default:
      return state;
  }
};
export default OrdersReducers;
