const boxQuestion = document.querySelectorAll('.section-2');
const nextBtn = document.querySelector('.button');
const questionCounter = document.querySelector('.num');
const  resultNum = document.querySelector('.resultNum');
const per = document.querySelector('.per');
const tryAgainBtn = document.querySelector('#try-again');
const finalResult = document.querySelector('.finalResult');
const checked = document.querySelectorAll('.checked');


let numCount = 1;
let count = 0;
let a = -1;

nextBtn.addEventListener('click',nextButton);

function nextButton(){
  count++;
  numCount++;
  a++;

 function circleCheck(){
  let check = circle[a].style.background;
  console.log(check);
  console.log(a);
  
  
  
  if(check === ''){
        alert('Please Select One Option');
         count = count - 1;
         numCount = numCount -1; 
         a = a -1;
  }


  }
  circleCheck();


  function questionCount(){
    questionCounter.innerHTML = numCount;

    if(numCount > 4){
      numCount = numCount - 1;              
      }
  }
  questionCount();
 
  

  function boxQuestionEnd(){
  for (let i = 0; i < boxQuestion.length; i++) {
    if(count > boxQuestion.length-1){
        count = count - 1;    
        
        finalResult.style.cssText = "display: initial; display:grid; place-items: center;";

        let arry = [];
        for(let i of circle){
              arry.push(i.style.background.includes('green'));
        }
        console.log(arry);
       
        let filter = arry.filter(el => el === true);
        // console.log(filter);
        // console.log(filter.length);

        let num = filter.length;
        let percentage = Math.round((num / 5 )* 100);

        resultNum.innerHTML = num;
        per.innerHTML = percentage;
        

      }          
    }
  }
  boxQuestionEnd();

    function hideAndShowQuestion(){
        boxQuestion[0].style.display = 'none';
        boxQuestion[count].style.display = 'block';
        boxQuestion[count - 1].style.display = 'none';

    }
    hideAndShowQuestion();
}


let correct = document.querySelectorAll('.correct');
let circle = document.querySelectorAll('.circle');

for (let i = 0; i < boxQuestion.length; i++) {

    boxQuestion[i].addEventListener('click',question);

    function question(e) {
        // let wrong = document.createTextNode('*');
        // let tick = document.createTextNode('/');

        if(e.target.classList.contains('question')){
            e.target.style.background = 'red';
            correct[count].style.background = 'green';
            checked[count].style.display = 'block';

            // circle[count].appendChild(wrong);
            circle[count].style.background = 'red';
        }
        else if(e.target.classList.contains('correct')){
            e.target.style.background = 'green';
            checked[count].style.display = 'block';

            // circle[count].appendChild(correct);
            circle[count].style.background = 'green';

        }
    }
}


// TRY AGAIN BUTTON
tryAgainBtn.addEventListener('click',function (){
      window.location = 'http://127.0.0.1:5500/JS/PROJECT%204/index.html';
});







