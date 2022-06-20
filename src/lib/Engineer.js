const inquirer = require("inquirer");

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
  {
    type: "confirm",
    name: "addAnotherEngineer",
    message: "would you like to add another engineer to this team",
  },
];

module.exports = {
  getEngineerInfo,
};
