var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base() {
        this.a = 1000;
        this.b = 2000;
        this.c = 3000;
    }
    Base.prototype.displayBase = function () {
        console.log("A: " + this.a + " , B:" + this.b + " , C: " + this.c);
    };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.displayDerived = function () {
        console.log(" B:" + this.b + " , C:" + this.c);
    };
    return Derived;
}(Base));
var o = new Derived();
o.displayBase();
o.displayDerived();
console.log("B:" + o.b);
