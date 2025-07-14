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


