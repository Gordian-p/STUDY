/* ************* METHOD BORROEING && PROTOTYPE INHERITENCE  ********************************/

let Person = function(firstName,lastName,age){
     this.firstName = firstName;
     this.lastName = lastName;
     this.age = age;
}

Person.prototype.getFullInfo = function(){
      console.log(this.firstName + ' ' + this.lastName + ' your are ' + this.age + ' years old!');
}

let jane = new Person('Jane','Smith',20);
// jane.getFullInfo();



let SportPlayer = function(firstName,lastName,age,team,score){
    // ---------- METHOD BORROWING ------------ //
    Person.call(this,firstName,lastName,age,team,score);
    this.team = team;
    this.score = score;
}
// ---------------- PROTOTYPE INHERITENCE -------------- //
SportPlayer.prototype = Object.create(Person.prototype);

SportPlayer.prototype.playerCv = function(){
     console.log('Iam ' + this.firstName + ' ' + this.lastName + ' and i have score ' + this.score + ' goals in ' + this.team);
}

let playerOne = new SportPlayer('Mike','Godian',34,'Man city',102);
// console.log(playerOne);
playerOne.playerCv();
playerOne.getFullInfo();


























//
