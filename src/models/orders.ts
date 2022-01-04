export interface OrdersProps {
    CustomerName: string;
    Drivers: string;
    DropPlace: string;
    OrderProgress: string;
    OrderNo: string;
    PickupPlace: string;
    Quantity: number;
    ServiceDate: string;
    Vol: number;
    status?: number;
    id: string;
}
export interface ReducersProps {
    loading?: boolean;
    OrdersReducers: OrdersProps[];
}