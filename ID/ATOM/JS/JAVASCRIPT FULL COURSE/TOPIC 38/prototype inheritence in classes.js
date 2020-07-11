/* ************* METHOD BORROEING && PROTOTYPE INHERITENCE  IN CLSSSES********************************/

class Person{
     constructor(firstName,lastName,age){
          this.firstName = firstName;
          this.lastName = lastName;
          this.age = age;
     }
     //--------- PROTOTYPE ---------- //
     getFullName(){
         console.log( `${this.firstName} ${this.lastName}`);
         return this;
     }
     number(){
        console.log(2);
        return this;
     }
     // --------- NORMAL FUCTION ------ //
     static mess(){
         console.log('This is the message');
     }
}

// let jane = new Person('Jane','Mike',20);
// console.log(jane);

// jane.getFullName().number()

class SportPlayer extends Person{
     //  ---------- METHOD INHERITENCE ---------- //
     constructor(firstName,lastName,age,team,score){
           super(firstName,lastName,age);
           this.team = team;
           this.score = score;
     }

     SportPlayer(){
          console.log('Iam ' + this.firstName + ' ' + this.lastName + ' and i have score ' + this.score + ' goals in ' + this.team);
     }
}

let playerOne = new SportPlayer('Mike','Godian',30,'Man city',30);
console.log(playerOne);
playerOne.SportPlayer();
playerOne.getFullName();





























//
