const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
const fs = require('fs');
// array of questions for user
inquirer.prompt([
    {
        name: "name",
        message: "What is your GitHub username?",
        type: "input",
    },
    {
        name: "email",
        message: "What is your email address?",
        type: "input",
    },
    {
        name: "projectName",
        message: "What is your project name?",
        type: "input",
    },
    {
        name: "projectDescription",
        message: "Please write a short description of your project:",
        type: "input",
    },
    {
        name: "license",
        message: "What kind of license should your project have?",
        type: "input",
    },
    {
        name: "dependencies",
        message: "What command should be run to install dependencies?",
        type: "input",
    },
    {
        name: "commandTest",
        message: "What command should be run to run tests?",
        type: "input",
    },
    {
        name: "repoInfo",
        message: "What does the user need to know about using the repo?",
        type: "input",
    },
    {
        name: "repoContribution",
        message: "What does the user need to know about contributing to the repo?",
        type: "input",
    }
]).then(function (response) {
    fs.writeFile("./README.md", markdown(response),function (err) {
        if (err) {
            console.log("Error:", err);
        } else {
            console.log("Answer saved sucessfully!");
        }
    })
});


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
}

// function call to initialize program
init();
