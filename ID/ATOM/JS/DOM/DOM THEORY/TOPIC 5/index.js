/* **********  EVENT *********** */
var button = document.querySelector('#button');

button.addEventListener('click',doc);

function doc() {
   document.all[10].style.background = 'lightgrey';
}

function doc(e) {

    // Exmple 1
   // console.log(e.target);

   // Exmple 2
   /*
   console.log(e.target.id);
   console.log(e.target.className);
   console.log(e.target.classList);
   */

    // Exmple 3
   // NOTE: this give u a position from the window
   // console.log(e.clientX);
   // console.log(e.clientY);

    // Exmple 4
   // NOTE: this give the position from the actual element
   // console.log(e.offsetX);
   // console.log(e.offsetY);



   /* --------- key checking  ------- */
   // Exmple 5
   // console.log(e.altKey);
   // console.log(e.shiftKey);
   // console.log(e.ctrlKey);

}


var button2 = document.querySelector('.btn');
var box = document.querySelector('.box');

// --------  EVENTS --------- //

// button.addEventListener('click',doc);
// button.addEventListener('dblclick',doc);
// button2.addEventListener('mousedown',doc2); // NOTE: as soon as mouse go down it runs
// button2.addEventListener('mouseup',doc2);  // NOTE: virse versa of mousedown
function doc2(e) {
      console.log('Event Type: ' + e.type);
}


// box.addEventListener('mouseenter',doc3); // NOTE: mouseenter it is for the element it self or parentNode
// box.addEventListener('mouseleave',doc3);

// box.addEventListener('mouseover',doc3); // NOTE: mouseover it is for both children
// box.addEventListener('mouseout',doc3);

box.addEventListener('mousemove',doc3);
function doc3(e) {
      console.log('Event Type: ' + e.type);
      box.style.background = 'rgb('+e.offsetX+','+e.offsetY+','+e.offsetY+')';
      // box.style.background = 'rgb(0,0,0)';
      // document.all[9].innerText = e.offsetX;
}


// ----------- INPUT EVENT ------------ //
var input = document.querySelector('input[type="text"]');

// input.addEventListener('keypress',runEvent);
// input.addEventListener('keyup',runEvent);
// input.addEventListener('keydown',runEvent);

// input.addEventListener('focus',runEvent);
// input.addEventListener('blur',runEvent);

// input.addEventListener('cut',runEvent);
// input.addEventListener('paste',runEvent);
// input.addEventListener('copy',runEvent);

input.addEventListener('input',runEvent); // NOTE: input it anything u are doing with input it can be keydown,copy,focus,select etc;

function runEvent(e) {
     console.log(e.type);
}

// --------- SELECT EVENT ----------- //

var select = document.querySelector('select');
select.addEventListener('change',sel);
// select.addEventListener('input',sel);

function sel(e) {
  console.log(e.type);
  console.log(e.target.value);
}

// ------------ FORM EVENT--------- //
var form = document.querySelector('form');
form.addEventListener('submit',fun);

function fun(e) {
     e.preventDefault();
    console.log(e.type);
}
