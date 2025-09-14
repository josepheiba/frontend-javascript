interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Array<Student> = [student1, student2];

// Create table element
const table: HTMLTableElement = document.createElement('table');
const tableBody: HTMLTableSectionElement = document.createElement('tbody');

// Add header row
const headerRow: HTMLTableRowElement = document.createElement('tr');
const firstNameHeader: HTMLTableHeaderCellElement = document.createElement('th');
const locationHeader: HTMLTableHeaderCellElement = document.createElement('th');

firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
tableBody.appendChild(headerRow);

// Add student rows
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const firstNameCell: HTMLTableDataCellElement = document.createElement('td');
  const locationCell: HTMLTableDataCellElement = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
