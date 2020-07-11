/* *************** FUNCTION STATEMENT AND EXPLASION ***********/

// FUCNTION DECLARATION
// function whatDoYouDo (job,firstname){}


// FUNCTION EXPLESION

var whatDoYouDo = function (job,firstname){
      switch (job) {
           case 'teacher':
              return firstname + ' teches kid how to code';
           case 'driver':
               return firstname + ' drieves a car in lisbon';
           case 'designer':
                return firstname + ' desings beautiful websites';
            default:
      }         return firstname + ' does something else';
}

console.log(whatDoYouDo('teacher' , 'john'));
console.log(whatDoYouDo('designer' , 'mike'));
console.log(whatDoYouDo('doctor' , 'jane'));
