export interface Students {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Students = {
  firstName: 'Bay',
  lastName: 'Omo',
  age: 15,
  location: 'Abuja',
};
const student2: Students = {
  firstName: 'Stanley',
  LastName: 'Daniel',
  age: 12,
  location: 'Zaria',
};
const arr: Array<Students> = [student1, student2];

const tb = document.createElement("table");
const tbBody = document.createElement("tbody");
