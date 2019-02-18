"use strict";
exports.__esModule = true;
var Numbers = /** @class */ (function () {
    function Numbers(num1c, num2c) {
        this.num1 = num1c;
        this.num2 = num2c;
    }
    Numbers.prototype.getNumbers = function () {
        console.log("num1=" + this.num1 + " , num2=" + this.num2);
    };
    return Numbers;
}());
exports.Numbers = Numbers;
