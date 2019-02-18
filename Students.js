"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(sname, course) {
        this.id = ++Student.sid;
        this.sname = sname;
        this.course = course;
    }
    Student.prototype.getDetails = function () {
        console.log("ID:" + this.id + " , Sname:" + this.sname + " , Course:" + this.course);
    };
    Student.sid = 10;
    return Student;
}());
exports.Student = Student;
