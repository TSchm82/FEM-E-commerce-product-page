export interface Item {

    img: string;

    name: string;

    price: number;

}

export interface CartItem {

    item: Item;

    quantity: number;

}