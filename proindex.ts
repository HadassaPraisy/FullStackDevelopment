import {IProduct, Product} from './product';

var products = Product.getProducts();

for(var p of products)
console.log(`${p.id} ${p.pname} ${p.price}`);