/* *********** MAPS *********** */

// MAPS 1
const map = new Map();
map.set('firstName','John');
map.set('lastName','Smith');
map.set('day',{day:'sunday',month:'Febuary'});
map.set(1,'one');
map.set(undefined,'undefined');

// console.log(map.get('firstName'));
// console.log(map.get('day').month);
//
// console.log(map.get(1));
// console.log(map.get(undefined));

// map.forEach((value,key) => console.log(`key: ${key} value: ${value}`));


///////////////////////////////////////////////////////////////////
// MAPS 2
const question = new Map();
question.set('question','what is the official name of the lateste major javascript version?');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct',3);
question.set(true,'correct answer');
question.set(false,'Wrong, please try again!');

// console.log(question);
console.log(question.get('question'));
console.log(question.size);


/*
// ----- DELETING KEY IN A MAP ------- //
question.delete(4);
console.log(question.get(4));

//OR
              //key//
if(question.has(3)){
   question.delete(3);
   console.log(question.get(3));
}

// question.clear();
// console.log(question);
*/


// ------ LOOPING TROUGH MAP ------- //
//EXMPLE 1
question.forEach((value,key) => console.log(`This is ${key} and it's set to ${value}`));

//EXMPLE 2
// NOTE: it will output an array
for(let key of question.entries()){
   console.log(key);
}

//EXMPLE 3
// NOTE: we have use destructuring method
for(let [key,value] of question.entries()){
   console.log(`This is ${key} and it's set to ${value}`);
}

// EXMPLE 4
for(let [key,value] of question.entries()){
   if(typeof(key) === 'number'){
      console.log(`Answer ${key} : ${value}`);
   }
}


// NOTE: u can use parseInt on Number to convert a string to a number;
const answ = parseInt(prompt('Write the correct answer'));
/*
if(answ === 3){
   console.log(question.get(true));
} else{
  console.log(question.get(false));
}
*/

// OR //
                          // output is true or false //
var result = question.get(answ === question.get('correct'));
console.log(result);
