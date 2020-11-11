const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const employeeList = [];
const Constructors = {
    Manager,
    Engineer,
    Intern,
};


const init = () => {
    buildEmployee("Manager");
};

const buildEmployee = async (key) => {
    const result = await inquirer.prompt(questions[key]);
    const employee = new Constructors[key](
        result.employeeName,
        result.employeeId,
        result.employeeEmail,
        result.specific,
    );
    employeeList.push(employee);
    moreEmployees();
};

const moreEmployees = async () => {
    const { more } = await inquirer.prompt(questions.moreEmployees);
    if (more === "NO") return buildHTML();
    selectRole();
};

const selectRole = async () => {
    const { role } = await inquirer.prompt(questions.selectRole);
    buildEmployee(role);
};

const buildHTML = async () => {
    const HTML = render(employeeList);
    try {
        fs.writeFileSync(outputPath, HTML);
    } catch (error) {
        console.log(error.message);
    }
};


init();