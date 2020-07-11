let p = document.querySelectorAll('p');
let checkBtn = document.querySelector('button');

checkBtn.addEventListener('click',function(){

    let paragraph = Array.from(p);
    let arryText = [];
    for(let i of paragraph){
         arryText.push(i.innerHTML);
    }

   let checkText = checkBtn.innerHTML;
   if(arryText.indexOf(checkText) < 0){
       alert('The text it is not there.')
   }else if((arryText.indexOf(checkText) >= 0)){
      alert('The text it is already there.')
   }
})
