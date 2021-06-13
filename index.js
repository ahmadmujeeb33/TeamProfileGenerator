const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type:'input',
            message:'What is the team managers name?',
            name:'managername',
        },
        {
            type:'input',
            message:'What is the team managers id?',
            name:'managerid',
        },
        {
            type:'input',
            message:'Whas is team managers email',
            name:'manageremail',
        },

        
        {
            type:'input',
            message:'What is the team managers office number',
            name:'managerofficenumber',
        },

        {
            type:'input',
            message:'What is the team managers office number',
            name:'managerofficenumber',
        },

        {
            type:'list',
            message:'Which type of team member would you like to add',
            name:'license',
            choices: ['Engineer', 'Intern'],
        },

    ])