// Array

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(2018, 2019, 2020);

// PICK ONE IN ARRAY

console.log(friends[0]); // MICHAEL
console.log(friends[2]); // PETER

// LENGTH ARRAY

console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // PICK THE LAST ONE IN ARRAY 'PETER'

// REPLACE VALUES

friends[2] = 'Juan'; // 'PETER' => 'JUAN'
console.log(friends);

// ARRAY CAN CONTAINS MORE DATA TYPES

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2025 - 1996, 'Teacher', friends];

console.log(jonas);

console.log('---------------------')

// EXERCISES

const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const years = [1996, 1997, 1998, 1999, 2000, 2001];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);

