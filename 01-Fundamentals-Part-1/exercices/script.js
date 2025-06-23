// EXERCICE 1 ------

let country = "France";
let continent = "Europe";
let population = 687898654

console.log(country, continent, population);

const isIsland = false;
const language = "French";


console.log(typeof(isIsland));
console.log(typeof(language));
console.log(typeof(population));
console.log(typeof(country));

// BASIC OPERATOR

//1
const halftPopulation = population / 2
console.log(halftPopulation);

//2
population++;
console.log(population);

//3
const finlandPopulation = 6000000;
console.log(finlandPopulation > population);

//4
const averagePopulation = 33000000;
console.log(averagePopulation > population)

//5
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language + '.';
console.log(description);

const newDescription = `${country} is in ${continent}, and its ${population} million people speak 
${language}.`
console.log(newDescription);



