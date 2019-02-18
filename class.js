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
var Employee = /** @class */ (function () {
    function Employee(ename, category) {
        this.id = ++Employee.eid;
        this.ename = ename;
        this.category = category;
    }
    Employee.prototype.getDetails = function () {
        console.log("ID:" + this.id + " , Ename:" + this.ename + ", Category:" + this.category);
    };
    Employee.eid = 1000;
    return Employee;
}());
var PartEmployee = /** @class */ (function (_super) {
    __extends(PartEmployee, _super);
    function PartEmployee(ename) {
        return _super.call(this, ename, 'PartTime') || this;
    }
    return PartEmployee;
}(Employee));
var FullTime = /** @class */ (function (_super) {
    __extends(FullTime, _super);
    function FullTime(ename) {
        return _super.call(this, ename, 'Fulltime') || this;
    }
    return FullTime;
}(Employee));
var e1 = new PartEmployee('john');
var e2 = new FullTime('Hadassa');
e1.getDetails();
e2.getDetails();
