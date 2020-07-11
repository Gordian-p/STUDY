/* ******** BOOLEN LOGIC ******** */
var firstName = 'john';
var age = 13;

// NOTE:  use check if you are using only 2 if startment
// NOTE:  if startment it always check for condition eg( < , >, <=, >= , == , === , !== and etc);

if(age < 13){
   console.log(firstName + ' is a boy.');
}
else if (age >= 13 && age <= 20) {
    console.log(firstName + ' is a teenager.');
}
else if (age >= 20 && age <= 30) {
    console.log(firstName + ' is a young man.');
}
else {
   console.log(firstName + ' is a man.');
}
