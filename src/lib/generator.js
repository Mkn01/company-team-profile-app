const generateEmployeeCards = (employeeCards) =>
  employeeCards.map((employee) => employee.createCard()).join("");
const generateHtml = (employeeCards, teamName) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="dist/assets/css/styles.css" />
      <title>Team Profile</title>
    </head>
    <body>
      <div>
        <h1 class="teamName">${this.teamName}</h1>
        ${generateEmployeeCards(employeeCards)}
      </div>
      <script src="./src/index.js"></script>
    </body>
  </html>
  `;
};
module.exports = {
  generateHtml,
};
