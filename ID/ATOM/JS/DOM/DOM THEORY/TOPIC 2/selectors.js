/* ************* SELECTORS *********** */

//  GETELEMENTBYID
var headerTitle = document.getElementById('header');
console.log(headerTitle);

// headerTitle.textContent = 'Title';
// headerTitle.innerText = 'Home';
console.log(headerTitle.textContent); // NOTE: textContent it ignore the styling
console.log(headerTitle.innerText);  // NOTE:  innerText text consider the styling

console.log(headerTitle.innerHTML="<h6>Hello</h6>");
headerTitle.style.borderBottom = '2px solid black';



// GETELEMENTBYCLASSNAME
/*
var items = document.getElementsByClassName('list-group-items'); // NOTE: it is ELEMENTS
console.log(items);
console.log(items[2]);
items[2].style.fontWeight = 'bold';
for(i in items){
     items[i].style.color = 'red';
}
*/


// GETELEMENTBYTAGNAME
/*
var li = document.getElementsByTagName('li'); // NOTE: it is ELEMENTS
console.log(li);
console.log(li[2]);
li[2].style.fontWeight = 'bold';
for(i in li){
     li[i].style.color = 'red';
}
*/


// QUELYSELECTOR
// NOTE: it glab only one item
var input = document.querySelector('input');
input.placeholder = 'Hello World!'
console.log(input);

var submit = document.querySelector('input[type="submit"]');
submit.style.background = 'red'
console.log(submit);

var lastItems = document.querySelector('li:nth-child(4)');
lastItems.style.color = 'red';
console.log(lastItems);



// QUELYSELECTORALL

// var li = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0; i < li.length; i++){
//       li[i].style.background = 'lightblue';
// }


// console.log(li);
var li = document.querySelectorAll('li');
for(var i = 0; i < li.length; i++){ // NOTE: by using this method u can not select even number
      li[i].style.background = 'lightblue';
}
// console.log(li);
