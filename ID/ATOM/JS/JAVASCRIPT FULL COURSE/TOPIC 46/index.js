let div = document.querySelector('div');

fetch('sample.txt')
.then(a => {
     return a.text();
})
.then(text => {
     console.log(text.split('*'));
})
