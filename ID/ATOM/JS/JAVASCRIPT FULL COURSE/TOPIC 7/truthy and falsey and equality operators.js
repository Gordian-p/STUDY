/* ****** Truthy and False Values and equality operators *******/


// falsy Values : undefine , null , 0 , '', NaN
// truthy Values : NOT falsy values;

var height;
height = 0;

// NOTE: we are using method to check if the valiable is define
// Exmple 1
if(height || height === 0){
   console.log('valiable is been define.');
}
else {
   console.log('valiable is NOT been define.');
}

// Exmple 2
height = '';
if(height){
   console.log('valiable is been define.');
}
else {
   console.log('valiable is NOT been define.');
}
