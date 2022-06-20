const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor({ id, additionalInfo, name, email, employeeRole }) {
    super({ name, email, employeeRole });
    this.additionalInfo = additionalInfo;
    this.id = id;
  }
}

const getManagerInfo = [
  {
    type: "input",
    message: "Please enter Managers id",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter office number of manager",
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
  getManagerInfo,
  Manager,
};
