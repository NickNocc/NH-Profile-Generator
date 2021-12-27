const fs = require('fs');
const inquirer = require (`inquirer`);
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { createManagerCards, createEngineerCards, createInternCards } = require('./dist/src/cards')
const buildHTML = require('./dist/src/html')
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));


 const employeePrompt = () => {
    return inquirer.prompt([
        {
            type: `list`,
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
            type: `loop`,
            name: `addEmployee`,
            message: `Would you like to add another employee?`,
            default: false,
            questions: [
                {
                    type: `list`,
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
            ]
        },
    ]);
 };

 employeePrompt()
    .then(resData => {
        let firstEntry = [];
        let employees = resData.addEmployee;
        if (resData.offNum){
            firstEntry = [{
                roleSelect: resData.roleSelect,
                empName: resData.empName,
                empId: resData.empId,
                empMail: resData.empMail,
                offNum: resData.offNum 
            }]
        } else if (resData.gitHub) {
            firstEntry = [{
                roleSelect: resData.roleSelect,
                empName: resData.empName,
                empId: resData.empId,
                empMail: resData.empMail,
                gitHub: resData.gitHub 
            }]
        } else {
            firstEntry = [{
                roleSelect: resData.roleSelect,
                empName: resData.empName,
                empId: resData.empId,
                empMail: resData.empMail,
                school: resData.school 
            }]
        }
        employees.push(firstEntry[0]);

        let managers = [];
        let engineers = [];
        let interns = [];

        for (let i = 0; i < employees.length; i++) {
            let emp = employees[i]
            if (emp.roleSelect == "Manager") {
                const manager = new Manager(emp.empName, emp.empId, emp.empMail, emp.offNum);
                managers.push(manager);
            } else if (emp.roleSelect == "Intern") {
                const intern = new Intern(emp.empName, emp.empId, emp.empMail, emp.school);
                interns.push(intern);
            } else if (emp.roleSelect == "Engineer") {
                const engineer = new Engineer(emp.empName, emp.empId, emp.empMail, emp.gitHub);
                engineers.push(engineer);
            }
        }
        const managerDeck = createManagerCards(managers);
        const engineerDeck = createEngineerCards(engineers);
        const internDeck = createInternCards(interns);
        const pageBuilder = buildHTML(managerDeck, engineerDeck, internDeck);

        fs.writeFile('index.html', pageBuilder, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Page Built!");
            }
        })
    })
    .catch(err => {
        console.log(err);
    })