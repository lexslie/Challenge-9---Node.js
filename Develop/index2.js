// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
const title = {
    type: "input",
    message: "What is the title of your project?",
    name: "Title",
};
const description = {
    type: "input",
    message: "Provide a brief description of your project.",
    name: "Description",
};
const installation = {
    type: "input",
    message: "What is the application's installation process/instructions?",
    name: "Installation instructions",
};
const usage = {
    type: "input",
    message: "What information does the user need to know about usage of the application?",
    name: "usage",
};
const contributors = {
    type: "input",
    message: "What guidelines must the user follow when contributing to the project/application?",
    name: "Contributing",
};
const tests = {
    type: "input",
    message: "What instructions must the user follow when testing the application?",
    name: "Tests",
};
const license = {
    type: "list",
    message: "Under which license is your application covered under?",
    choices: ["apache", "ms-pl", "BSD", "MIT"],
    name: "License",
};
const username = {
    type: "username",
    message: "What is your Github username?",
    name: "GitHub username",
};
const email = {
    type: "input",
    message: "What is your email address?",
    name: "Email address",
};


// Function to write README file
function generateReadme(title, description, installation, usage, contributors, tests, license, username, email) {
  let readmeContent = `# ${title}\n\n`;
  readmeContent += `## Description\n\n${description}\n\n`;
  readmeContent += `## Installation\n\n${installation}\n\n`;
  readmeContent += `## Usage\n\n${usage}\n\n`;
  readmeContent += `## Contributors\n\n${contributors}\n\n`;
  readmeContent += `## Tests\n\n${tests}\n\n`;
  readmeContent += `## License\n\n${license}\n\n`;
  readmeContent += `## Username\n\n${username}\n\n`;
  readmeContent += `## Email\n\n${email}\n\n`;
  return readmeContent;
}

const readmeContent = generateReadme(title, description, installation, usage, contributors, tests, license, username, email);


fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('README file has been generated successfully!');
});