/* *************** SCOPING ************* */

// Exmple 1
var a = ' Hello! ';
first();

function first() {
    var b = ' Hi! ';
    second();

    function second() {
        var c = ' Hey! ';
        console.log(a + b + c);
    }
}

// Exmple 2
var num = 10;

doc();
function doc() {
     var num = 20;
     foo();
     function foo() {
          console.log(num); // NOTE: it will output 20 because of a lestical chain on which 20 act as a global scope in a doc function;
     }
}

// ************** Exmple to show the different between execution stack and scope chain ********** //

var a = 'Hello!';
first();

function first() {
   var b = 'Hi!';
   second();

   function second() {
       var c = 'Hey!';
       third();
   }
}

function third() {
   var d = ' John';
   // console.log(c); // NOTE:  it can not acsess variable c because it is on differnt scope
   console.log(a + d); // NOTE: it can acsess a because it a global scope
}
