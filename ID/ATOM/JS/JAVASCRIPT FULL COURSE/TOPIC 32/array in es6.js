/* *************** ARRAYS ************** */
// EXMPLE 1
const boxes = document.querySelectorAll('.box');
console.log(boxes);

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
console.log(boxesArr5);

boxesArr5.forEach(function (el,i) {
    el.style.background = 'dodgerblue';
});


//ES6
const boxesArr6 = Array.from(boxes);
console.log(boxesArr6);

boxesArr6.forEach(el => el.style.background = 'dodgerblue')


// ------------ FOR LOOP ------------- //
//EXMPLE 2
//ES5
for(let i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        continue;
    }
      boxesArr5[i].textContent = 'I changed to yellow!';
      boxesArr5[i].style.background = 'yellow';
}

// ES6
for(const el of boxesArr6){
  if(el.className === 'box blue'){
      continue;
  }
    el.textContent = 'I changed to yellow!';
    el.style.background = 'yellow';
}

// EXMPLE 3 
//ES5
var ages = [12,17,8,21,14,19];
var answ5 = ages.map(function (el){
   return el >= 18;
});
console.log(answ5); // [false,false,false,true,false,false]
console.log(answ5.indexOf(true)); // 3
console.log(ages[answ5.indexOf(true)]); // 26
//ES6
{
const answ6 = ages.findIndex(el => el >= 18);
console.log(answ6);
}

const answ6 = ages.find(el => el >= 18);
console.log(answ6);
