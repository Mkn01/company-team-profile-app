const inquirer = require("inquirer");

const getManagerInfo = async () => {
  //prompt questions
  const questions = [
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
  ];
  // prompt questions display answers
  const answers = await inquirer.prompt(questions);
  console.log(answers);
};

module.exports = {
  getManagerInfo,
};
