var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return ("Working from home.");
    };
    Director.prototype.getCoffeeBreak = function () {
        return ("Getting a coffee break.");
    };
    Director.prototype.workDirectorTasks = function () {
        return ("Getting to director tasks.");
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return ("Cannot work from home.");
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return ("Cannot have a break.");
    };
    Teacher.prototype.workTeacherTasks = function () {
        return ("Getting to work.");
    };
    return Teacher;
}());
// To handle string salary with currency, parse numbers from strings:
var createEmployee = function (salary) {
    var numericSalary;
    if (typeof salary === "string") {
        //Remove non-digit characters and pass number
        numericSalary = parseInt(salary.replace(/[^0-9]/g, ""), 10);
    }
    else {
        numericSalary = salary;
    }
    if (numericSalary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
};
console.log(createEmployee(200));
console.log(createEmployee(1200));
console.log(createEmployee("$450"));
console.log(createEmployee("$600"));
