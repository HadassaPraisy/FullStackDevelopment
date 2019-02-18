export interface IProduct {
    id:number;
    pname:string;
    price:number;
}

export class Product implements IProduct{
    static pid:number=0;
    id:number;
    pname:string
    price:number;

    constructor(pname:string,price:number) {
        this.id = ++Product.pid;
        this.pname=pname;
        this.price=price;
    }

static getProducts(): Array<Product> {
    return new Array<Product>(
    new Product('iphone',60),
    new Product('nokia',10),
    new Product('redmi',50)
        );
    }
}
