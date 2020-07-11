var slider = document.querySelector('.img-container');

var btn1 = document.querySelector('.btn-1');
var btn2 = document.querySelector('.btn-2');
var btn3 = document.querySelector('.btn-3');
var btn4 = document.querySelector('.btn-4');

btn1.addEventListener('click',function () {
     slider.style.left = "0px";
});
btn2.addEventListener('click',function () {
    slider.style.left = "-800px";
});
btn3.addEventListener('click',function () {
    slider.style.left = "-1600px";
});
btn4.addEventListener('click',function () {
    slider.style.left = "-2400px";
});
