var logIn = document.querySelector('.log-in');
var register = document.querySelector('.register');
var slider = document.querySelector('.section-3');

logIn.addEventListener('click',function () {
      slider.style.left = '0px';  
      logIn.style.background = 'linear-gradient(to right,red,orange)';
      register.style.background = 'none';
});

register.addEventListener('click',function () {
    slider.style.left = '-350px';  
    register.style.background = 'linear-gradient(to right,red,orange)';
    logIn.style.background = 'none';

});

