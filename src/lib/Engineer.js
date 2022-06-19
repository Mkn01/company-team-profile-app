const inquirer = require("inquirer");

const getEngineerInfo = async () => {
  //prompt questions
  const questions = [
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
  ];
  //prompt questions display answers
  const answers = await inquirer.prompt(questions);
  console.log(answers);
};

module.exports = {
  getEngineerInfo,
};
