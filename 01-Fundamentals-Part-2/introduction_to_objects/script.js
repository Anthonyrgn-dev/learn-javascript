const jonas = {
    firstName: 'Anthony',
    lastName: 'Ringeisen',
    age: 2025 - 1996,
    job: 'Delivery',
    friends: ['Michael', 'John', 'Jane']
};

console.log(jonas);
console.log(jonas.firstName);
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Anthony?');

/* if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Anthony does not have this information');
} */

jonas.location = 'Germany';
jonas['twitter'] = '@AnthonyRingeisen';

console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called 
${jonas.friends[0]}.`)