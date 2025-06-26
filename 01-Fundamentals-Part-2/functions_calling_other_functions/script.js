'use strict';

function cutFruitPieces(fruit){
    return fruit * 4;
}


function fruitProcessor(apples, oranges){
    const applesPieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applesPieces} pieces of apples and ${orangesPieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(5, 2));

// REVIEWING FUNCTIONS

const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} is already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1996, 'Sarah'));
console.log(yearsUntilRetirement(1990, 'John'));
