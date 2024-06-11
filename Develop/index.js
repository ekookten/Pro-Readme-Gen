const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const licenseOptions = [
    'MIT License',
    'GNU GPLv3',
    'Apache License 2.0',
    'Eclipse Public License 2.0',
    'Mozilla Public License 2.0'
];

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide the description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide how to install your project:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions and example of use:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select the license from the options:',
    choices: licenseOptions
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please explain how other people can contribute to your project:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide an example of how to run tests:'
  },
  {
    type: 'input',
    name: 'contactEmail',
    message: 'Please provide your contact email for further questions:'
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Please provide your GitHub username:'
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Successfully wrote to', fileName);
    }
  });
}

function init() {
  inquirer.prompt(questions)
    .then((data) => {
      const readmeContent = generateMarkdown(data);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
}

init();