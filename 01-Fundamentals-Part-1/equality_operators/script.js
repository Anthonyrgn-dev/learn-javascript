
const age = '18';

if (age === 18) {
    console.log(`You just became an adult (Strict Equality)`);
}

if (age == 18) {
    console.log(`You just became an adult (Loose Equality)`);
}

const favouriteNumber = Number(prompt('What is your favourite number?'));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber === 28) {
    console.log('You are my favourite number');
} else if (favouriteNumber === 29) {
    console.log('You are my favourite number');
} else if (favouriteNumber === 30) {
    console.log('You are my favourite number');
} else {
    console.log('You are not my favourite number');
}

if (favouriteNumber !== 28) {
    console.log('You are not my favourite number (different)');
}