/* ********* OPERATOR PRECEDENCE ********** */
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - 1989 >= fullAge;

console.log(isFullAge);

var precedence = (20 + 30) / 10;
console.log(precedence);

// NOTE:  math operator has higher presidence than logical operator


// Multiple assignment
var x , y;
x = y = (3 + 5) * 4 - 6;
console.log(x , y);
// NOTE: assignment operator walk from the left to right


// More operator
var d = 10;
d *= 10; // d = d * 10;
console.log(d);


var e = 10;
e += 10;  // e = e + 10;
console.log(e);

var h = 4;
h++;
console.log(h);

var i = 4;
i--;
console.log(i);
