interface DirectorInterface {
    workFromHome() : string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return ("Working from home.");
    }
    getCoffeeBreak(): string {
        return ("Getting a coffee break.");
    }
    workDirectorTasks(): string {
        return ("Getting to director tasks.");
    }
}
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return ("Cannot work from home.");
    }
    getCoffeeBreak(): string {
        return ("Cannot have a break.")
    }
    workTeacherTasks(): string {
        return("Getting to work.");
    }
}
// To handle string salary with currency, parse numbers from strings:
const createEmployee = (salary: number | string) : Director | Teacher => {
    let numericSalary: number;
    if (typeof salary ==="string") {
        //Remove non-digit characters and pass number
        numericSalary = parseInt(salary.replace(/[^0-9]/g, ""), 10);
    } else {
        numericSalary = salary;
    }
    if( numericSalary < 500) {
        return new Teacher()
    } else {
        return new Director()
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1200));
console.log(createEmployee("$450"));
console.log(createEmployee("$600"));

// functions for specific employees
function isDirector(employee: Teacher | Director ) : boolean {
    return employee instanceof Director;
}

const executeWork = (employee: Teacher | Director): string => {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    } else if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)))
console.log(executeWork(createEmployee("Ksh350")));

//String literal types
type Subjects = "Math" | "History";
const teachClass = (todayClass: Subjects) : string => {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    }
}

console.log(teachClass("Math"));
console.log(teachClass("History"));