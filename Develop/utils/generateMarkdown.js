// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const yourLicense = ''
  if (licenseType === 'MIT') {
    yourLicense = `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'Apache 2.0') {
    yourLicense = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
  } else if (licenseType === 'Boost 1.0') {
    yourLicense = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseType = license.license;
  const yourLink = ''
  if (licenseType === 'MIT') {
    yourLink = `(https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'Apache 2.0') {
    yourLink = `(https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseType === 'Boost 1.0') {
    yourLink= `(https://www.boost.org/LICENSE_1_0.txt)`
  } else {
    license.license = "N/A"
  }
  return yourLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  ![License](https://img.shields.io/badge/License-${data.licensing}-lightblue.svg)

  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[Testing](#testing)
  -[Questions](#questions)

  ### Description:
  ${data.description}

  ### Installation:
  ${data.installation}

  ### Usage:
  ${data.usage}

  ### Contribution
  ${data.contribution}

  ### Testing 
  ${data.testing}

  ### License
  ${data.licensing}
  ${data.renderLicenseLink}

  ### Questions
  -Github: [${data.github}](https://github.com/${data.github})
  -Email: ${data.email}
`;
}

module.exports = generateMarkdown;
