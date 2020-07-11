/* *********** SPREAD OPERATOR ********** */
function addFourAges(a,b,c,d) {
     return a + b + c + d;
}

//EXMPLE 1
var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

//EXMPLE 2
//ES5
var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null,ages);
console.log(sum2);

//EXMPLE 3
//ES6
var sum3 = addFourAges(...ages);
console.log(sum3);

//EXMPLE 4
//ES6
// OTHER USES OF spread operator it used two join array
const familySmith = ['John','Jane','Mark,'];
const familyMiller = ['Mary','Bob','Ann'];
// NOTE: u can also add an element in an array
const bigFamily = [...familySmith,'Lily',...familyMiller]; // NOTE:  u can not use position [...familySmith[1],...familyMiller[2]] because it will spreat it;;
console.log(bigFamily);

// ES5
var bigFamily2 = [familySmith[2],familyMiller[1]]; // NOTE: here u can use position
console.log(bigFamily2);

//EXMPLE 5
const h = document.querySelector('.heading');
const boxes = document.querySelectorAll('.box');
const all = [h,...boxes];

const arry = Array.from(all); // their is no need of using this method
console.log(all);
for(const i of all){
  i.style.color = 'red';
};

// OR
arry.forEach(el => el.style.color = 'purple');
