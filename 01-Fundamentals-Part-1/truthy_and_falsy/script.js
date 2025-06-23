// 5 Falsy values 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 100;

if (money) {
    console.log('Money is present');
} else {
    console.log('Money is not present');
}

let height = 0;

if (height) {
    console.log('Height is present');
} else {
    console.log('Height is not present');
}