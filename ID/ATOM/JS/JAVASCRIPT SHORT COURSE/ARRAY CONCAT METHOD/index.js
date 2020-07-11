/* ********* ARRAY CONCAT ************ */
let a = [10,20,30,40,50];
let b = [60,70,80,90,100];


// ---- FIRST WAY TO CONCAT ARRAYS ------ //
{
  let concat = [];
  for(let i of a){
      concat.push(i);
  }
  for(let i of b){
     concat.push(i);
  }
  // console.log(concat);
}

// -------- SECOND WAY TO CONCAT ARRAYS ES6------ //
{
   let concat = [...a,...b];
   // console.log(concat);
}

// --------- THIRD WAY TO CONCAT ARRAYS ---------- //
let concat = a.concat(b);
console.log(concat);

// OR //
let concat2 = [].concat(a,b);
console.log(concat2);

















//
