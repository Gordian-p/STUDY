var line = document.getElementById('line');
var attribute = document.getElementById('attribute');

// line.style.cssText = "color:blue; border: 2px solid black";

attribute.setAttribute('style','color:red; border: 2px solid black;');

var a = getComputedStyle(line).width;

console.log(a);

