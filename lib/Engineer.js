var Employees = require("./Employees.js");
class Engineer extends Employees{

    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }

    getGihub(){
        return this.github;
    }

    getRole(){
        return 'Engineer'
    }
}

module.exports = {
    Engineer,
}