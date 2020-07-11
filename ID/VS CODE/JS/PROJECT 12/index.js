let box = document.querySelector('.box');
let left = document.querySelector('.left');
let right = document.querySelector('.right');


let num = 0;

right.addEventListener('click',rightBtn);

function rightBtn(){
    if(num < 140){
        num += 10;
        box.style.left = num + 'px';
    }
    console.log(num);
    
}


left.addEventListener('click',leftBtn);

function leftBtn(){
    if(num > -140){
        num -= 10;
        box.style.left = num + 'px';

        console.log(num);
        
    }
}




