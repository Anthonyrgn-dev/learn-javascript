'use strict';

// 1 SELECTING AND MANIPULATING DOM

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '👍 Correct Number !';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value = 23); */


console.log(`========================`);

// 2 HANDLING CLICK EVENT

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof  guess);

    if(!guess) {
        document.querySelector('.message').textContent = "🚫 Please enter a valid number";
    }

})
