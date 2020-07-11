const input = document.querySelector('input');
const grams = document.querySelector('.grams');
const kiloGrams = document.querySelector('.kilogram');
const ounces = document.querySelector('.ounces');
const div = document.querySelectorAll('.show');

input.addEventListener('input',calc);

function calc(e){

   if(e.target.value === '' || Number(e.target.value) <= -1 || e.target.value === 'e'){
       for(let i of div){
             i.style.display = 'none';
       }
   }
   else{
      for(let i of div){
        i.style.display = 'block';
      }
      let a = Number(input.value) * 0.0022046;
      let b = Number(input.value) * 2.2046;
      let c = Number(input.value) * 16;
     
      grams.innerText = a;
      kiloGrams.innerHTML = b;
      ounces.innerHTML = c;   

   }
   
}