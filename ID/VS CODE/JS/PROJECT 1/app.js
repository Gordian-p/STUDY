let input = document.querySelector('input');
let addBtn = document.querySelector('.addBtn');
let unchekedUl = document.querySelector('.ul');
let checkedUl = document.querySelector('.ul2');


//EVENT LISTENER OF ADD BUTTON
addBtn.addEventListener('click',add);

function add(){

    //create element
    let li = document.createElement('li');
    let textSpan = document.createElement('span');
    let delSpan = document.createElement('span');
    let unchekedSpan = document.createElement('span');
    
    let text = document.createTextNode(input.value);

    let delBtn = document.createElement('i');
    let uncheckedBtn = document.createElement('i');

    //giving class to the element created
    li.className = 'li';
    textSpan.className = 'text';
    delSpan.className = 'delete';
    unchekedSpan.className = 'unchecked';

    delBtn.className = 'far fa-trash-alt delBtn';
    uncheckedBtn.className = 'far fa-check-circle uncheckedBtn';
     
    
    // appending element
    textSpan.appendChild(text);
    delSpan.appendChild(delBtn);
    unchekedSpan.appendChild(uncheckedBtn);

    li.appendChild(textSpan);
    li.appendChild(delSpan);
    li.appendChild(unchekedSpan);
    
    // append child to ul
    unchekedUl.appendChild(li);
    // console.log(unchekedUl);



    if(input.value === ''){
        unchekedUl.removeChild(li);    
    }

     let regex = /^\s /;
     let check = regex.test(input.value);
     if(check){  
        unchekedUl.removeChild(li);  
        console.log(true);
        
     }
     else{
         console.log(false);
         
     }

     input.value = '';
      
};

//EVENT LISTENER OF del btn and uncheked
unchekedUl.addEventListener('click',removeItem);

function removeItem(e){
    if(e.target.classList.contains('delBtn')){
         var li = e.target.parentElement.parentElement;
         unchekedUl.removeChild(li);
         
    }
    else if(e.target.classList.contains('uncheckedBtn')){
        var li = e.target.parentElement.parentElement;
        checkedUl.appendChild(li);
        
        let change = e.target;
        change.style.color = '#ffffff';
        change.style.background = 'rgb(0, 180, 120)';
        change.style.borderRadius = '50%';
        change.style.fontSize = '20px'; 

        let a = e.target.parentElement.previousElementSibling;
        a.style.position = 'relative';
        a.style.left = '5px';
    }
  
}


//ADD EVENT LISTENER BTN DEL AND UNCHECKED
checkedUl.addEventListener('click',returnItem);

function returnItem(e){
    if(e.target.classList.contains('delBtn')){
         var li = e.target.parentElement.parentElement;
         checkedUl.removeChild(li);
    }
    else if(e.target.classList.contains('uncheckedBtn')){
        var li = e.target.parentElement.parentElement;
        unchekedUl.appendChild(li);

        let change = e.target;
        change.style.color = 'rgb(0, 180, 120)';
        change.style.background = 'none';
        change.style.borderRadius = 'none';
        change.stylefontSize = 'initial';
            
        console.log(li);

        console.log(a);
        
        
         
    }
}




