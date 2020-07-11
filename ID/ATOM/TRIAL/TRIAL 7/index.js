let num = document.querySelector('p');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let body = document.querySelector('body');

startButton.addEventListener('click', fn);

let count = 0;

function fn() {

  let clearIterval = setInterval(() => {

    let arry = ['white','blue', 'red', 'green', 'yellow', 'brown', 'cyan', 'pink', 'springGreen',
      'lime', 'navy', 'slateBlue', 'deepSkyBlue', 'magenta', 'darkMagenta',
      'darkblue', 'peru', 'grey', 'darkGrey', 'lightGrey', 'gold', 'orange'
    ];

    count++;

    if(count > 21){
       count = 0;
    }
    num.innerHTML = count;

    body.style.background = [arry[count]];

 },1000);

  stopButton.addEventListener('click', function() {
    clearInterval(clearIterval);

    if(count === 5){
        alert('You have win!');
    }else{
        alert('You loose!')
    }
  });


}
