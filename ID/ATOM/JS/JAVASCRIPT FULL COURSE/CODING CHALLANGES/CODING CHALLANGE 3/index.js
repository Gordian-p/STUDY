/* ************ CODING CHALLANGE ********** */

/*
Let's remember the first coding challange where Mark and John compared their BMIs.
Let's now implement the same functionality with object and methods.

1. For each of them, create an object with properties for their full name, mass, and
height
2. Then, add a method to each object to caculate the BMI. Save the BMI to the object
and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full
name and the respective BMI. Don't  forger might have the same BMI.

Remember: BMI = mass / height^ = mass / (height * height)
*/


var john = {
  firstName : 'John Smith',
  mass : 92, // kg
  height: 1.95,// M
  calcBmi : function () {
       return this.mass  / (this.height * this.height);
  }
}
john.bmi = john.calcBmi();
console.log(john.bmi);

var mike = {
  firstName : 'Mike Legend',
  mass : 78, // kg
  height: 1.69, // M
  calcBmi : function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi; // NOTE we use return so as the function can be reused
  }
}
mike.calcBmi();
console.log(mike.bmi);
console.log(mike.calcBmi()); // NOTE


if(john.bmi > mike.bmi){
    console.log(john.firstName + ' has a higher BMI of ' + john.bmi);
}else{
   console.log(mike.firstName + ' has a higher BMI of ' + mike.bmi);
}
