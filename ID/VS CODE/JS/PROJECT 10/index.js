let images = document.querySelectorAll('.section-one div img');
let text = document.querySelector('.section-two .container p');
let popImage = document.querySelector('.section-two');
let img = document.querySelector('.section-two .container div img');
let close = document.querySelector('.section-two .container .close');


// POP UP THE IMAGE
for(let i of images){
     i.addEventListener('click',(e) => {
           let id = e.target.id;
           text.innerHTML = `IMAGE ${id}`;

           let imgSrc = e.target.getAttribute('src');
           img.setAttribute('src',imgSrc);
           
           
           popImage.style.cssText= 'opacity: 1; z-index: 3';
     });
}


// CLOSE UP THE POP IMAGE
close.addEventListener('click',() => {
     popImage.style.cssText = 'opacity: 0; z-index: -1;';
})