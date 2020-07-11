//  CODING CHALLANGE 1;
/*
Mark and John are trying to compare their BMI (Body Mass Index),which is calculculated using the formula:
BMI = mass / (height * height);(mass in Kg and heigh in meter)

1. Store Mark's and John's mass and height in variable.
2. Calculate both their BMIs.
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to a console containting a variable from step 3. (Something like "Is mark's BMI higher than John's? true").
*/

var markMass = 70; // kg
var markHeight = 7; // meters

var johnMass = 90; // kg
var johnHeight = 4; // meters

var bmiOfMark = markMass / (markHeight * markHeight);
console.log(bmiOfMark);

var bmiOfJohn = johnMass / (johnHeight * johnHeight);
console.log(bmiOfJohn);

var  checkBmi = bmiOfJohn > bmiOfMark;
console.log(checkBmi);

console.log('Is John\'s BMI higher than Mark\'s? '+ checkBmi);
