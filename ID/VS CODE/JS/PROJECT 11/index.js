const heading = document.querySelector('.heading');
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const speachRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speachRecognition();

recognition.onstart = function () {
//    console.log('Voice is activated, you can do microphone');
heading.innerHTML = 'Voice is activated, you can do microphone';
   
}

recognition.onresult = function (event) {
     console.log(event);

    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript.toLowerCase();

    content.innerHTML = transcript;
     
    console.log(transcript);
    
        let regex = /black/;
        let result = transcript.match(regex);
        console.log(result);
        
        document.body.style.background = result;


        // readOutRoud(transcript);
}

// add the listener to the button
btn.addEventListener('click',() => {
     recognition.start();
});



// function readOutRoud(message) {
//     const speech = new SpeechSynthesisUtterance;
//     speech.text = message;
//     speech.volume = 1;
//     speech.rate = 0.5;
//     speech.pitch = 1;

//     window.speechSynthesis.speak(speech);
// }


