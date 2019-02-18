"use strict";
exports.__esModule = true;
var Calculations = /** @class */ (function () {
    function Calculations() {
    }
    Calculations.square = function (n) {
        return (n * n);
    };
    Calculations.factorial = function (n) {
        var f = 1;
        for (var i = n; i >= 1; i--)
            f *= i;
        return f;
    };
    return Calculations;
}());
exports.Calculations = Calculations;
