export interface Customer {
    id: number;
    name: string;
    city: string;
    orderTotal?: number;
}

export interface Order {
    customerId: number;
    orderItems: OrderItem[];
}

export interface OrderItem {
    id: number,
    productName: string,
    itemCost: number
}