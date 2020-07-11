var button = document.querySelectorAll('button');

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click',function (e) {
    for(var i = 0; i < button.length; i++){
         button[i].style.background = '#DDDDDD';
    }

       e.target.style.background = 'blue';

  })
}
