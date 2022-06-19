const inquirer = require("inquirer");

const getEngineerInfo = async () => {
  //prompt questions
  const questions = [
    {
      type: "input",
      message: "Please enter Engineers id",
      name: "engineerId",
    },
    {
      type: "input",
      message: "Please enter Git hub profile url",
      name: "gitHubUrl",
    },
  ];
  //prompt questions display answers
  const answers = await inquirer.prompt(questions);
  console.log(answers);
};

module.exports = {
  getEngineerInfo,
};
