'use strict';

// PROBLEM
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature
// amplitude. Keep in mind that sometimes there might be a sensor error".

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: Difference between highest and lowest temps.
// - How to compute max and min temperatures.
// - What is a sensor error? And what to do?


// 2) Breaking up into subproblem
// - How to ignore errors?
// - Find max value in a temp array
// - Find min value in a temp array
// - Subtract min from max amplitude and return it


const calcTempAmplitude = function (temps) {
    let max = temps[0]
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    return max - min;
}

const amplitude = calcTempAmplitude(temperatures);

console.log(amplitude);


// PROBLEM 2
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Merge 2 arrays.

// 2) Breaking up into subproblem
// - Merge 2 arrays

const calcAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if(typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    return max - min;

}

const amplitudeNew = calcAmplitudeNew([3, 5, 6], [2, 7, 4]);

console.log(amplitudeNew);