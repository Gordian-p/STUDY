// *********** FUNCTION CONSTRUCTER ********** //

// Exmple 1
// Normal Object
var john = {
   name : 'John',
   yearOfBirth : 1990,
   job : 'Teacher',
}

// Exmple 2
// Function constructer
var Person = function(name,yearOfBirth,job){
     this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.job = job;
     // this.calAge = function () {
     //   console.log(2020 - this.yearOfBirth);
     // }
};

// constructer prototype property
Person.prototype.calAge = function () {
  console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastname = 'Smith';

var john = new Person ('john',1991,'Designer');
console.log(john);
john.calAge();

var jane = new Person ('jane',1993,'Doctor');
console.log(jane);
jane.calAge();

var mike = new Person ('mike',1995,'Doctor');
console.log(mike);
mike.calAge();

console.log(john.lastname);
console.log(jane.lastname);
console.log(mike.lastname);
