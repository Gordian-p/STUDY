/* ********************** ARRAYS ****************** */

// Initialize new array
var names = ['john', 'jane', 'mike'];
var year =  new Array (1990,1969,1948);

console.log(year);
console.log(names);
console.log(names);

// Mutate array data
names[0] = 'jack';
console.log(names);
names[names.length]= 'marry';
console.log(names);

// different data types
var john = ['john','smith',1990,'designer',false];

john.push('mary')  // it will add an elemnt at the end of an array
console.log(john);

john.unshift('mr');  // it will add an elemnt at the begining of an array
console.log(john);

john.pop(); // it will remove an element at the end of an arrays
john.pop();
console.log(john);

john.shift(); // it will remove an element at the beginning of an arrays
john.shift();
console.log(john);

var john = ['designer','john','smith',1990,false];

var check = john.indexOf('designer') >= 0 ? 'john is a designer' : 'john do something else';
console.log(check);
                            // OR //
var check = john.indexOf('designer') !== -1 ? 'john is a designer' : 'john do something else';
console.log(check);
                            // OR //
var check = john.indexOf('designer') === -1 ? 'john do something else' : 'john is a designer';
console.log(check)
