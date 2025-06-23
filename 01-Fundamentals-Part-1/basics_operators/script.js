// MATH OPERATORS

const now = 2025;
const ageAnthony = now - 1996;
const ageJuan = now - 2005;

console.log(ageAnthony, ageJuan);
console.log(ageAnthony * 2, ageJuan / 2, 2 ** 3); // 2 ** 3 means to the power of 3 = 2 * 2 * 2 = 8

const firstName = "Anthony";
const lastName = "Garcia";

console.log(firstName + " " + lastName);

// ASSIGNMENT OPERATORS

let x = 10 + 20; // 30
x += 10; // 40
x *= 4; // 160
x++; // 161
x--; // 160
x--; // 159

console.log(x);

// Comparison operators

console.log(ageAnthony > ageJuan); // <, >, >=, <=
console.log(ageAnthony <= 18);

const isFullAge = ageAnthony >= 18;

console.log(now - 1996 > now - 2005);

console.log('-----------------------------------------------');

// OPERATOR PRECEDENCES

const averageAge = (ageAnthony + ageJuan) / 2;

console.log(ageAnthony, ageJuan, averageAge);


