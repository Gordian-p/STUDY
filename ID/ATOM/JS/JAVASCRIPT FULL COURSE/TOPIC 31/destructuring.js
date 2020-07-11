/* ******* DESTRUCTURING ********* */

//EXMPLE 1
// ES5
var john5 = ['John',26];
var name5 = john5[0];
var age5 = john5[1];
console.log(name5);
console.log(age5);

// ES6
const [name6,age6] = ['John',26];
console.log(name6);
console.log(age6);

// EXMPLE 2
//ES5
var obj = {
   firstName: 'John',
   lastName: 'Smith'
}
console.log(obj.firstName);
console.log(obj.lastName);

// ES6
const obj6 = {
   firstName : 'John',
   lastName : 'Smith'
}
const {firstName,lastName} = obj6;
console.log(firstName);
console.log(lastName);

// NOTE: these exmple show if you dont want to use the actual object valiable name;
const obj62 = {
   firstName : 'John',
   lastName : 'Smith'
}
const {firstName: a,lastName: b} = obj62;
console.log(a);
console.log(b);

//EXMPLE 3
// ES5
function calcAgeRetirement(year) {
    const age5 = new Date().getFullYear() - year;
    return [age5,65 - age5];
}
console.log(calcAgeRetirement(1990)[0]);
console.log(calcAgeRetirement(1990)[1]);

// ES6
function calcAgeRetirement(year) {
    const age5 = new Date().getFullYear() - year;
    return [age5,65 - age5];
}

const [age,retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);
