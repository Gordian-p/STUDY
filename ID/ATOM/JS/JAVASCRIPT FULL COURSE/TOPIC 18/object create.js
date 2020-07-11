/* *********** OBJECT.CREATE *********** */

// Exmple 1
var personProto = {
  lastname : 'Smith',
  calcAge : function () {
      console.log(2020 - this.yearOfBirth);
  }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';
console.log(john);
john.calcAge();

// Exmple 2
var jane = Object.create(personProto,{
    name : {value : 'jane' },
    yearOfBirth : {value : 1940},
    job : {value : 'Designer'}
});
console.log(jane);
jane.calcAge();
