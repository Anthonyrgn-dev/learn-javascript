'use strict';

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log( calcAverage(1, 2, 3));

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65, 54,49 );

console.log(scoreDolphins);
console.log(scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win the trophy! ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win the trophy! ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log(`No one wins the trophy!`);
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));