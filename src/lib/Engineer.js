const inquirer = require("inquirer");

const getEngineerInfo = async () => {
  //prompt questions
  const questions = [
    {
      type: "input",
      message: "Please enter Engineers full name",
      name: "engineersName",
    },

    {
      type: "input",
      message: "Please enter Engineers id",
      name: "engineerId",
    },
    {
      type: "input",
      message: "Please enter Engineers email",
      name: "engineer email",
    },
    {
        type: "input",
        message: "Please enter Git hub profile url",
        name: "gitHubUrl",
      },
    
  ];
};

const init async () => {
  //prompt questions save answers
  console.log("questions")
  const answers = await inquirer.prompt(questions);
}

module.exports = {
  getEngineerInfo,
};