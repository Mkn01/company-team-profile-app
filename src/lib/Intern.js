const inquirer = require("inquirer");

const getInternInfo = async () => {
  //prompt questions
  const questions = [
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
  ];

  //prompt questions display answers

  const answers = await inquirer.prompt(questions);
  console.log(answers);
};

module.exports = {
  getInternInfo,
};
