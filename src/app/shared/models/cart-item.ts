import { Item } from './item.model';

export interface CartItem{
    item: Item,
    quantity: number,
    price: number
}