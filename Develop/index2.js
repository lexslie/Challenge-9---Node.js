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
// const description = 'This is a sample project.';
// const installation = 'To install this project, run the following command: `npm install myproject`.';
// const usage = 'To use this project, import it and call the necessary functions.';
// const contributors = 'John Doe, Jane Smith';
// const license = 'MIT License';

function generateReadme(title) {
  let readmeContent = `# ${title}\n\n`;
//   readmeContent += `## Description\n\n${description}\n\n`;
//   readmeContent += `## Installation\n\n${installation}\n\n`;
//   readmeContent += `## Usage\n\n${usage}\n\n`;
//   readmeContent += `## Contributors\n\n${contributors}\n\n`;
//   readmeContent += `## License\n\n${license}\n\n`;
  return readmeContent;
}

const readmeContent = generateReadme(title);

fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('README file has been generated successfully!');
});