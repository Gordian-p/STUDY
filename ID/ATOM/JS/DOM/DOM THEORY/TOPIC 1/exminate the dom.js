/* ***************** EXMINATE THE DOM OBJECT *************** */

// ------- Document ------- //
console.dir(document);

// Title
console.log(document.title);
document.title = 'item listener'; // U can change a title

// Domain
console.log(document.domain);

// URL
console.log(document.URL);

// head
console.log(document.head);

// Body
console.log(document.body);
document.body.style.background = 'white';

// Doctype
console.log(document.doctype);

// All
console.log(document.all); // it will give an html array collaction

console.log(document.all[9]);
console.log(document.all[9].style.color = 'red');

console.log(document.all[10]);
console.log(document.all[10].style.background = 'grey');

// Forms
console.log(document.forms);

console.log(document.forms[1]);

// Links
console.log(document.links);

console.log(document.links);
console.log(document.links[0].style.color = 'red');

// Images
console.log(document.images);
console.log(document.images[0].style.height = '400px');
