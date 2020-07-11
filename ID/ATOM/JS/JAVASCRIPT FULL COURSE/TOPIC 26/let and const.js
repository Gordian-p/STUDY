/* ******* LET ANS CONST ******* */

// EXMPLE 1

// ES5
// NOTE: by using var u can mutate the value
var name5 = 'Jane smith';
var age5 = 23;
name5 = 'Jane miller';
console.log(name5);

// ES6
/*
// NOTE: by using const u can not mutate the value
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane mille';
console.log(name6);
*/


// EXMPLE 2
// ES5
// NOTE: var is a function scope
function driversLicence5(passedTest) {
   if(passedTest) {
      var firstName = 'John';
      var yearOfBirth = 1990;
   }
   console.log(firstName + ',born in ' + yearOfBirth + ',is now officialy allowed to drive a car.');
}
driversLicence5(true);

// ES6
/*
// NOTE: let and const are block scope
function driversLicence6(passedTest) {
   if(passedTest) {
      var firstName = 'John';
      var yearOfBirth = 1990;
   }
   console.log(firstName + ',born in ' + yearOfBirth + ',is now officialy allowed to drive a car.');
}
driversLicence56(true);
*/


// let i = 23;
// for(let i = 0; i < 6; i++){
//     console.log(i);
// }
// console.log(i);

// var i = 23;
// for(var i = 0; i < 6; i++){
//     console.log(i);
// }
// console.log(i);

// var a = 20;
// var a = 29;
// console.log(a);

let b = 10;
 b = 39;
console.log(a);

var a = 29;
a = 39;
console.log(a);
