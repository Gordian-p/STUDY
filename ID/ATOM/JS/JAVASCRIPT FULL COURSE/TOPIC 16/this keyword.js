// *********************** THIS KEYWORD ************ //


// Exmple 1
// console.log(this);

// Exmple 2
// NOTE: regular function called always this keyword point to the window object
function calculateAge(year) {
      console.log(2020 - year);
      console.log(this);
}
calculateAge(1995);


// Exmple 3
var john = {
   name: 'John',
   yearOfBirth : 1990,
   calculateAge : function () {
     console.log(this);
     console.log(2020 - this.yearOfBirth);

    /*
     function innerFuntion () {
         console.log(this);
     }
     innerFuntion();
     */
   }
}
john.calculateAge();


// ************ FUNCTION BORROWING *********** //
// Exmple 4
var mike = {
     name : 'Mike',
     yearOfBirth : 1995
}

mike.calculateAge = john.calculateAge;

mike.calculateAge(); // NOTE: this keyword become mike object because this keyword become object when the method called .
