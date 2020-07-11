/* ************* FUNCTION RETURNING OTHER FUNCTION************ */

function interviewQustion(job) {
    if(job === 'disigner'){
          return function(name) {
              console.log(name + ', can you please explain what is ux design is?');
          }
    } else if(job === 'teacher'){
        return function(name){
          return 'what subject do you teach ' + name;
        }
    } else{
       return function(name){
          console.log('hello ' + name + 'what do you do?');
       }
    }
}

var teacherQuestion = interviewQustion('disigner');
teacherQuestion('john');
teacherQuestion('jane');

// OR //
console.log(interviewQustion('teacher')('john')); // because we have use return
