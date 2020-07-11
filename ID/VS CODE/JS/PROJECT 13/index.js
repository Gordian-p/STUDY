let startBtn = document.querySelector('.start');
let resertBtn = document.querySelector('.resert');
let stopBtn = document.querySelector('.stop');


let secondsCount = 0;
let minuteCount = 0;
let hoursCount = 0;
startBtn.addEventListener('click',start);

function start(){
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    
    let second = setInterval(() => {
        secondsCount++;

        if(secondsCount > 59){
            secondsCount = 0;
            minuteCount++;

            if(minuteCount > 59){
                minuteCount = 0;
                hoursCount++;
                
                if(hoursCount > 59){
                     hoursCount = 0;
                }
                hours.innerHTML = hoursCount + ':';
            }

            minutes.innerHTML = minuteCount + ':';
            
        }
        seconds.innerHTML = secondsCount;
    },100);
    
 
}
