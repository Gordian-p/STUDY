var section = document.querySelector('section');
var div1 = document.querySelector('div');

//create div element

var div2 = document.createElement('div');
div2.className = 'same div-two';

var div3 = document.createElement('div');
div3.className = 'same div-three';

var div4 = document.createElement('div');
div4.className = 'same div-four';

var div5 = document.createElement('div');
div5.className = 'same div-five';

var arry = ['same div-one','same div-two','same div-three','same div-four','same div-five'];
var count = 1;

section.addEventListener('click',function () {
     div1.className = arry[count];
     count++;
     if(count > 4){
        //  count = 0;
         count = count-1;
     }
     console.log(count);
})
