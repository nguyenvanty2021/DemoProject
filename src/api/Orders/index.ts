import { ListResponse, OrdersProps } from "../../models";
import axiosClient from "../axiosClient";
const ordersAPI = {
  getAllOrders(): Promise<ListResponse<OrdersProps>> {
    const url = "/orders";
    return axiosClient.get(url);
  },
  deleteOrder(id: string): Promise<OrdersProps> {
    const url = `/orders/${id}`;
    return axiosClient.delete(url);
  },
  updateTask(data: OrdersProps): Promise<ListResponse<OrdersProps>> {
    const url = `/orders/${data.id}`;
    return axiosClient.put(url, data);
  },
};
export default ordersAPI;
