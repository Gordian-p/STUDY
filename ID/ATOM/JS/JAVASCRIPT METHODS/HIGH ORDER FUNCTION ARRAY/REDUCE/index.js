const numbers = [3,2,1,3];

// ES5
let sum = 0;
for(let n of numbers){
     sum = sum + n;
     // console.log(sum);
}
console.log(sum);


//ES6
let num = numbers.reduce(function(accumulator,currentValue){
  return accumulator + currentValue;
},0);
console.log(num);
