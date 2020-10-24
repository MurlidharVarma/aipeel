import { CartItem } from './cart-item';

export interface Order{
    orderId: string,
    address: string,
    phone: number,
    email: string,
    orderBy: string,
    orderItems: CartItem[],
    totalPrice: number,
    totalItems: number
}