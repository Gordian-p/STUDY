/* **************** BLOCK AND IIFI **************** */
//ES5
(function(){
   let a = 10;
   const b = 20;
})();
// console.log(a + b);

//ES6
{
  let a = 10;
  let b = 20;
  var c = 30;
}
// console.log(a + b);
console.log(c); //// NOTE: var is functional scope note block scope
