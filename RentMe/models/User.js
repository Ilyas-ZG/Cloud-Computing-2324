class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.carsToRent = [];
        this.carsToLend = [];
    }
}

module.exports = User;
