const inquirer = require("inquirer");

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
  {
    type: "confirm",
    name: "addAnotherManager",
    message: "would you like to add another manager to this team",
  },
];

module.exports = {
  getManagerInfo,
};
