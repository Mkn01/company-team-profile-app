const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern {
  constructor({ id, additionalInfo, name, email }) {
    this.id = id;
    this.additionalInfo = additionalInfo;
    this.name = name;
    this.email = email;
  }
  createCard() {
    return `<div class="card">
    <h2 class="employeeName">${this.name}</h2>
    <h3 class="role">Intern</h3>
    <img src="dist/assets/img/icon.png" alt="avatar icon" class="img" />
    <div class="container">
      <h3 class="employeeInfo">${this.id}</h3>
      <h3 class="employeeInfo">${this.email}</h3>
      <h3 class="employeeInfo">Visit GitHub profile[here](${this.additionalInfo})</h3>
    </div>`;
  }
}

const getInternInfo = [
  {
    type: "input",
    message: "Please enter Interns id",
    name: "id",
  },

  {
    type: "input",
    message: "Please enter the school",
    name: "additionalInfo",
  },
  {
    type: "input",
    message: "Please enter Employees full name",
    name: "name",
  },

  {
    type: "input",
    message: "Please enter Employees email address",
    name: "email",
  },
];

module.exports = {
  getInternInfo,
  Intern,
};
