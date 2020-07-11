/* ************ LOOPS AND ITERATION ********** */


// ---------- FOR LOOP ----------- //
// Exmple 1
for (var i = 0; i < 10; i++  /* OR i = i + 1 */){
     // console.log(i);
}

// Exmple 2
for (var i = 0; i < 10; i += 2  /* OR i = i + 2*/){
     // console.log(i);
}

/*
// Exmple 3
var john = ['John','Smith',1990,'designer',false,'brue'];

for(var i = 0; i < john.length ; i++){
     console.log(john[i]);
}

// -------------- WHILE LOOP ----------- //

i = 0;
while(i < john.length){
     console.log(john[i]);
     i++;
}
*/

// --------------- COUNTIUNE AND BREAK ------------ //

var john = ['John','Smith',1990,'designer',false,'brue'];

for(var i = 0; i < john.length ; i++){
  if(typeof john[i] !== 'string') continue;
     // console.log(john[i]);
}

for(var i = 0; i < john.length ; i++){
  if(typeof john[i] !== 'string') break;
     // console.log(john[i]);
}


// -------- COUNTING BACK WARD -------- //
for(var i = john.length - 1; i >= 0; i--){
     // console.log(john[i]);
}
