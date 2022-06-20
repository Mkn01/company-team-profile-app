const inquirer = require("inquirer");

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
  {
    type: "confirm",
    name: "addAnotherIntern",
    message: "would you like to add another intern to this team",
  },
];

module.exports = {
  getInternInfo,
};
