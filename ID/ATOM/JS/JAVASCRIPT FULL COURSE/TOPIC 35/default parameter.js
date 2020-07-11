/* ************ DEFAULT PARAMETER ********** */

// ES5
function SmithPerson(firstName,yearOfBirth,lastName,nationality){
   lastName === undefined ? lastName = 'smith' : lastName = lastName;
   nationality === undefined ? nationality = 'america' : nationality = nationality;

   this.firstName = firstName;
   this.lastName = lastName;
   this.yearOfBirth = yearOfBirth;
   this.nationality = nationality;
}
var john = new SmithPerson('John',1990);
// console.log(john);

// NOTE: default parameter help to replace some value eg lastName and nationality;
var emily = new SmithPerson('Emily',2000,'John','uk');
// console.log(emily);



// ES6
function SmithPerson(firstName,yearOfBirth,lastName = 'Smith',nationality = 'america'){
   this.firstName = firstName;
   this.lastName = lastName;
   this.yearOfBirth = yearOfBirth;
   this.nationality = nationality;
}
var john = new SmithPerson('John',1990);
console.log(john);

// NOTE: default parameter help to replace some value eg lastName and nationality;
var emily = new SmithPerson('Emily',2000,'John','uk');
console.log(emily);
