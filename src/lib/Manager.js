const inquirer = require("inquirer");

const getManagerInfo = async () => {
  //prompt questions
  const questions = [
    {
      type: "input",
      message: "Please enter Managers full name",
      name: "ManagersName",
    },

    {
      type: "input",
      message: "Please enter Managers id",
      name: "managersId",
    },
    {
      type: "input",
      message: "Please enter Managers email",
      name: "managersEmail",
    },
    {
      type: "input",
      message: "Please enter office number of manager",
      name: "officeNumber",
    },
  ];
};

const init = async () => {
  //prompt questions save answers
  console.log("questions");
  const answers = await inquirer.prompt(questions);
};

init();

module.exports = {
  getManagerInfo,
};
