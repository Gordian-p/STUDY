
function calc (){
    let p = document.querySelectorAll('.same');
    let input = document.querySelector('input');
    let equal = document.querySelector('#equal');
    
    for(let i of p){
        i.addEventListener('click',function(){
              
           input.value = input.value + this.innerText;

               if(this.id === "clear"){
                     input.value = '';
                     
               }
               else if(this.id === 'back'){
                     input.value = input.value.substr(0,input.value.length-2);
               }

        });
    }

    // EQUAL SIGN
    equal.addEventListener('click',function(){
           let a = eval(input.value);
           input.value = a; 
           
    });
}
calc();


