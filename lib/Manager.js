var Employees = require("./Employees.js");

class Manager extends Employees{

    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
    }

    
}

module.exports = {
    Manager,
}
