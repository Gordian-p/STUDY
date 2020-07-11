let button = document.querySelector('.btn');
let resultBox = document.querySelector('.section-two');

button.addEventListener('click',result);

function result(){
    let input = document.querySelector('#student-number');
    resultBox.style.display = 'none';
    studentResultFun(input.value.toUpperCase());

    input.value = '';
}


function studentResultFun(num){
    fetch('result.json')
    .then(res => {
        return res.json();
    })
    .then(data => {
         let studentResult = data.find(el => {
              return el.id === num;
         })
         
         let {
             id: id,
             fullName: fullName,
             division: division,
             mathematics: mathematics,
             physics: physics,
             chemistry: chemistry,
             biology: biology,
             english: english,
             kiswahili: kiswahili,
             civics: civics,
             history: history,
             geography: geography
        } = studentResult;
    

         resultBox.innerHTML = `
         <div>
            <div class="student-info">
                <p><span>STUDENT NAME:</span><span>${fullName}</span></p>
                <p><span>STUDENT NUMBER:</span><span>s0121/${id}</span></p>
            </div>
    
            <ul class="result">
                <li><span class="subject">SUBJECT</span> <span class="marks">MARKS</span> <span class="grades">GRADES</span></li>
                <li><span>MATHEMATICS</span> <span class="std-marks">${parseInt(mathematics)}</span> <span>${mathematics.substr(mathematics.length-1)}</span></li>
                <li><span>PHYSICS</span> <span class="std-marks">${parseInt(physics)}</span> <span>${physics.substr(physics.length-1)}</span></li>
                <li><span>CHEMISTRY</span> <span class="std-marks">${parseInt(chemistry)}</span> <span>${chemistry.substr(chemistry.length-1)}</span></li>
                <li><span>BILOGY</span> <span class="std-marks">${parseInt(biology)}</span> <span>${biology.substr(biology.length-1)}</span></li>
                <li><span>ENGLISH</span> <span class="std-marks">${parseInt(english)}</span> <span>${english.substr(english.length-1)}</span></li>
                <li><span>KISWAHILI</span> <span class="std-marks">${parseInt(kiswahili)}</span> <span>${kiswahili.substr(kiswahili.length-1)}</span></li>
                <li><span>CIVICS</span> <span class="std-marks">${parseInt(civics)}</span> <span>${civics.substr(civics.length-1)}</span></li>
                <li><span>HISTORY</span> <span class="std-marks">${parseInt(history)}</span> <span>${history.substr(history.length-1)}</span></li>
                <li><span>GEOGRAPHY</span> <span class="std-marks">${parseInt(geography)}</span> <span>${geography.substr(geography.length-1)}</span></li>
            </ul>
    
            <div class="final">
                <p><span class="avarage">AVARAGE</span><span id="avarage">0%</span></p>
                <p><span class="division">DIVISION</span><span id="division">${division}</span></p>
            </div>
        </div>
     `
    resultBox.style.color = 'brown';

    setTimeout(() => {
        resultBox.style.display = 'block';
    },500);
    
     return  document.querySelectorAll('.std-marks');

    })
    .then(avg => {
    
     let avarageNumber = document.querySelector('#avarage');

      let marksArray = [];
      for(let i of avg){
         marksArray.push(parseInt(i.innerHTML));
      }

      let totalStudentMarks = marksArray.reduce((accumulator,currentValue) => {
          return accumulator + currentValue;
      },0);
   
        let avarage = totalStudentMarks / avg.length;
        let result = Math.round(avarage);
        console.log(result);

        avarageNumber.innerHTML = result + '%';
  })
  .catch((error) => {
    resultBox.innerHTML = error;
    resultBox.style.color = 'red';

    setTimeout(() => {
        resultBox.style.display = 'block';
    },500);
       
  })
}
