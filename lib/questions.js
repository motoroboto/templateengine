const managerQuestions = [
    {
        name: 'employeeName',
        type: 'input',
        message: 'What is the name of the project manager?',
    },
    {
        name: 'employeeId',
        type: 'input',
        message: `What is the employees ID?`,
    },
    {
        name: 'employeeEmail',
        type: 'input',
        message: `What is the employees email address?`,
    },
    {
        name: 'employeeNumber',
        type: 'input',
        message: `What is the employees Phone Number?`,
    },
    {
        name: 'addMore',
        type: 'list',
        message: 'Do you need to add another team member?',
        choices: ["YES", "NO"],
    },

]

const employeeQuestions = [
    {
        name: 'employeeType',
        type: 'list',
        message: 'What Kind of Employee Would You Like to Add?',
        choices: ["Engineer", "Intern"],
    },
    {
        name: 'employeeName',
        type: 'input',
        message: 'What is the name of the employee?',
    },
    {
        name: 'employeeId',
        type: 'input',
        message: `What is the employees ID?`,
    },
    {
        name: 'employeeEmail',
        type: 'input',
        message: `What is the employees email address?`,
    },
    {
        name: 'github',
        type: 'input',
        message: `What is the employee's Github address?`,
        when: (answers) => answers.employeeType === 'Engineer',
    },
    {
        name: 'employeeSchool',
        type: 'input',
        message: `What School does this employee attend?`,
        when: (answers) => answers.employeeType === 'Intern',
    },
    {
        name: 'addMore',
        type: 'list',
        message: 'Do you need to add another team member?',
        choices: ["YES", "NO"],
    },
]









module.exports = {
    managerQuestions,
    employeeQuestions,
};