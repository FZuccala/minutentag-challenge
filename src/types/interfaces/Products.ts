type Skus = {
    code: string;
    name: string;
    stock: number;
    price: number;
}

export interface IProduct {
    id:          number;
    brand:       string;
    image:       string;
    style:       string;
    substyle:    string;
    abv:         string;
    origin:      string;
    information: string;
    price:       number;
    skus:        Skus[];
}
