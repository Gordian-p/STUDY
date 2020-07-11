/* ************ CLOSURE *********** */

// Exmple 1
function retirement(retirementAge){
     var a = ' years left until retirement.';
     return function (yearOfBirth) {
       var age = 2016 - yearOfBirth;
       console.log((retirementAge - age) + a);
     }
}
var retirementUs = retirement(60);
retirementUs(1999);
// OR
retirement(60)(1999);


// NOTE: i was try to look a different of the first exmple
// function retirement(retirementAge,yearOfBirth){
//      var a = ' years left until retirement.'
//        var age = 2016 - yearOfBirth;
//        return (retirementAge - age) + a;
// }
// var retirementUs = retirement(60,1999);
// var retirementUk = retirement(70,2002);
// console.log(retirementUs);
// console.log(retirementUk);


// Exmple 2
// function interviewQustion(job) {
//     if(job === 'disigner'){
//           return function(name) {
//               console.log(name + ', can you please explain what is ux design is?');
//           }
//     } else if(job === 'teacher'){
//         return function(name){
//           console.log('what subject do you teach ' + name);
//         }
//     } else{
//        return function(name){
//           console.log('hello ' + name + 'what do you do?');
//        }
//     }
// }
//
// var designerQuestion = interviewQustion('disigner');
// designerQuestion('john');


// NOTE: above function is function which does not contain closure and below function contain closure
function interviewQustion(job){
    return function (name){
       if(job === 'designer'){
         console.log(name + ', can you please explain what is ux design is?');
       } else if(job === 'teacher'){
         console.log('what subject do you teach ' + name);
       } else{
          console.log('hello ' + name + 'what do you do?');
       }
    }
}
interviewQustion('designer')('john');
