var div = document.querySelector('.div');
var h1 = document.querySelector('h1');

// div.addEventListener('click',x);

// function x(e){
//
//     let pageX = e.pageX;
//     let clientX = e.clientX;
//     let offsetX = e.offsetX;
//     let screenX = e.screenX;
//
//     console.log('pageX: ' + pageX);
//     console.log('clientX: '+ clientX);
//     console.log('offsetX: '+ offsetX);
//     console.log('screenX:' + screenX);
//
// }



// window.addEventListener('click',y);

// function y(e){
//   let pageY = e.pageY;
  // let clientY = e.clientY;
  // let offsetY = e.offsetY;
  // let screenY = e.screenY;
  //
  // console.log('pageY: ' + pageY);
  // console.log('clientY: '+ clientY);
  // console.log('offsetY: '+ offsetY);
  // console.log('screenY:' + screenY);
// }



// SCROLL EVENT 1
window.addEventListener('scroll',scroll);

function scroll(e){
  //scrollY
  let scrolled = window.scrollY;
  console.log(scrolled);

  //pageYOffset
  let scrolled2 = window.pageYOffset;
  console.log(scrolled2);

  // NOTE: U CAN USE scrollY OR pageYOffset all are the same

   let pageY = window.scrollY;

  if(pageY >= 530){
     div.style.background = 'yellow';
  }
  else {
     div.style.background = 'red';
  }

}


// SCROLL EVENT 2
h1.addEventListener('click',fun);

function fun(){
    // window.scrollTo(0,530);

    window.scrollTo({
       top: 530,
       behavior: "smooth"
    });

    setTimeout(function () {
      // window.scrollTo(0,0);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 2000);
}


// TOGGLE

div.addEventListener('click',function (){
    // NOTE: when u use toggle means add class and remove when the event is called that process will occure infinitly;
    div.classList.toggle('green');
    // div.className = 'div green';
});




























//
