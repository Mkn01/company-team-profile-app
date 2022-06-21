const inquirer = require("inquirer");

class Employee {
  constructor({ employeeRole }) {
    this.employeeRole = employeeRole;
  }
}

const addTeamName = {
  type: "input",
  message: "Please enter Name of team",
  name: "teamName",
};
const typeOFEmployeeQuestions = {
  type: "list",
  message: "Please select Employees role",
  name: "employeeRole",
  choices: [
    { name: "Engineer", value: "Engineer", short: "Engineer" },
    { name: "Intern", value: "Intern", short: "Intern" },
    { name: "Manager", value: "Manager", short: "Manager" },
  ],},
  
  {
      type: "input",
      message: "Please enter Name of team",
      name: "teamName",
    };
  }
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
  addTeamName,
};
