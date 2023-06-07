// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// Array of questions for user input
const questions = [
    {type: 'input',
    message: "What is the title of your project?",
    name: "title",
    },
    {type: "input",
    message: "Provide a brief description of your project.",
    name: "description",
    },
    {type: "input",
    message: "What is the application's installation process/instructions?",
    name: "installation",
    },
    {type: "input",
    message: "What information does the user need to know about usage of the application?",
    name: "usage",
    },
    {type: "input",
    message: "What guidelines must the user follow when contributing to the project/application?",
    name: "contributors",
    },
    {type: "input",
    message: "What instructions must the user follow when testing the application?",
    name: "tests",
    },
    {type: "list",
    message: "Under which license is your application covered?",
    choices: ["apache", "ms-pl", "BSD", "MIT"],
    name: "license",
    },
    {type: "input",
    message: "What is your Github username?",
    name: "username",
    },
    {type: "input",
    message: "What is your email address?",
    name: "email",
    },   
];


// Function to write README file
function writeToFile(fileName, readmeContent) {
    fs.writeFile(fileName, readmeContent, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`${fileName} has been generated.`);
    });
}


// Function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const { title, description, installation, usage, contributors, tests, license, username, email } = answers;
  
        const readmeContent = `
# ${title}

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributers
${contributors}

## Tests
${tests}

## License 
${license}

## GitHub Username
${username}

## Email
${email}
`;

        writeToFile('README.md', readmeContent, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log ('README has been generated successfully!');
        });
    })
    .catch(error => {
        console.error(error);
    });
}


// Function call to initialize app
init();
