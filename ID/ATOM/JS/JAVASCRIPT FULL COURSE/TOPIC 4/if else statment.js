/* ************** IF ELSE STATMENT ***********/
var firstName = 'john';
var civilStatus = 'single';

// Exmple 1
if (civilStatus === "single") {
    console.log(firstName + ' is married!');
}
else {
   console.log(firstName + ' will hopefull marry soon:');
}

// Example 2
var check = civilStatus === "married";

if(check){
     console.log(firstName + ' is married!');
}
else {
    console.log(firstName + ' will hopefull marry soon:');
}
