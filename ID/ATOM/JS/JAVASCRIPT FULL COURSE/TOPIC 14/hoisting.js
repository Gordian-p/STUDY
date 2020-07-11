/* ************* HOISTIONG *************** */

// NOTE:  hoisting work only with function decreration

// Exmple 1
calAge(1995);
function calAge(year) {
     console.log(2020 - year);
}

// Exmple 2
// retirement(2000);
var retirement = function (year) {
      console.log(65 - (2020 - year));
}
// retirement(2000);

// ------ variable ------- //
// Exmple 3
var age = 12;
console.log(age);

// Exmple 4
console.log(age2);
var age2 = 10;  // undefine

// Exmple 5

function foo() {
    var age2 = 39;
    console.log(age2);
}
foo();
console.log(age2); // NOTE it otput 10 because it is a global scope
