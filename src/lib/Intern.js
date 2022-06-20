const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee {
  constructor({ id, additionalInfo, name, email, EmployeeRole }) {
    super({ name, email, EmployeeRole });

    this.id = id;
    this.additionalInfo = additionalInfo;
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
