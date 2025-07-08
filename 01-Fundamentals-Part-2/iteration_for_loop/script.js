'use strict';

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

console.log(`---------------------`);


const arsenalPlayer = [
    'Bukayo Saka',
    'Right Forward',
     24,
     7,
    ['Odegaard', 'Martinelli', 'Saliba']
];

const types = [];

// console.log(arsenalPlayer);

for (let i = 0; i < arsenalPlayer.length; i++) {
    // Reading from jonas array
    console.log(arsenalPlayer[i]);

    //Filling types Array
    // types[i] = typeof arsenalPlayer[i];
    types.push(typeof arsenalPlayer[i]);
}
console.log(types);

console.log(`-----------------`);

const years = [1996, 2000, 2005, 1967, 1998];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2025 - years[i]);
}

console.log(years);
console.log(ages);

// Continue and break

console.log(`------ONLY STRING-----------`);

for (let i = 0; i < arsenalPlayer.length; i++) {

    if (typeof arsenalPlayer[i] !== 'string') continue;

    // Reading from jonas array
    console.log(arsenalPlayer[i]);
}

console.log(`-------- BREAK WITH NUMBERS-----------`);

for (let i = 0; i < arsenalPlayer.length; i++) {

    if (typeof arsenalPlayer[i] === 'number') break;

    // Reading from jonas array
    console.log(arsenalPlayer[i], typeof arsenalPlayer[i]);
}

