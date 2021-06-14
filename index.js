const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./src/generate_markdown');
const getmanagerInfo = require('./lib/Manager');
const getEngineerInfo = require('./lib/Engineer');
const getInternInfo = require('./lib/Intern');
let allData = [];




inquirer
    .prompt([
        {
            type:'input',
            message:'What is the team managers name?',
            name:'name',
        },
        {
            type:'input',
            message:'What is the team managers id?',
            name:'id',
        },
        {
            type:'input',
            message:'Whas is team managers email',
            name:'email',
        },

        
        {
            type:'input',
            message:'What is the team managers office number',
            name:'officenumber',
        },

       
   ])

    .then((data) =>{
        const manager =  new getmanagerInfo.Manager(data.name,data.id,data.email,data.officenumber);
        allData.push(manager);
        askQuestion();
        function askQuestion(){
            console.log("in hereeee");
            inquirer.prompt([{type: 'list',name: 'typemember', message: "What type of team member would you like to add",choices:['Engineer', 'Intern',"finish building team"]}]).then((response) => {
                if(response.typemember === "Engineer"){
                    askEngineer();
                }
                else if(response.typemember === "Intern"){
                    askIntern();
                }
                else{
                    console.log("rtiljdf");
                    console.log(allData);
                    let fullData = template.generateHTML(allData);
                    fs.writeFile('index.html', fullData, function (err) {
                        if (err) throw err;
                        console.log('Saved!');
                      });
                }               
            })
        } 

        
        let askEngineer = () =>{
            inquirer
                .prompt([
                    {
                        type:'input',
                        message:'What is an engineers name?',
                        name:'name',
                    },
                    {
                        type:'input',
                        message:'What is the engineers id?',
                        name:'id',
                    },
                    {
                        type:'input',
                        message:'Whas is engineers email',
                        name:'email',
                    },

                    {
                        type:'input',
                        message:'Whas is you engineers github username',
                        name:'username',
                    },
            
                ])

                .then((data) =>{
                    const engineer =  new getEngineerInfo.Engineer(data.name,data.id,data.email,data.username);
                    allData.push(engineer);
                    askQuestion();
                })
        }

        let askIntern = () =>{
            inquirer
            .prompt([
                {
                    type:'input',
                    message:'What is an interns name?',
                    name:'name',
                },
                {
                    type:'input',
                    message:'What is the interns id?',
                    name:'id',
                },
                {
                    type:'input',
                    message:'Whas is interns email',
                    name:'email',
                },

                {
                    type:'input',
                    message:'Whas is your interns school',
                    name:'school',
                },
        
            ])

            .then((data) =>{
                const intern =  new getInternInfo.Intern(data.name,data.id,data.email,data.school);
                allData.push(intern);
                askQuestion();
            })
        }

    })