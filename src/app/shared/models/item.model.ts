export interface Item{
    id: string,
    categoryId: string,
    tags: Array<string>,
    name: string;
    category?: string,
    price: number;
    unit: string;
    image: string;
    desc:string;
    qty?: {
        increment?: number,
        initialQty?: number
    }
}