var left = document.querySelector('.left');
var right = document.querySelector('.right');
var div = document.querySelector('div');

left.addEventListener('click',doc);

var position = 0;
function doc() {
    console.log(position);

    position = position + 30;
    div.style.right = position + 'px';

   if(position === 270){
       position = position - 30; // 240
   }
}

right.addEventListener('click',doc2);
function doc2() {
    console.log(position);
    position = position - 30;
    div.style.right = position + 'px';

    if(position === -270){
       position = -270 + 30; // 240
              // position`
    }
}
