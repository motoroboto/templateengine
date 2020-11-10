const basicQuestions = (role) => [
    {
        name: 'employeeName',
        type: 'input',
        message: `What is the name of the ${role}?`,
    },
    {
        name: 'employeeId',
        type: 'input',
        message: `What is the ${role}'s ID?`,
    },
    {
        name: 'employeeEmail',
        type: 'input',
        message: `What is the ${role}'s email address?`,
    },
];


module.exports = {
    Manager: [
        ...basicQuestions("Manager"),
        {
            type: "input",
            message: "What is the Manager's office number?",
            name: "specific",
        },
    ],
    Engineer: [
        ...basicQuestions("Engineer"),
        {
            type: "input",
            message: "What is the Engineer's GitHub?",
            name: "specific",
        },
    ],
    Intern: [
        ...basicQuestions("Intern"),
        {
            type: "input",
            message: "What is the Intern's school?",
            name: "specific",
        },
    ],
    moreEmployees: {
        name: "more",
        type: "list",
        message: "Do you need to add another employee?",
        choices: ["YES", "NO"],
    },

    selectRole: {
        name: "role",
        type: "list",
        message: "What Employee would you like to add?",
        choices: ["Engineer", "Intern"],
    },
};