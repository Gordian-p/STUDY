var stringOne = 'freeCodeCamp is the best place to learn';
var stringTwo = 'frontend and backend development';

//charAt
var answ1 = stringOne.charAt(1);  // NOTE: it is the same as stringOne[1];
console.log(answ1);

// charCodeAt
var answ2 = stringOne.charCodeAt(1); //return unicode character
console.log(answ2);

//concat()
var answ3 = stringOne.concat(stringTwo); // join of 2 string or even more
console.log(answ3);

// startWith
var answ = stringOne.startsWith('free');
console.log(answ);

//endsWith
var answ4 = stringOne.endsWith('learn');
console.log(answ4);

// includes
var answ5 = stringTwo.includes('end');
console.log(answ5);

// indexOf
var answ6 = stringTwo.indexOf('e'); // it will return the first index if their two similar value
console.log(answ6);

// lastIndexOf
var answ7 = stringTwo.lastIndexOf('e'); // it will return the last index if their two similar value
console.log(answ7);

// match()

// replace

// repeat
var answ8 = stringTwo.repeat(2);
console.log(answ8);

// search
var answ9 = stringTwo.search('e');
console.log(answ9);

//split
var answ10 = stringTwo.split(' '); // it split into array according to what u want to be split of if its a space or a comma;
console.log(answ10);

// slice
var answ11 = stringTwo.slice(2,4); // return index of 2 and 3 only
console.log(answ11);

// substr()
var answ12 = stringTwo.substr(2,4); // starting at index 2 and counting four character
console.log(answ12);

// substring()
var answ13 = stringTwo.substring(2,4); // note it is the same as slice
console.log(answ13);

// toLowerCase()
var answ13 = stringTwo.toLowerCase();
console.log(answ13);

// toUpperCase()
var answ14 = stringTwo.toUpperCase();
console.log(answ14);

// trim()
var stringTrim = '     subscribe  ';
console.log(stringTrim);
console.log(stringTrim.trim());
