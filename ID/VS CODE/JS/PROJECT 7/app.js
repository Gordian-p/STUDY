let input = document.querySelector('input');
let li = document.querySelectorAll('li');
input.addEventListener('keyup',filterFun);

//FILTER FUNCTION
function filterFun(){
   let liArry = Array.from(li);
   let inputValue = document.querySelector('input').value;

   for(let i of liArry){
    i.style.display = 'none';
    let regex = /^[a-z]{2,100}/i;
    let check = regex.test(inputValue);
    

    if(input.value === ''){
        i.style.display = 'none';
    }
    else if(i.innerHTML.toLowerCase().indexOf(inputValue.toLowerCase()) > -1 && check){
        i.style.display = 'block';
   }
   else{
       i.style.display = 'none';
    }
   } 

}

// LIST FUNCTION
for(let i of li){
    i.addEventListener('click',liFun);

    function liFun(e){
          let liText = e.target.innerHTML;
          input.value = liText;
          
          for(let i of li){
              i.style.display = 'none';
          }
    }
    
}




