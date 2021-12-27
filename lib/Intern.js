const Employee = require("./Employee");

class Intern extends Employee {
    // Adds school to intern constructor and changes the role to intern
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
        this.role = "Intern"
    }

    getSchool() {
        return this.school
    }
}

module.exports = Intern;