// Pair or not

const isPair = function(number) {
    const result = number % 2 === 0;
    console.log(`${number} est ${result ? 'pair' : 'impair'}`);
    return result;
}

console.log(isPair(4));


console.log(`-------------------------`)

const plusGrand = function(a, b) {
    if (a > b) {
        return a;
    } else  {
        return b;
    }
}

console.log(plusGrand(6, 5));

// const plusGrand = (a, b) => a > b ? a : b;

console.log(`--------------------------`);

const fizzBuzz = function (){
    for (let i = 1; i < 51; i++){
        if (i % 3 === 0) {
            console.log(`Fizz`);
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(`FizzBuzz`);
        } else if (i % 5 === 0) {
            console.log(`Buzz`);
        } else {
            console.log(`${i}`);
        }
    }
}

fizzBuzz();

// for (let i = 1; i <= 50; i++) {
//     let output = '';
//     if (i % 3 === 0) output += 'Fizz';
//     if (i % 5 === 0) output += 'Buzz';
//     console.log(output || i);
// }

console.log(`---------------------------`);

const sumPairs = function() {
    let sum = 0

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
        }
    }

    return `Result is ${sum}`;
}
console.log(sumPairs());

// const sumPairs = function() {
//     let sum = 0;
//
//     for (let i = 2; i <= 100; i += 2) {
//         sum += i;
//     }
//
//     return sum;
// }

console.log(`-------------------`);

const compteVoyelles = function(arr) {
    const voyelles = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (voyelles.includes(arr[i])) {
            counter++;
        }
    }

    return counter;
}

console.log(compteVoyelles(['a', 'e', 'i']));

// const compteVoyelles = arr => arr.filter(l => ['a','e','i','o','u'].includes(l)).length;

console.log(`------------------------`);

const findMax = function(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([1, 34, 24, 5]));

console.log(`------------------------`);

const user = {
    nom: 'Bukayo Saka',
    age: 25,
    email: 'bukayo.saka@icloud.com',
    sePresenter: function () {
        return `Bonjour, je m'appelle ${this.nom}, j'ai ${this.age} ans et mon email est ${this.email}.`;
    }
}

console.log(user.sePresenter());

console.log(`---------------------------`);

const annuaire = {};

const addContact = function(name, number) {
    annuaire[name] = number;
}

addContact('Bukayo', '0613538675');
addContact('Martin', '0623537615');

console.log(annuaire);

console.log(`-------------------------`);

const tasks = [];

const addTask = function(newTask) {
        tasks.push(newTask);
}

const displayTasks = function() {
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i} - ${tasks[i]}`);
    }
}

addTask('Allez faire les courses');
addTask('Revoir les fonctions JS');
addTask('Faire du sport');
displayTasks();


console.log(`----------------------`);

function analyseNotes(notes) {
    let sum = 0;


    for (let i = 0; i < notes.length; i++) {
        sum += notes[i];
    }

    let moyenne = sum / notes.length;
    let min = Math.min(...notes);
    let max = Math.max(...notes);

    return {
        moyenne: moyenne,
        max: max,
        min: min,
        nombreDeNotes: notes.length
    };
}

console.log(analyseNotes([12, 18, 19, 4, 10]));
















