var Product = /** @class */ (function () {
    function Product(pname, price) {
        this.id = ++Product.pid;
        this.pname = pname;
        this.price = price;
    }
    Product.pid = 0;
    return Product;
}());
var p = new Array(new Product('iphone', 60), new Product('nokia', 10), new Product('redmi', 50));
for (var _i = 0, p_1 = p; _i < p_1.length; _i++) {
    var pro = p_1[_i];
    console.log(pro.id + " " + pro.pname + " " + pro.price);
}
