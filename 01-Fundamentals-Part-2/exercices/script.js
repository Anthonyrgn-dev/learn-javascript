/*
✅ 1. Calcul du prix final avec réduction
Crée une fonction calculPrixFinal(prix, reduction)
qui prend un prix et un pourcentage de réduction, et retourne le prix final à payer.
Exemple : calculPrixFinal(100, 20) → 80
 */

function calculPrixFinal(prix, reduction) {
    return prix - (prix * reduction / 100);
}

const prixFinal = calculPrixFinal(76, 20);

console.log(prixFinal);

/*
✅ 2. Déterminer l’admissibilité à un permis
Écris une fonction estAdmissible(age) qui retourne "Admis" si la personne a 18 ans ou plus, sinon "Refusé".
Exemple : estAdmissible(20) → "Admis"
*/

const estAdmis = function (age) {
    if (age >= 18) {
        return `admis`;
    } else {
        return `non admis`;
    }
}

console.log(estAdmis(15));

const plusGrand = function (a, b, c) {
    return a > b && a > c ? a : b > c ? b : c;
}
console.log(plusGrand(1, 45, 3));

/*function plusGrand(a, b, c) {
    return Math.max(a, b, c);
} */


function nombresPairs(tab) {
    return tab.filter(function (nombre) {
        return nombre % 2 === 0;
    });
}

console.log(nombresPairs([1, 2, 3, 4, 5, 6]));


const donnerMention = function (note) {
    if (note >= 16){
        return `Excellent`;
    } else if (note >= 12){
        return `Bien`;
    } else if (note >= 10){
        return `Passable`;
    } else {
        return `Echec`
    }
}
console.log(donnerMention(14));

console.log(`--------------------------------`)


function sayHello(name) {
    return `Hello ${name}`;
}

console.log(sayHello('Anthony'));

console.log(`--------------------------------`)


function isPositive(number) {
    if (number >= 0) {
        return `Positive`;
    } else {
        return `Negative`;
    }
}

console.log(isPositive(10));
console.log(isPositive(-10));

console.log(`--------------------------------`)

function addition (a, b) {
    return a + b;
}

console.log( addition(5, 2))

console.log(`--------------------------------`)

function isPair(number) {
    if (number % 2 === 0) {
        return `Pair`;
    } else {
        return `Impair`;
    }
}

console.log(isPair(4));
console.log(isPair(5));

console.log(`-----------------------------`);

function listName(tab) {
    const array = ['Anthony', 'John', 'Jane'];

    return `Les prenoms sont : ${array[0]}, ${array[1]} et ${array[2]}}`
}

console.log(listName());


console.log(`-------------------------`)

const person = {
    firstName: 'Anthony',
    age: 2025 - 1996,
    city: 'Bordeaux'
}

console.log(`Je m'appelle ${person.firstName}, j'ai ${person.age} et j'habite a ${person.city}`);

console.log(`-------------------------`)

const hideProperty = {marque: 'Toyota', annee: 2020, prix: 100000};

function showProperty(obj, cle) {
    return obj[cle];
}

console.log(showProperty(hideProperty, 'marque'));

console.log(`-------------------------`);

function changeCity (person, city) {
    person.city = city;
}

changeCity(person, 'Paris');

console.log(person);

console.log(`-------------------------`);

function addEmail(person, email){
    person.email = email;
    return person;
}

console.log(addEmail(person, 'ringeisen.anthony@icloud.com'));

console.log(person)

console.log(`-------------------------`);

function aboutMe (person) {
    return `Je m'appelle ${person.firstName}, j'ai ${person.age} ans et j'habite a ${person.city}.`;
}

console.log(aboutMe(person));

console.log(`-------------------------`);

const myCar = {
    marque: 'Toyota',
    annee: 2020,
    prix: 100000,
    description: function () {
        return `Ceci est une voiture de marque ${this.marque} des annees ${this.annee} et a un prix de ${this.prix} euros.`;
    },

    changePrice: function (nouveauPrix) {
        this.prix = nouveauPrix;
        return this.description();
    }
}

myCar.changePrice(30000000);
console.log(myCar.description());


// UNDEFINED ARROW FUNCTION

const car = {
    marque: 'Tesla',
    description: () => {
        return `Marque : ${this.marque}`;
    }
};

console.log(car.description());
