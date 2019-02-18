"use strict";
exports.__esModule = true;
var Calc = /** @class */ (function () {
    function Calc() {
    }
    Calc.factorial = function (n) {
        var f = 1;
        for (var i = n; i >= 1; i--)
            f *= i;
        return f;
    };
    Calc.biggest = function (a, b) {
        return (a > b) ? a : b;
    };
    return Calc;
}());
exports.Calc = Calc;
