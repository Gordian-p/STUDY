/* ********** BIND CALL AND APPLY ************ */

var john = {
   name: 'John',
   age: 26,
   job: 'teacher',
   presentation: function (style,timeOfDay) {
      if(style === 'formal'){
          console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
      } else if(style === 'friendly'){
         console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.' + ' Have a nice ' + timeOfDay);
      }
   }
}
john.presentation('formal','morning');
john.presentation('friendly','evining');

// Call method
var emily = {
    name: 'Emily',
    age:35,
    job: 'designer',
    yearOfBirth : 2002
}
john.presentation.call(emily,'formal','afternoon');

// Apply method
// NOTE: apply method accept array argument
// Exmple
john.presentation.call(emily,['formal','afternoon']);

// Bind method
// NOTE: bind method will return a function and also it allow to preset some argument
var emilyFriendly = john.presentation.bind(emily);
emilyFriendly('friendly','evining');
emilyFriendly('friendly','night');

var johnFriendly = john.presentation.bind(john);
johnFriendly('friendly','evining');
johnFriendly('friendly','night');
