const inquirer = require("inquirer");

class Employee {
  constructor({ employeeRole, teamName }) {
    this.employeeRole = employeeRole;
    this.teamName = teamName;
  }
  createCard() {
    return `<h1 class="teamName">${this.teamName}</h1>`;
  }
}

const typeOFEmployeeQuestions = {
  type: "list",
  message: "Please select Employees role",
  name: "employeeRole",
  choices: [
    { name: "Engineer", value: "Engineer", short: "Engineer" },
    { name: "Intern", value: "Intern", short: "Intern" },
    { name: "Manager", value: "Manager", short: "Manager" },
  ],
};

const teamName = {
  type: "input",
  name: "teamName",
  message: "Please enter Name of team",
};

const addAnotherCard = {
  type: "confirm",
  name: "addAnotherEmployee",
  message: "would you like to add another employee to this team",
};

module.exports = {
  typeOFEmployeeQuestions,
  addAnotherCard,
  Employee,
  teamName,
};
