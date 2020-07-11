/* The Ternary Operator and Switch Statements */

var firstName = 'john';
var age = 16;

if(age > 16){
   console.log(firstName + ' is adult');
}
else{
   console.log(firstName + ' is not adult');
}

// --------- or ------------ //

var age2 = 30;
// var check =  condition ? true : false;
age2 > 18 ? console.log(firstName + ' is adult') : console.log(firstName + ' is not adult');


var age3 = 20;
var drink =  age3 >= 18 ? 'beer' : 'juice';
console.log(drink);



/* *************** SWITCH STATEMENT************ */

// EXMPLE 1
var job = 'instractor';

switch (job){
   case 'teacher':    // NOTE:
   case 'instractor': // NOTE:
       console.log(firstName + ' teaches kids how to code!');
       break;
   case 'driver':
        console.log(firstName + ' drive an uber in lisbon!');
        break;
   case 'doctor':
        console.log(firstName + ' treats people!');
        break;
   default:
      console.log(firstName + ' does something else!');
}

///////////////////////////////////////////////////////////////////////////////

//  same exmple in if statment
var job2 = 'driver';
if(job2 === 'teacher'){
  console.log(firstName + ' teaches kids how to code!');
}
else if(job2 === 'driver'){
  console.log(firstName + ' drive an uber in lisbon!');
}
else if(job2 ===' doctor'){
  console.log(firstName + ' treats people!');
}
else {
  console.log(firstName + ' does something else!');
}


// EXMPLE 2

var name = 'john';
var year = 0;

switch(true){
    case year < 13:
       console.log(firstName + ' is a boy.');
       break;
    case year >= 13 && year < 20:
       console.log(firstName + ' is a teeneger.');
       break;
    case year >= 20 && year < 30:
       console.log(firstName + ' is a young man.');
        break;
    default:
       console.log(firstName + ' is a man');
}
