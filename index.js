 const fs = require('fs');
 const inquirer = require (`inquirer`);


 const employeePrompt = () => {
    return inquirer.prompt([
        {
            type: `checkbox`,
            name: `roleSelect`,
            message: `Please select your position`,
            choices: [`Manager`, `Engineer`, `Intern`]
        },
        {
            type: `input`,
            name: `empName`,
            message: `Please input your legal name`
        },
        {
            type: `input`,
            name: `empId`,
            message: `Please enter your employee ID`
        },
        {
            type: `input`,
            name: `empMail`,
            message: `Please enter your email`
        },
        {
            type: `input`,
            name: `offNum`,
            message: `Please enter your office number`,
            when: ({ roleSelect }) => roleSelect == `Manager`  
        },
        {
            type: `input`,
            name: `gitHub`,
            message: `Please enter your GitHub account`,
            when: ({ roleSelect }) => roleSelect == `Engineer`
        },
        {
            type: `input`,
            name: `school`,
            message: `Please enter your current school`,
            when: ({ roleSelect }) => roleSelect == `Intern`
        },
        {
            type: `confirm`,
            name: `addEmployee`,
            message: `Would you like to add another employee?`,
            default: false
        },
    ]);
 };