const inquirer = require("inquirer");

const getEmployeeInfo = async () => {
  //prompt questions
  const questions = [
    {
      type: "input",
      message: "Please enter Employees full name",
      name: "employeeName",
    },

    {
      type: "input",
      message: "Please enter Employees email address",
      name: "employeeEmail",
    },
    {
      type: "list",
      name: "employeeRole",
      choices: ["Engineer", "Intern", "Manager"],
      message: "Please select Employees role",
    },
  ];

  const answers = await inquirer.prompt(questions);
  console.log(answers);
};

module.exports = {
  getEmployeeInfo,
};
