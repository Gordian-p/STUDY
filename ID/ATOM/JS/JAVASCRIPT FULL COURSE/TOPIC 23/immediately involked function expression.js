/* ********* IMMEDIATELY INVOLKED FUNCTION EXPRESSION ****** */

// Exmple 1 normal function
/*
function game() {
   var score = Math.round(Math.random()*10);
   console.log(score);
}
game();
*/

// Exmple 2 IIFE function
(function (){
    var score = Math.round(Math.random()*20);
    console.log(score);
}());

// Exmple 3 IIFE function
(function (goodluck){
    // var score = Math.round(Math.random()*20);
    var result = 10 - goodluck;
    console.log(result);
}(5));
