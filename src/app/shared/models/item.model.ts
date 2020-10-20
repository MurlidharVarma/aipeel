export interface Item{
    id: string,
    categoryId: string,
    isHotDeal?: boolean,
    isPopular?: boolean,
    name: string;
    category?: string,
    price: number;
    actualprice?: number;
    unit: string;
    unitVal?: number,
    image: string;
    desc:string;
    qty_increment?: number,
    qty_initialQty?: number
}