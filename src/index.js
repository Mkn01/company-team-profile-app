const fs = require("fs");
const inquirer = require("inquirer");
const { addAnotherCard } = require("./lib/Employee.js");
const { typeOFEmployeeQuestions } = require("./lib/Employee.js");
const { getEngineerInfo } = require("./lib/Engineer.js");
const { getInternInfo } = require("./lib/Intern.js");
const { getManagerInfo } = require("./lib/Manager.js");

const init = async () => {
  //get the type of employee
  const { employeeRole } = await inquirer.prompt(typeOFEmployeeQuestions);

  //if engineer
  if (employeeRole === "Engineer") {
    //prompt engineer qs and gets answers
    const engineerAnswers = await inquirer.prompt(getEngineerInfo);
    console.log(engineerAnswers);
  }

  //if intern
  if (employeeRole === "Intern") {
    //prompt engineer qs and gets answers
    const internAnswers = await inquirer.prompt(getInternInfo);
    console.log(internAnswers);
  }

  //if manager
  if (employeeRole === "Manager") {
    //prompt engineer qs and gets answers
    const managerAnswers = await inquirer.prompt(getManagerInfo);
    console.log(managerAnswers);
    let addAnotherManagerInProgress = true;
    //start loop for adding another manager
    while (addAnotherManagerInProgress) {
      //prompt question to add another employee
      const addAnotherManagerAnswer = await inquirer.prompt(addAnotherManager);

      console.log(addAnotherEmployeeAnswer);

      if (addAnotherManager === "true") {
        addAnotherManagerInProgress = false;
      }
    }
  }

  //   // function to generate user input answers to create html
  // const generateInputToHtml (managerAnswers,internAnswers,engineerAnswers,employeeRole) {
  //   return `<!DOCTYPE html>
  //       <html lang="en">
  //         <head>
  //           <meta charset="UTF-8" />
  //           <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //           <link rel="stylesheet" href="dist\assets\css\styles.css" />
  //           <title>Team Profile</title>
  //         </head>
  //         <body>
  //           <h1 class="teamName">${answers.teamName}</h1>

  //           <div class="card">
  //             <h2 class="employeeName">${answers.name}</h2>
  //             <h3 class="role">${returnQsDependingOnRole(
  //               answers.employeeRole
  //             )}</h3>
  //             <img src="dist\assets\img\icon.png" alt="avatar icon" class="img" />
  //             <div class="container">
  //               <h3 class="employeeInfo">${answers.email}</h3>
  //               <h3 class="employeeInfo">${answers.id}</h3>
  //               <h3 class="employeeInfo">${answers.additionalInfo}</h3>
  //             </div>
  //           </div>`;
  // }
};
init();

// //generateInputToHtml();
// //const confirmCard = (generateInputToHtml) => {

// //
// //])
// // .then((answer) => {
// //  console.log(answer);
// //});

// //if (addAnotherCard) {
// //  getCard();
// //} else {
// //generate user input to cards on html
// const html = generateInputToHtml(answers);
// //write generated html to file
// Fs.writeFileSync("Generated_index.html", html);
// //}
// //};
