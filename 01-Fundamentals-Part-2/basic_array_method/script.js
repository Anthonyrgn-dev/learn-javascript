// ARRAY METHOD

const friends = ['Michael', 'Steven', 'Peter'];

friends.push('Juan'); // Add an element in the end
friends.unshift('Jonas'); // Add an element in the beginning

console.log(friends);

friends.pop(); // REMOVE LAST ELEMENT
friends.pop();

friends.shift(); // REMOVE THE BEGINNING
console.log(friends)

console.log(friends.indexOf('Steven'), friends.indexOf('Bob')); // RETURN THE INDEX OF THE VALUES
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));