"use strict";
exports.__esModule = true;
var product_1 = require("./product");
var products = product_1.Product.getProducts();
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var p = products_1[_i];
    console.log(p.id + " " + p.pname + " " + p.price);
}
