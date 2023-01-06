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
const tbhead = document.createElement("thead")
const tbBody = document.createElement("tbody");
for (let i = 0; i < arr.length; i += 1) {
  const row1 = document.createElement("tr");
}
for (let j = 0; j < arr.length; j += 1) {
  const cell = document.createElement("td");
  const cellText = document.createTextNode(`${arr[i].firstName}, ${arr[i].location}`);
  cell.appendChild(cellText);
  row1.appendChild(cell);
}
tbBody.appendChild(row1);
tb.appendChild(tbBody);
tb.setAttribute("border", "2")

