/* ********** STRINGS ********** */
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
   return 2016 - year;
}
var johnAge = calcAge(yearOfBirth);

//ES5
console.log('This is ' + firstName +' '+lastName+'. He was born in ' + yearOfBirth + '.Today,he is ' + johnAge + ' years old.');

// ES6
// NOTE: using this sign `` means u want to use template literal
console.log(`This is ${firstName} ${lastName} . He was born in ${yearOfBirth} .Today,he is ${johnAge} years old.`);

let a = 'This';
console.log(a.includes('i'));
