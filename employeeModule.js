"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(idc, enamec, jobc, salaryc) {
        this.id = idc;
        this.ename = enamec;
        this.job = jobc;
        this.salary = salaryc;
    }
    Employee.prototype.getDetails = function () {
        console.log("ID: " + this.id + ", Ename: " + this.ename + ", Job: " + this.job + ", Salary: " + this.salary);
    };
    return Employee;
}());
exports.Employee = Employee;
