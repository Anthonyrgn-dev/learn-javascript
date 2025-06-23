// BMI CALCULATOR

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI);
console.log(johnBMI);

markHigherBMI = markBMI > johnBMI;

if(markBMI > johnBMI) {
    console.log("Mark is higher BMI");
} else {
    console.log("John is higher BMI");
}

console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}.`)

