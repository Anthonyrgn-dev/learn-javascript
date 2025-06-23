
const age = 10;

if (age >= 18){
    console.log("You can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young to drive. She needs ${yearsLeft} more years.`);
}

const birthYear = 2001;
let century;

if (birthYear <= 2000 ){
    century = 20;
} else {
    century = 21;
}

console.log(century);