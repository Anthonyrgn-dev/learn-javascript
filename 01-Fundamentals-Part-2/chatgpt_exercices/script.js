'use strict';

function saluer (){
    console.log('Bienvenue !')
}

saluer();

/* function addition(a, b){
    return a + b;
}

addition(3, 7); */

const addition =  (a, b) => {
    return a + b;
}

console.log(addition(5, 2));

const estPair = (a) => {
    if (a % 2 === 0) {
        console.log('Pair');
        return a;
    } else {
        console.log('impair');
        return a;
    }
}

console.log(estPair(4));


const signeDuNombre = (x) => {
    if (x > 0){
        console.log('Positif');
    } else if (x < 0){
        console.log('Negatif');
    } else {
        console.log('Zero');
    }
}

console.log(signeDuNombre(-5));

// ---------------
/*const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log( calcAverage(1, 2, 3));

const studentA = calcAverage(15,12,13);
const studentB = calcAverage(10,9,8);

const checkResult = function (studentA, studentB){
    if (studentA >= studentB + 5) {
        console.log(`Student A wins the trophy! ${studentA} vs. ${studentB}`);
    } else if (studentB >= studentA + 5) {
        console.log(`Student B wins the trophy! ${studentB} vs. ${studentA}`);
    } else {
        console.log(`No one wins the trophy!!!!`);
    }
}

console.log(checkResult(studentA, studentB)); */

// ----------------

'use strict';

// 1. calcAverage : arrow function (3 scores → moyenne)

const calcAverage = (a, b, c) => {
    return (a + b + c) / 3;
};

// 2. Moyennes :
const scoreLions = calcAverage(45, 39, 51);
const scoreTigers = calcAverage(47, 50, 38);
const scoreBears  = calcAverage(42, 42, 42);

// 3. Fonction checkClassement

const checkClassement = function (lions, tigers, bears) {
    if (lions > tigers && lions > bears) {
        console.log(`Lions win the trophy! ${scoreLions} vs. ${scoreTigers} vs. ${scoreBears}`);
    } else if (tigers > lions && tigers > bears) {
        console.log(`Tigers win the trophy! ${scoreTigers} vs. ${scoreLions} vs. ${scoreBears}`);
    } else if (bears > lions && bears > tigers) {
        console.log(`Bears win the trophy! ${scoreBears} vs. ${scoreLions} vs. ${scoreTigers}`);
    } else if (lions === tigers || lions === bears) {
        console.log(`No one wins the trophy!`);
    }
};
checkClassement(scoreLions, scoreTigers, scoreBears);

