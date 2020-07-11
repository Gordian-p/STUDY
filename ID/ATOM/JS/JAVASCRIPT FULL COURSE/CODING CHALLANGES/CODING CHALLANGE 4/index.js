/* Exercise 1:
   ------------
   Write a JavaScript program to check two numbers and return true if one of the
   number is 100 or if the sum of the two numbers is 100
*/

function checkNumber(a,b){
   if(a === 100 || b === 100){
      console.log('true a or b is equal to 100');
   }else if((a+b) === 100){
       console.log('true  The sum of two number is 100');
   }else {
      console.log('The sum of both number is note equal to 100 or both of them are note equal to 100');
   }
}

// checkNumber(90,10);
//
// let isEqual = (a,b) => {
//     return (a + b) === 100 || a === 100 || b === 100;
// }
// console.log(isEqual(30,70));



/* Exercise 2:
   -----------
   Write a JavaScript program to get the extension of the filename
*/

{
let getExtension = (strng) => strng.substr(strng.length-3,strng.length);
// console.log(getExtension('index.js'));
// console.log(getExtension('app.js'));
// console.log(getExtension('document.js'));
// console.log(getExtension('webpack.config.js'));
}




/* Exercise 3:
  -----------
  Write a JavaScript program to replace every character in a give string with
  the character following it in the alphabet
*/

{
let replace = (str) => str.replace(/hellow world/ig,'how are you');

console.log(replace('Hellow World!'));
}



// DATE
function getDate(){
    let date = new Date();

    let fullYear = date.getFullYear();
    let currentDate = date.getDate();
    let month = date.getMonth();
    return [currentDate,month,fullYear]
}

console.log(getDate());












































//
