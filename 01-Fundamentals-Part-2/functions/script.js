function logger(){
    console.log("Hello World");
}


// Calling / Running / Invoking function
logger();
logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5, 2);
console.log(appleOrangeJuice);


// FUNCTION DECLARATION

function calcAge1(birthYear){
    return 2025 - birthYear;
}

const age1 = calcAge1(1996);
console.log(age1)


//FUNCTION EXPRESSION

const calcAge2 = function(birthYear){
    return 2025 - birthYear;
}

const age2 = calcAge2(1996);
console.log(age2)

// ARROW FUNCTIONS

const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);


const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1996, 'Sarah'));
console.log(yearUntilRetirement(1990, 'John'));
