const inquirer = require("inquirer");

const getInternInfo = async () => {
  //prompt questions
  const questions = [
    {
      type: "input",
      message: "Please enter Interns full name",
      name: "InternName",
    },

    {
      type: "input",
      message: "Please enter Interns id",
      name: "internId",
    },
    {
      type: "input",
      message: "Please enter Interns email",
      name: "internEmail",
    },
    {
        type: "input",
        message: "Please enter the school",
        name: "school",
      },
    
  ];
};

const init async () => {
  //prompt questions save answers
  console.log("questions")
  const answers = await inquirer.prompt(questions);
}

init()

module.exports = {
  getInternInfo,
};