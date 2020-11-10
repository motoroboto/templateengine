const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const mainTemplate = fs.readFileSync('./templates/main.html', 'utf8');
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

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
