/* ********** TRAVERSING THE DOM ********* */

/*
// --------- PARENT NODE ---------- //
var items = document.querySelector('#items');
console.log(items.parentNode);
items.parentNode.style.background = 'lightgrey';
// NOTE: u can keep chain what ever u want
console.log(items.parentNode.parentNode);
*/


// --------- PARENT ELEMENT ------------ //
// NOTE: parent element it is the same as the parent node
var items = document.querySelector('#items');
console.log(items.parentElement);
items.parentElement.style.background = 'lightgrey';

console.log(items.parentNode.parentElement);


// ------------ CHILD NODES ------------ //
// NOTE: text represent the space caused by the line break
console.log(items.childNodes); // it give node list of an array


// ----------- CHILDREN --------- //
// NOTE: it doesnt look for the line break
console.log(items.children);
console.log(items.children[2].style.color = 'red');


// -------------- FIRST CHILD --------- //
// NOTE: it out put the text so first child is very useless
console.log(items.firstChild);

// ------------ FIRST ELEMENT CHILD -------- //
// NOTE: it ignore the space
console.log(items.firstElementChild);

// -------- LAST CHILD --------- //
console.log(items.lastChild);

// -------- LAST ELEMENT CHILD --------- //
console.log(items.lastElementChild);

// -----------  NEXT SIBLING  --------- //
// NOTE: it out the text
console.log(items.nextSibling);

// ------------ NEXTELEMENTSIBLING ---------- //
// NOTE: it ignore the text
console.log(items.nextElementSibling);

// ------------ PREVIOUS SIBLING ---------- //
console.log(items.previousSibling);

// ----------- PREVIOUSELEMENTSIBLING ------- //
console.log(items.previousElementSibling);
