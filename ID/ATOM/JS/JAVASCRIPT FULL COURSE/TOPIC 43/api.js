/* ************** API **************** */
// user
// let user = document.querySelector('.user');
// let buttonUser = document.querySelector('.btn-user');
//
// buttonUser.addEventListener("click",() => {
//   fetch('user.json')
//   .then(user => {
//       return user.json();
//   })
//   .then(data => {
//       user.innerHTML = `
//           <li>id: ${data.id}</li>
//           <li>name: ${data.name}</li>
//           <li>yearOfBirth: ${data.yearOfBirth}</li>
//           <li>job: ${data.job}</li>
//       `
//   })
//   .catch(error => {
//       console.log(error);
//   })
// })



// Users
// let users = document.querySelector('.users');
// let buttonUsers = document.querySelector('.btn-users');
//
// buttonUsers.addEventListener("click",() => {
//    fetch('users.json')
//    .then(users => {
//         return users.json();
//    })
//    .then(data => {
//         console.log(data);
//
//         for(let i in data){
//           users.innerHTML = users.innerHTML + `
//             <ul>
//               <li>id: ${data[i].id}</li>
//               <li>name: ${data[i].name}</li>
//               <li>yearOfBirth: ${data[i].yearOfBirth}</li>
//               <li>job: ${data[i].job}</li>
//               <br>
//             </ul>
//           `
//         }
//    })
// })







/* ********************  ******************** */
let submit = document.querySelector('#submit');

submit.addEventListener("click", addPost);

function addPost(e) {
  e.preventDefault();

  let title = document.querySelector('#title').value;
  let body = document.querySelector('#body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json,text/plain, */*',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        body: body
      })
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
}









//
