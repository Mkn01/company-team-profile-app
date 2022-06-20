const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor({ name, id, additionalInfo, email, EmployeeRole }) {
    super({ name, email, EmployeeRole });
    this.id = id;
    this.additionalInfo = additionalInfo;
  }
}

const getEngineerInfo = [
  {
    type: "input",
    message: "Please enter Engineers id",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter Git hub profile url",
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
  getEngineerInfo,
};
