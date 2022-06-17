const inquirer = require("inquirer");

const getEmployeeInfo = async () => {
  //prompt questions
  const questions = [
    {
      type: "input",
      message: "Please enter Employees full name",
      name: "employeeName",
    },
  ];
};

module.exports = {
  getEmployeeInfo,
};
