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
      type: "input",
      message: "Please enter Employees role",
      name: "employeeName",
    },
    {
      type: "list",
      name: "employeeRole",
      choices: ["Engineer", "Intern", "Manager"],
      message: "Please select Employees role",
    },
  ];
};

const init async () => {
  //prompt questions save answers
  console.log("questions")
  const answers = await inquirer.prompt(questions);
}

module.exports = {
  getEmployeeInfo,
};
