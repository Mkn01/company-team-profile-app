const inquirer = require("inquirer");
const Employee = require("./Employee.js");

class Engineer {
  constructor({ name, id, additionalInfo, email }) {
    this.id = id;
    this.additionalInfo = additionalInfo;
    this.name = name;
    this.email = email;
  }

  createCard() {
    return `<div class="card">
    <h2 class="employeeName">${this.name}</h2>
    <h3 class="role">Engineer</h3>
    <img src="dist/assets/img/icon.png" alt="avatar icon" class="img" />
    <div class="container">
      <h3 class="employeeInfo">${this.id}</h3>
      <button class="SendEmail">
          <a href="mailto:${this.email}">Send Email</a>
        </button>
      
        <a href="${this.additionalInfo}">
          <img
            src="dist/assets/img/GitHub-Mark-32px.png"
            alt="gitHub icon"
            class="employeeInfoIcon"
          />
        </a>
    </div>
  </div>`;
  }
}

const getEngineerInfo = [
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
  {
    type: "input",
    message: "Please enter Employees full name",
    name: "name",
  },

  {
    type: "input",
    message: "Please enter Employees email address",
    name: "email",
  },
];

module.exports = {
  getEngineerInfo,
  Engineer,
};
