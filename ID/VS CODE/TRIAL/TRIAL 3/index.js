let input = document.querySelector('input');
let button = document.querySelector('button');

let answ = [
    {
      find: 'kula',
      result: [
          'bado sijala','ntakula baadae','sijiskii njaa leo'
      ]
    },
    {
      find: 'mambo',
      result: [
           'poa mzima weye','saf za uko'
      ]
    }
]
button.addEventListener('click',fn);

function fn(){
    function a(){
     let text = input.value;
     let regex = text.match(/kula/).toString();
     return regex;
    }
    
     let pp = a();
    function b(dd){
        let output = answ.find(el => {
            return el.find === dd;
        });
        console.log(output.result[1]);
    }

     switch(pp){
         case 'kula':
              b(a())
           break;
           case 'mambo':
             
           
     }
  
}