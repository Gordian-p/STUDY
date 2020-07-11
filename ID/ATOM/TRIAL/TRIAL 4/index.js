let container = document.querySelector('.container');
let video = document.querySelector('video');
let videoLength = document.querySelector('.video_duration');
let btn = document.querySelector('.icon');

btn.addEventListener('click',play);

function play(){
    if(video.paused){
         video.play();
         btn.innerHTML = 'Paused';
    }else if(video.play){
         video.pause();
         btn.innerHTML = 'Play';
    }
}


video.addEventListener('timeupdate',timeDuration);
function timeDuration(){
     let vidLen = video.currentTime / video.duration * 100;
     videoLength.style.width = `${vidLen}%`;

     if(video.ended){
        btn.innerHTML = 'Play';
     }
}

container.addEventListener('click',function(){
    play();
    timeDuration();
});
