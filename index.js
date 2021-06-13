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
       
   ])

    .then((data) =>{
        askQuestion();
        function askQuestion(){
            console.log("in hereeee");
            inquirer.prompt([{type: 'list',name: 'typemember', message: "What type of team member would you like to add",choices:['Engineer', 'Intern']}]).then((response) => {
                if(response.typemember === "Engineer"){
                    askEngineer();
                }
                else if(response.typemember === "Intern"){
                    askIntern();
                }               
            })
        } 

        
        let askEngineer = () =>{
            inquirer
                .prompt([
                    {
                        type:'input',
                        message:'What is an engineers name?',
                        name:' engineername',
                    },
                    {
                        type:'input',
                        message:'What is the engineers id?',
                        name:'engineerid',
                    },
                    {
                        type:'input',
                        message:'Whas is engineers email',
                        name:'engineeremail',
                    },

                    {
                        type:'input',
                        message:'Whas is you engineers github username',
                        name:'engineereusername',
                    },
            
                ])

                .then((data) =>{
                    askQuestion();
                })
        }

        let askIntern = () =>{
            inquirer
            .prompt([
                {
                    type:'input',
                    message:'What is an interns name?',
                    name:'internname',
                },
                {
                    type:'input',
                    message:'What is the interns id?',
                    name:'internid',
                },
                {
                    type:'input',
                    message:'Whas is interns email',
                    name:'internemail',
                },

                {
                    type:'input',
                    message:'Whas is your interns school',
                    name:'internschool',
                },
        
            ])

            .then((data) =>{
                askQuestion();
            })
        }

    })