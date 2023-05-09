// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Make sure all text is entered. 
function validateInput(input){
    if (input != "") {
        return true;
    }
    else {
        return "Required Input and cannot be left blank.";
    }
}
 
// Making an array of questions for the Input
const questions = [
{
    type: "input",
    name: "title",
    message: "What is your prject name or title?",
    validate: validateInput
},
{
    type: "input",
    name: "description",
    message: "What is your prject description?",
    validate: validateInput
},
{
    type: "input",
    name: "installation",
    message: "Steps to install your project?",
    validate: validateInput
},
{
    type: "input",
    name: "credit",
    message: "Any third party services or collaborators?",
    validate: validateInput
},
{
    type: "input",
    name: "licenses",
    message: "Please select the license applicable to your project:",
    choices: licenses,
    validate: validateInput
},
{
    type: "input",
    name: "github",
    message: "What's your GitHub username?",
    validate: validateInput
},
{
    type: "input",
    name: "email",
    message: "Good email to be reached at if anyone wants to contact you?",
    validate: validateInput
},
];

// The function for the README file
function writeToFile (data)
{
    const genFile = "./outPut/ReadMeGen"
    
    fs.writeFile(
        genFile, generateMarkdown(data), function(err){
            err ? console.log(err) : console.log("GREAT! " + genFile + " created.")
        });
}

// Function top initialize the app 
function initialize() {
    inquirer.prompt(questions).then(data => writeToFile(data))
}

initialize();