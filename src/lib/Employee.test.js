const inquirer = require("inquirer");
const { getEmployeeInfo } = require(".");

describe("employeeQuestions", () => {
  // test blocks for each question in employee cases
  test("should return the expected name", async () => {
    const spy = jest.spyOn(inquirer, "prompt").mockResolvedValue({
      employeeFullName: "John Smith ",
    });
    const expected = "John Smith";
    const actual = await getEmployeeInfo;

    expect(actual).toEqual(expected);
  });

  test("should return the expected id", async () => {
    const spy = jest.spyOn(inquirer, "prompt").mockResolvedValue({
      employeeId: "Id ",
    });
    const expected = "id";
    const actual = await getEmployeeInfo;

    expect(actual).toEqual(expected);
  });

  test("should return the expected email", async () => {
    const spy = jest.spyOn(inquirer, "prompt").mockResolvedValue({
      employeeEmail: "johnsmith@email.co.uk ",
    });
    const expected = "johnsmith@email.co.uk";
    const actual = await getEmployeeInfo;

    expect(actual).toEqual(expected);
  });

  test("should return the role of employee", async () => {
    const spy = jest.spyOn(inquirer, "prompt").mockResolvedValue({
      employeeRole: "Engineer ",
    });
    const expected = "Engineer";
    const actual = await getEmployeeInfo;

    expect(actual).toEqual(expected);
  });
});
