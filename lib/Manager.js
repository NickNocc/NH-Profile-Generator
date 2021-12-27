const Employee = require("./Employee");

class Manager extends Employee {
    // Same as the other ones excepct office number
    constructor(name, id, email, officeNo) {
        super(name, id, email);
        this.role = "Manager";
        this.officeNo = officeNo;
    }
}

module.exports = Manager;