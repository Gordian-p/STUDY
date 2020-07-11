/* ************** OBJECT AND METHOD *************** */
// Exmple 1
var john1 = {
   firstName : 'john',
   lastName: 'Smith',
   birthYear: 1990,
   family: ['Jane','Mark','Bob','Emily'],
   job: 'teacher',
   isMarried: false,
   calcAge: function (birthYear) {
       return 2018 - birthYear;
   }
};
console.log(john1.calcAge(1990));


// --------- THIS KEYWORD ------- //
// Exmple 2
var john2 = {
   firstName : 'john',
   lastName: 'Smith',
   birthYear: 1990,
   family: ['Jane','Mark','Bob','Emily'],
   job: 'teacher',
   isMarried: false,
   calcAge: function () {
       return 2018 - this.birthYear;
   }
};
console.log(john2.calcAge());

// Exmple 3
var john3 = {
   firstName : 'john',
   lastName: 'Smith',
   birthYear: 1990,
   family: ['Jane','Mark','Bob','Emily'],
   job: 'teacher',
   isMarried: false,
   calcAge: function () {
       return 2018 - this.birthYear;
   }
};

// NOTE: u can mutate the data valiable in an object
john3.age = john3.calcAge();
console.log(john3.age);
console.log(john3);

// Exmple 4
var john4 = {
   firstName : 'john',
   lastName: 'Smith',
   birthYear: 1990,
   family: ['Jane','Mark','Bob','Emily'],
   job: 'teacher',
   isMarried: false,
   calcAge: function () {
          this.age =  2018 - this.birthYear;
   }
};
 john4.calcAge();
console.log(john4);
