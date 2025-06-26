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