/* *********** CALL BACK FUNCTION ********* */

// Exmple 1
var x = function () {
    console.log("I am called from inside a function");
}
let y = function(callback){
    console.log("do something");
    callback();
}
y(x);

// Exmple 2
var calc = function (num1,num2,calType) {
   if(calType === 'add'){
        return num1 + num2;
   }
   else if(calType === 'multiply'){
       return num1 * num2;
   }
}
console.log(calc(2,3,'multiply'));

// Exmple 3
var calc2 = function(num1,num2,callback){
    return callback(num1,num2);
}
var add = function(a,b){
   return a + b;
}
var multiply = function(a,b){
   return a * b;
}
var divide = function(a,b){
   return a / b;
}
var sub = function(a,b){
   return a - b;
}
// NOTE:
var answ = calc2(10,5,sub);
console.log(answ);

// NOTE:
var check = function(chk){
    console.log(chk >= 5);
}
check(answ)



// NOTE: if u want to work with this code comment all the code above

/*
// Exmple 3
var arry = [10,20,30,40,50];

function calc(a,fn){
    var answ = [];
     for(var i = 0; i < a.length; i++){
           var funCalc = fn(a[i]);
           answ.push(funCalc);
     }
     return answ;
}

function add(el){
    return el + 5;
}
function divide(el){
    return el / 5;
}
function sub(el){
    return el - 5;
}
var addAnsw = calc(arry,add);
console.log(addAnsw);

var divideAnsw = calc(arry,divide);
console.log(divideAnsw);

var subAnsw = calc(addAnsw,sub);
console.log(subAnsw);
*/
