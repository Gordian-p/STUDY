/* ********* OBJECT AND PROPERTIES************* */

// ------------  OBJECT LITERAL --------- //
var john = {
     firstName : 'John',
     lastName : 'Smith',
     birthYear : 1990,
     family: ['Jane', 'Mark' , 'Bob' ,'Emily'],
     job : 'teacher',
     isMarried: false
}
//Exmple 1
console.log(john.firstName);  // or u can use other one
// Exmple 2
console.log(john['lastName']);

// NOTE:  u can use variable to assign some data to an object
// Exmple 3
var x = 'birthYear';
console.log(john[x]);

//data object mutation
// Exmple 4
john.job = 'designer'; // or u can use the other one
console.log(john.job);

// Exmple 5
john['birthYear'] = 2000;
console.log(john['birthYear']);


//EXMPLE 6
// ------ GETTING VALUE AND KEYS
console.log(Object.values(john));
console.log(Object.keys(john));


/* ------------ NEW OBJECT SYNTAX ----------- */

var jane = new Object();
jane.name = 'John';
jane.birthYear = 2002;
jane.lastName = 'john';
jane['job'] = 'doctor';

console.log(jane.job);
