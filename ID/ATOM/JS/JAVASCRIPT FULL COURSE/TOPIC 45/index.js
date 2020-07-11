let ul = document.querySelector('.user');
let ul2 = document.querySelector('.users');
let button1 = document.querySelector('.btn1');
let button2 = document.querySelector('.btn2');


// USER
button1.addEventListener('click',getUser);

function getUser(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','user.json',true);

    xhr.onload = function (){
        if(xhr.status === 200){
             let user = JSON.parse(xhr.responseText);
             ul.innerHTML = `
                  <li>ID: ${user.id}</li>
                  <li>Name: ${user.name}</li>
                  <li>YearOfBirth: ${user.yearOfBirth}</li>
                  <li>Job: ${user.job}</li>
             `
             console.log(user);
        }else if(xhr.status === 404){
             console.log('NOT FOUND');
        }
    }

    xhr.send();
}


//  USERS
button2.addEventListener('click',getUsers);

function getUsers(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','users.json',true);

    xhr.onload = function (){
        if(xhr.status === 200){
        let users = JSON.parse(xhr.responseTex);
        console.log(users);


        }else if(xhr.status === 404){
             console.log('NOT FOUND');
        }
    }

    xhr.send();


}








































































//
