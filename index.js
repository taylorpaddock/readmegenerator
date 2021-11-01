// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const createMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'user_name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'github_username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'In a short description describe the what, why and how of this project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and an example for use of this project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List any of the collaborators or links used for this project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for you application. Then provide how to run them.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you wish to use for your project?',
        choices: ['MIT', 'AGPL v3', 'GPL v3', 'LGPL v3', 'MPL 2.0', 'Apache 2.0', 'Boost 1.0', 'Zlib', 'None']
    },
])

.then((response) => {
    const data = createMarkdown(response);
    fs.writeFile("READMEgenerator.md", data, (err) =>
        err ? console.error(err) : console.log('Markdown succesfully')
    );
});
