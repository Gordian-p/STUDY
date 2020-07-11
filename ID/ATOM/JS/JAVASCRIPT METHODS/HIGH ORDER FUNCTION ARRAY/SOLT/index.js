//EXMPLE 1
const a = ["dom", "apple", "bottle"];
const sorted = a.sort();

console.log(sorted);

//EXMPLE 2
let arr = [
{
  firstName: "Steven",
  lastName: "Hancock",
  score: 90
},
{
  firstName: "Lynette",
  lastName: "Jorgensen",
  score: 100
},
{
  firstName: "Andrew",
  lastName: "Wilson",
  score: 72
},
{
  firstName: "Annika",
  lastName: "Turner",
  score: 82
}
];


const arryResult1 = arr.sort(function(a,b){
  return a.score - b.score; // NOTE: if it return negative if will solt from lower to higher and viceversa
});
console.log(arryResult1);

// const arryResult = arr.sort(function(a,b){
//   return b.score - a.score;
// });
// console.log(arryResult);

{
  var arry = [2,5,8,10,9,4,7,3,6,0];
  console.log(arry);
  let arrySolt = arry.sort(function(a,b){
       return a - b;
  });
  console.log(arrySolt);
}
