/* ****** REST PARAMETER ********* */
// NOTE: rest parameter is the viceversa of spread operators


/*
//EXMPLE 1
//ES5
function isFullAge5() {
   // console.log(arguments);
   var agArry = Array.prototype.slice.call(arguments);
   console.log(agArry);

   agArry.forEach(function (cur) {

      console.log((2016 - cur) >= 18);
   });
}
isFullAge5(1990,1999,1965);
isFullAge5(1999,1995,1996,2016,1987);


// ES6
function isFullAge6(...years) {
   // console.log(years);
   years.forEach(cur => console.log((2016 - cur) >= 18));
}
isFullAge6(1990,1999,1965);
*/



/*
//EXMPLE 2
// ADDING AN ARGUMENT
//ES5
function isFullAge5(limit) {
   // console.log(arguments);
   var agArry = Array.prototype.slice.call(arguments,1);
   console.log(agArry);

   agArry.forEach(function (cur) {

      console.log((2016 - cur) >= limit);
   });
}
isFullAge5(12,1990,1999,1965);
// isFullAge5(1999,1995,1996,2016,1987);
*/

// ES6
// NOTE: u can pass any argument as u want as exmple below
// function isFullAge6(limit,limit2...years)
function isFullAge6(limit,...years) {
   // console.log(years);
   years.forEach(cur => console.log((2016 - cur) >= limit));
}
isFullAge6(16,1999,2003);
