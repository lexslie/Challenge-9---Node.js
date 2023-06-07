// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
    message: "What is the title of your project?",
    name: "Title",
    },
    {type: "input",
    message: "Provide a brief description of your project.",
    name: "Description",
    },
    {type: "input",
    message: "What is the application's installation process/instructions?",
    name: "Installation instructions",
    },
    {type: "input",
    message: "What information does the user need to know about usage of the application?",
    name: "Usage",
    },
    {type: "input",
    message: "What guidelines must the user follow when contributing to the project/application?",
    name: "Contributing",
    },
    {type: "input",
    message: "What instructions must the user follow when testing the application?",
    name: "Tests",
    },
    {type: "List",
    message: "Under which license is your application covered under?",
    choices: ["apache", "ms-pl", "BSD", "MIT"],
    name: "License",
    },
    {type: "input",
    message: "What is your Github username?",
    name: "Github username",
    },
    {type: "input",
    message: "What is your email address?",
    name: "Email address",
    },   
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
