/* ************* CREATE ELEMENT ********** */

// Create a Div
var newDiv = document.createElement('div');
console.log(newDiv);

// Add class
newDiv.className = 'hello';

// Add Id
newDiv.id = 'hello1';

// Add atribute
newDiv.setAttribute('title','hello');

// Create a TextNode
var newDivText = document.createTextNode('hello');

// Add text to Div
newDiv.appendChild(newDivText);

// Add Element to html
var header = document.querySelector('header');
var h2 = document.querySelector('h2');
header.insertBefore(newDiv,h2);
