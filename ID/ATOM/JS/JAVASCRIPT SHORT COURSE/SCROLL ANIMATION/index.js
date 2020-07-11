const link = document.querySelectorAll('a');

link.forEach((el) => {
     el.addEventListener('click',linkClick);
});

function linkClick(e){
      e.preventDefault();
      targetId = e.target.getAttribute('href');

      smoothScroll(e);
     // console.log(targetId);
}


 // APPROACH #2 - window.scrollTo() (window.scroll())
function smoothScroll(e){
 let el = document.querySelector(targetId);

  window.scrollTo(
    {
      // top: 440,
      top: el.s,
      behavior: "smooth",
  }
);

console.log(el.offsetTop);
}





// APPROACH #2 - element.scrollIntoView()
// function smoothScroll(e){
//     let el = document.querySelector(targetId);
//
//      el.scrollIntoView({
//          behavior: "smooth",
//          block: 'start'
//      });
// }



// APPROACH #3 - window.requestAnimationFrame()
// function smoothScroll(e){
//     let el = document.querySelector(targetId);
//
//
// }



// ***************** PARALLAX ANIMATION ************//
// const parallax = document.querySelector('#home');
//
// window.addEventListener('scroll',() => {
//     let offset = window.pageYOffset;
//     console.log(offset * 0.7);
//     parallax.style.backgroundPositionY = offset * 0.7 + 'px';
// });



























































//
