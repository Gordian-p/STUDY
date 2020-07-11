/* ******** ARROW FUNCTION ****** */

//ES5
   let yearOfBirth = 1999;
   let calcYr5 = function (currentYr) {
        console.log(currentYr - yearOfBirth);
   }
   calcYr5(2020);


//ES6
//EXMPLE 1
   yearOfBirth = 2000;
   let calcYr6 = currentYr => console.log(currentYr - yearOfBirth);
   calcYr6(2020);

//ES6
//EXMPLE 2
   let calcyr = (currentYr,yearOfBirth) => `I am ${currentYr - yearOfBirth} years old.`;
   console.log(calcyr(2020,1999));

//ES6
//EXMPLE 3
let johnInfo = (firstName,lastName) => {
     let yearOfBirth = 2000;
     let calcAge = 2020 - yearOfBirth;
     return `My name is ${firstName} ${lastName} i am ${calcAge} years old.`;
}
console.log(johnInfo('John','Smith'));
