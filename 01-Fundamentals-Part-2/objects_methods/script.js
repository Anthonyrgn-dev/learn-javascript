const anthony = {
    firstName: 'Anthony',
    lastName: 'Ringeisen',
    birthYear: 1996,
    job: 'Delivery',
    friends: ['Michael', 'John', 'Jane'],
    hasDriverLicense: false,

    /*calcAge: function (birthYear) {
        return 2025 - birthYear;
    } */

    /* calcAge: function () {
        console.log(this);
        return 2025 - this.birthYear;
    } */

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    aboutAnthony: function () {
        return `${this.firstName} is a ${this.calcAge()}-year-old ${this.job}, and he has a 
        ${this.hasDriverLicense ? 'driver\'s license' : 'no driver\'s license'}`;
    }
}

console.log(anthony.aboutAnthony());
console.log(anthony);

/// CHALLENGE
/// `Jonas is a 46-year-old teacher, and he has a driver's license`

