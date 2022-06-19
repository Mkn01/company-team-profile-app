const inquirer = require("inquirer");
const { getEmployeeInfo } = require("./lib/Employee.js");
const { getEngineerInfo } = require("./lib/Engineer.js");
const { getInternInfo } = require("./lib/Intern.js");
const { getManagerInfo } = require("./lib/Manager.js");

// generate questions
getEmployeeInfo();
// switch statement to generate different questions depending on role
const returnQsDependingOnRole = (employeeRole) => {
  switch (employeeRole) {
    case "Engineer":
      getEngineerInfo();
    case "Intern":
      getInternInfo();
    case "Manager":
      getManagerInfo();
  }
};

// function to generate user input answers to create html
const generateInputToHtml = (answers) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="dist\assets\css\styles.css" />
      <title>Team Profile</title>
    </head>
    <body>
      <h1 class="teamName">${answers.teamName}</h1>
  
      <div class="card">
        <h2 class="employeeName">${answers.name}</h2>
        <h3 class="role">${answers.employeeRole}</h3>
        <img src="dist\assets\img\icon.png" alt="avatar icon" class="img" />
        <div class="container">
          <h3 class="employeeInfo">${answers.email}</h3>
          <h3 class="employeeInfo">${answers.id}</h3>
          <h3 class="employeeInfo">${answers.additionalInfo}</h3>
        </div>
      </div>`;
};

//generate user input to cards on html
const html = generateInputToHtml(answers);
//write generated html to file
Fs.writeFileSync("Generated_index.html", html);
