const inquirer = require("inquirer");
const { getEmployeeInfo } = require("./lib/Employee.js");
const { getEngineerInfo } = require("./lib/Engineer.js");
//const getInternInfo = require("getInternInfo");
//const getManagerInfo = require("getManagerInfo");

// generate questions
getEmployeeInfo();
getEngineerInfo();

//console.log(answers);
