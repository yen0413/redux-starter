const numbers = [1, 2, 3];

//Adding(add 4 between 2 and 3)
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added); //[1, 4, 2, 3]

//Removing(remove 2)
const removed = numbers.filter(n => n !== 2);
console.log(removed) //[1, 3]


//Updating(update 2 to 20)
const updated = numbers.map(n => n === 2 ? 20 : n);
console.log(updated) //[1, 20, 3]