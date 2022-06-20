const fs = require("fs");
const inquirer = require("inquirer");
const { generateHtml } = require("./lib/generator.js");
const { addAnotherCard } = require("./lib/Employee.js");
const { typeOFEmployeeQuestions } = require("./lib/Employee.js");
const { getEngineerInfo } = require("./lib/Engineer.js");
const { getInternInfo } = require("./lib/Intern.js");
const { getManagerInfo } = require("./lib/Manager.js");

const { Engineer } = require("./lib/Engineer");
const { Intern } = require("./lib/Intern");
const { Manager } = require("./lib/Manager.js");

const init = async () => {
  let employeeCardCreationInProgress = true;
  const employeeCards = [];

  while (employeeCardCreationInProgress) {
    //get the type of employee to add
    const { employeeRole } = await inquirer.prompt(typeOFEmployeeQuestions);

    //if engineer
    if (employeeRole === "Engineer") {
      //prompt engineer qs and gets answers
      const engineerAnswers = await inquirer.prompt(getEngineerInfo);

      const engineer = new Engineer(engineerAnswers);

      employeeCards.push(engineer);
    }

    //if intern
    if (employeeRole === "Intern") {
      //prompt engineer qs and gets answers
      const internAnswers = await inquirer.prompt(getInternInfo);
      const intern = new Intern(internAnswers);

      employeeCards.push(intern);
    }

    //if manager
    if (employeeRole === "Manager") {
      //prompt engineer qs and gets answers
      const managerAnswers = await inquirer.prompt(getManagerInfo);
      const manager = new Manager(managerAnswers);

      employeeCards.push(manager);
    }

    // prompt question to add another employee
    const { addNextEmployee } = await inquirer.prompt(addAnotherCard);

    if (!addNextEmployee) {
      employeeCardCreationInProgress = false;
      // generate html
      const html = generateHtml(employeeCards);
      // write html to file
      fs.writeFileSync("Generated_HTML.html", html);
    } else {
      init();
    }
  }
};
init();
