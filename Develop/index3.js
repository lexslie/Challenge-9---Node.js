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
    {type: "list",
    message: "Under which license is your application covered?",
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


// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
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
  
        let readmeContent = `# ${title}\n\n`;
        readmeContent += `## Description\n\n${description}\n\n`;
        readmeContent += `## Installation\n\n${installation}\n\n`;
        readmeContent += `## Usage\n\n${usage}\n\n`;
        readmeContent += `## Contributors\n\n${contributors}\n\n`;
        readmeContent += `## Tests\n\n${tests}\n\n`;
        readmeContent += `## License\n\n${license}\n\n`;
        readmeContent += `## Username\n\n${username}\n\n`;
        readmeContent += `## Email\n\n${email}\n\n`;

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
