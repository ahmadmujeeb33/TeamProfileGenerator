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