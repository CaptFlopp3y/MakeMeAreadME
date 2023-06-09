// Making function for a return of the license badge and if no license return an empty string
function renderLicenseBadge(license) {
    let badgeL = '' 

    switch(license){
      case 'Apache 2.0':
        badgeL = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
        break;
  
      case 'BSD 3-Clause':
        badgeL = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'
        break;
  
      case 'GPL 3.0':
        badgeL = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
        break;
  
      case 'ISC':
        badgeL = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
        break;
  
      case 'MIT':
        badgeL = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
        break;
        default:
        badge = '';
    }
  
    return badgeL;
}

//function to return the license link

function renderLicenseLink(license) {
    let link = ''
    switch(license) {
        case "Apache 2.0":
        link = "https://opensource.org/licenses/Apache-2.0";
        break;
  
      case "BSD 3-Clause":
        link = "https://opensource.org/licenses/BSD-3-Clause";
        break;
  
      case "GPL 3.0":
        link = "https://www.gnu.org/licenses/gpl-3.0";
        break;
  
      case "ISC":
        link = "https://opensource.org/licenses/ISC";
        break;
  
      case "MIT":
        link = "https://opensource.org/licenses/MIT";
        break;
        default:
        link = '';
    }
    return link;
  }

  // function that license section of the Readme

  function renderLicenseSection(license) {
    let licSection = ''
  
    if (license != 'N/A') {
      licSection = '## License'
      licSection += 'This program/application uses the ' + '[' + license + ']('+ renderLicenseLink(license) +') license.';
      console.log (license)
    }
    console.log (licSection)
    return licSection;

  }

  // function of the markdown

  function generateMarkdown(data) {
    for (const key in data){
        if (!data[key]){
            data[key] = 'N/A';
        }
    }
  

  // next is table of contents
let tabOC =`
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
`

if (data.licenses !== "N/A"){
  tabOC += `* [License](#license)`;
}

tabOC += `
* [Tests](#tests)
* [Questions](#questions)`;

// now to build the whole template literal 
return `
# ${data.title} ${renderLicenseBadge(data.licenses)}

## Description 
${data.description}

## Table of Contents
${tabOC}

## Installation 
${data.installation}

## Usage 
${data.usage}

## Credits 
${data.credit}

${renderLicenseSection(data.licenses)}

## Tests 
${data.test}

## Questions 
Find me at my GitHub: [${data.github}](https://github.com/${data.github}). 
If you have any further questions, you can reach out here: ${data.email}.
`;
  }
module.exports = generateMarkdown; 