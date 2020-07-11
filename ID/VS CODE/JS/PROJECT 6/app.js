const button = document.querySelector('button');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const  password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirmPassword');
const warning = document.querySelectorAll('p');

button.addEventListener('click',register);

function register(e) {
    e.preventDefault();

function usernameFun(){
    let uA = username.lastElementChild.previousElementSibling;
    if(uA.value === '' || /^\s+/.test(uA.value) || uA.value.length < 4 || /\s+$/.test(uA.value)){
        uA.style.border = '2px solid red';
        warning[0].style.display = 'block';
    }
    else{
        uA.style.border = '2px solid green';
        warning[0].style.display = 'none';
    }
}
usernameFun();


function emailFun(){
   let regex = /^(\S+)@([a-z0-9]+)\.([a-z]{2,7})(\.[a-z]{1,5})?$/;

   
   if(regex.test(email.lastElementChild.previousElementSibling.value)){
       email.lastElementChild.previousElementSibling.style.border = '2px solid green';
       warning[1].style.display = 'none';
   }
   else{
        email.lastElementChild.previousElementSibling.style.border = '2px solid red';
        warning[1].style.display = 'block';
   }
 }
 emailFun();

    function passwordFun(){
        let a = password.lastElementChild.previousElementSibling.value;
        a.replace(/\s/g,'');

        if(a === '' || a.length < 6){
             password.lastElementChild.previousElementSibling.style.border = '2px solid red';
             warning[2].style.display = 'block';
        }
        else{
            password.lastElementChild.previousElementSibling.style.border = '2px solid green';
            warning[2].style.display = 'none';
        }
        
    }
    passwordFun();

    function confirmPasswordFun(){
        let a = password.lastElementChild.previousElementSibling.value;
         let b = confirmPassword.lastElementChild.previousElementSibling.value;
         b.replace(/\s/g,'');

         if(a !== b || a === '' || a.length < 6){
             confirmPassword.lastElementChild.previousElementSibling.style.border = '2px solid red';
             warning[3].style.display = 'block';
         }
         else{
            confirmPassword.lastElementChild.previousElementSibling.style.border = '2px solid green';
            warning[3].style.display = 'none';
         }
    }
    confirmPasswordFun();

}





