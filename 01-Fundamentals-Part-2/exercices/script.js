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

