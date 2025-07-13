interface Student {
    readonly firstName: string;
    readonly lastName: string;
    age: number;
    location: string;
}

const studentOne : Student = {
    firstName: "Kenneth",
    lastName: "Kamau",
    age: 23,
    location: "Kasarani"
}

const studentTwo : Student = {
    firstName: "Samuel",
    lastName: "Kasee",
    age: 21,
    location: "Kahawa Sukari"
}

const studentsList: Student[] = [studentOne, studentTwo];
const namesArray: number[] = [] ;
namesArray[1] = 35;



const table = document.createElement("table");
const tbody = document.createElement("tbody");

table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
    const row = document.createElement("tr");
    const nameId = document.createElement("td");
    const locationId = document.createElement("td");

    nameId.textContent = student.firstName;
    locationId.textContent = student.location;

    nameId.style.padding = "10px";
    locationId.style.padding = "8px";

    row.appendChild(nameId);
    row.appendChild(locationId);
    tbody.appendChild(row);
});
document.body.appendChild(table);