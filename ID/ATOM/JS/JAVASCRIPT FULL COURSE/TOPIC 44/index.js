// create event listener

let button = document.querySelector('button');
let p = document.querySelector('p');

button.addEventListener('click', loadText);

function loadText() {

  function test(){
  // Create XHR Object
  let xhr = new XMLHttpRequest();

  //OPEN - type , url/file ,async
  xhr.open('GET', 'sample.txt', true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // console.log(xhr.responseText);
      let text = xhr.responseText;
      p.innerHTML = text;
    }else if(xhr.status === 404){
       // console.log('Something Went Wrong');
       // let text = 'Something Went Wrong';
       // p.innerHTML = text;
    }
  }

  //Sends XMLHttpRequest
  xhr.send();
}
  setTimeout(() => {
       test();
  },1000);


  // document.body.style.cssText =
  // 'background: darkblue;color: white';

  document.body.setAttribute('style','color:red;background: black');
}

//HTTP Statuses
//200: "ok"
//403: "Forbidden"
//404: "Not Found"
