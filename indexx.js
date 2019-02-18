var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setEmployeeDetails = function (id, ename, job, salary) {
        this.id = id;
        this.ename = ename;
        this.job = job;
        this.salary = salary;
    };
    Employee.prototype.getEmployeeDetails = function () {
        console.log(this.id + " " + this.ename + " " + this.job + " " + this.salary);
    };
    return Employee;
}());
var e1 = new Employee();
e1.setEmployeeDetails(1, 'john', 'job', 5000);
e1.getEmployeeDetails();
