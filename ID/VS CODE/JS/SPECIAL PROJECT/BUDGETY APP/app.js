let input = document.querySelector('.text');
let select = document.querySelector('.select');
let number = document.querySelector('.number');
let add = document.querySelector('.add-Btn');
let income = document.querySelector('#income-number');
let expenses = document.querySelector('.expenses-number');
let total = document.querySelector('.total');


// add event listener to add button
add.addEventListener('click',addFn);

function addFn(){
   if(select.value === '+'){
        incomeFn();
        
   }else if(select.value === '-'){
         expensesFn();


   }

   let regex = /^\s+/;
   if(input.value.match(regex) || number.value.match(regex)){
        input.value = '';
        number.value = '';
        input.style.border = '2px solid rgba(128, 128, 128,.2)'; 
        number.style.border = '2px solid rgba(128, 128, 128,.2)'; 
   }

   let regexInp = /^\S+/;
   let regexVal = /^\d+/;
   if(input.value.match(regexInp) && number.value.match(regexVal)){
        input.value = '';
        number.value = '';
        input.style.border = '2px solid rgba(128, 128, 128,.2)'; 
        number.style.border = '2px solid rgba(128, 128, 128,.2)'; 
   }

   totalPercentage();
}



// style functions
select.addEventListener('change',style);
function style(){ 
    if(select.value === '+'){
     input.style.border = '2px solid rgba(128, 128, 128,.2)'; 
     number.style.border = '2px solid rgba(128, 128, 128,.2)'; 
     

     input.addEventListener('focus',() => {
        input.style.border = '2px solid lightseagreen'; 
        number.style.border = '2px solid rgba(128, 128, 128,.2)'; 
    });
    number.addEventListener('focus',() => {
        number.style.border = '2px solid lightseagreen'; 
        input.style.border = '2px solid rgba(128, 128, 128,.2)'; 
    });
     
   }else if(select.value === '-'){
     input.style.border = '2px solid rgba(128, 128, 128,.2)'; 
     number.style.border = '2px solid rgba(128, 128, 128,.2)'; 

     input.addEventListener('focus',() => {
        input.style.border = '2px solid rgb(224, 49, 49)'; 
        number.style.border = '2px solid rgba(128, 128, 128,.2)';  
    });
    number.addEventListener('focus',() => {
        number.style.border = '2px solid rgb(224, 49, 49)'; 
        input.style.border = '2px solid rgba(128, 128, 128,.2)'; 
    });
   }  
}
//NOTE 
style();


// ----------------- INCOME -------------------- //
{
    function incomeFn(){
        let ul = document.querySelector('#income');
        let li = document.createElement('li');
        let incomeNumber = document.querySelector('#income-number');
        
        // convert inocome list price to grouped number
        let str = Number(number.value);
        let numValue = str.toLocaleString("en");
        

        li.className = 'li-income';
        li.innerHTML = `<p id="income-item">${input.value}</p>
                        <p id="income-price">+ <span class="income-price">${numValue}.00</span></p>
                        <p id="income-close"><span class="close">+</span></p>
                    `
     ul.appendChild(li);
     
    // checking if user has put some data in an input
    function check(){
        let ul = document.querySelector('#income');
           if(input.value === '' || number.value === ''){
              ul.removeChild(li);  
           }
       }
     check();
    
    // getting all the price of income
    function calcIncomePrice(){
    let incomePrice = document.querySelectorAll('.income-price');
    let arryIncome = [];
    for(let i of incomePrice){
        arryIncome.push(Number(i.innerHTML.replace(/,/g,''))); // removed all comer for proper calculation
    }
    
    let totalIncome = arryIncome.reduce((a ,b ) => a + b ,0);
    
    // convert totalnumber into grouped number
    let totalIncomeStr = totalIncome.toLocaleString('en');
    total.innerHTML = totalIncomeStr + '.00';
    incomeNumber.innerHTML =  totalIncomeStr;
 
    }
    calcIncomePrice();
   
   // add event listener to a delete button in income list
   ul.addEventListener('click',function (e){
    let ul = document.querySelector('#income');
        if(e.target.classList.contains('income-close') || e.target.classList.contains('close')){
               let liRemove = e.target.parentElement.parentElement;
                ul.removeChild(liRemove);
               
              calcIncomePrice(); 
              
        }
        
   });
   

    
 }

}





//--------------- EXPENSES ------------- //
function expensesFn(){
    let ul = document.querySelector("#expenses");
    let li = document.createElement('li');
    let percentage = Math.round(Number(number.value) / Number(income.innerHTML.replace(/,/g,'')) * 100);
    let expensesNumber = document.querySelector('.expenses-number');
    
    // convert expenses list price to grouped number
    let str = Number(number.value);
    let numValue = str.toLocaleString("en");

    li.className = 'li-expenses';
    li.innerHTML = `<p id="expenses-item">${input.value}</p>
                    <p id="expenses-price">+ <span class="expenses-price">${numValue}.00</span></p>
                    <p id="expenses-percent" class="expenses-percent">${percentage}%</p>
                    <p id="expenses-close"><span class="close">+</span></p>
                   `
    ul.appendChild(li);
    
    // checking if user has put some data in an input
     function check(){
        let ul = document.querySelector('#expenses');
           if(input.value === '' || number.value === ''){
              ul.removeChild(li);  
           }
       }
     check();

    function calEpensesPrice(){
    // INCOMEPRICE
    let incomePrice = document.querySelectorAll('.income-price');
    let arryIncome = [];
    for(let i of incomePrice){
        arryIncome.push(Number(i.innerHTML.replace(/,/g,''))); // removed all comer for proper calculation
    }
    
    let totalIncome = arryIncome.reduce((a ,b ) => a + b ,0);
 
    // getting all the price of expenses
    let expensesPrice = document.querySelectorAll('.expenses-price');
    let arryExpenses = [];
    for(let i of expensesPrice){
        arryExpenses.push(Number(i.innerHTML.replace(/,/g,'')));
    }
    
    let totalExpenses = arryExpenses.reduce((a ,b ) => a + b ,0);


    // convert totalExpensive into grouped number
    let totalExpensesStr = totalExpenses.toLocaleString('en');

    // convert total number into grouped number
    let totalEx = totalIncome - totalExpenses;
    let totalExStr = totalEx.toLocaleString('en');

    total.innerHTML =  totalExStr + '.00';
    expensesNumber.innerHTML = '- ' + totalExpensesStr + '.00';
    

  }
  calEpensesPrice();

  // add event listener to a delete button in expenses list
  ul.addEventListener('click',function (e){
    let ul = document.querySelector('#expenses');
    if(e.target.classList.contains('expenses-close') || e.target.classList.contains('close')){
           let liRemove = e.target.parentElement.parentElement;
            ul.removeChild(liRemove);
           
         calEpensesPrice();

         totalPercentage();
    }
    
});


}


// -------------- TOTAL PERCENTAGE --------------- //

function totalPercentage(){
    let totalPercent = document.querySelector('.total-percentage');
    let totalPerc = document.querySelectorAll('.expenses-percent');
    let totalPercArry = [];
    totalPerc.forEach(el => {
         totalPercArry.push(Number(el.innerHTML.substr(0,el.innerHTML.length-1)));       
    });
    

    let totalPercAnsw = totalPercArry.reduce((a ,b ) => a + b ,0);
    totalPercent.innerHTML = totalPercAnsw + '%';
    
}

