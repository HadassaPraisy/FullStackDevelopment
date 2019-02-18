"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product(pname, price) {
        this.id = ++Product.pid;
        this.pname = pname;
        this.price = price;
    }
    Product.getProducts = function () {
        return new Array(new Product('iphone', 60), new Product('nokia', 10), new Product('redmi', 50));
    };
    Product.pid = 0;
    return Product;
}());
exports.Product = Product;
