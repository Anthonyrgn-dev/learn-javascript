// CONDITIONAL TERNARY OPERATOR

age = 15;

const drink = age >= 18 ? 'drink' : 'no drink';
console.log(drink);

let drink2;

if (age >= 18) {
  drink2 = 'drink';
} else {
  drink2 = 'no drink';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`)