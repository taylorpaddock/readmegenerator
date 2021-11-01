// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${encodeURI(license)} license](https://img.shields.io/badge/License-${encodeURI(license)}-yellow.svg))`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None') {
    return (
        `* License Link: https://opensource.org/licenses/${encodeURI(license)}`
    )
  }
  return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None') {
    return (
        ` # License
        This project is license under the ${encodeURI(license)} license
        `
    )
  }
  return `There were no licensed used`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.project} - ${answers.user_name}
${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

${renderLicenseSection(answers.license)}
${renderLicenseLink(answers.license)}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
- Find me on [Github](https//github.com/${answers.github_username})!
- For further information or questions, email me at ${answers.email}
`;
}

module.exports = generateMarkdown;
