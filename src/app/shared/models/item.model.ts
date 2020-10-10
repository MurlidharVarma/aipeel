export interface Item{
    id: string,
    name: string;
    category?: string,
    price: number;
    unit: string;
    image: string;
    qty?: {
        increment?: number,
        initialQty?: number
    }
}