function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'MIT License':
      return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GNU GPLv3':
      return '![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'Apache License 2.0':
      return '![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'Eclipse Public License 2.0':
      return '![Eclipse Public License 2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)';
    case 'Mozilla Public License 2.0':
      return '![Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
    default:
      return '';
  }
}

function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache License 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'Eclipse Public License 2.0':
      return 'https://www.eclipse.org/legal/epl-2.0/';
    case 'Mozilla Public License 2.0':
      return 'https://www.mozilla.org/en-US/MPL/2.0/';
    default:
      return '';
  }
}

function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  if (!badge || !link) {
    return '';
  }

  return `## License\n\n${badge}\n\nThis project is licensed under the [${license}](${link}).`;
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Contact Me](#contact-me)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please feel free to contact me at [${data.contactEmail}](mailto:${data.contactEmail}) or visit my GitHub profile at [${data.githubUsername}](https://github.com/${data.githubUsername}).
  `;
}

module.exports = generateMarkdown;