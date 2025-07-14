interface Teacher {
    readonly firstName: string;
    readonly lastName:string;
    fullTimeEmployee:boolean;
    yearsOfExperience?:number;
    location:string;
    [propName:string]: any
}

interface Director extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName:string, lastName:string): string;
}
const printTeacher : printTeacherFunction = (firstName, lastName ) => {
    return (
        `${firstName[0]}. ${lastName}`
    );
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
interface StudentConstructor {
    new(firstName:string, lastName:string) : StudentClassInterface;
}

const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName
    }
    workOnHomework(): string {
        return ("Currently Working");
    }
    displayName():string {
        return (this.firstName)
    }
}

export {printTeacher, StudentClass};