// Making function for a return of the license badge and if no license return an empty string
function renderLicenseBadge(license) {
    let badgeL = '' 

    switch(license){
      default:
        badge = '';
  
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
  
    }
  
    return badgeL;
}