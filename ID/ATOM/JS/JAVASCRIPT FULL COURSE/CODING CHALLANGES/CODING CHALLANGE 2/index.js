/* ********** CODING CHALLANGE 2 ******************/

/*
John and mike both play basketball in different teams. In the latest 3 games,
John's team scored 116, 94 and 123 points.

1. Calculate the avarage score for each teams
2. Decide which teams wins in avarage (highest avarage
score), and print the winner to the console.
Also include the avarage score in the output.
3. Then change the scores to show different winners.
Don't forger to take into account there might be a
draw (the same avarage score)

4. EXTRA: Mary also plays basketball, and her team scored
97,134 and 105 points. like before, log the avarage winner
to the console. HINT: you will need the && operator to take
the decision .
5. like before change the scores to generate different winners,
keeping in mind there might be draws.

*/







// QUESTION: 1
var johnsTeamScore , mikesTeamScore , maryTeamScore;
johnsTeamScore = 890  + 120 + 103;
mikesTeamScore = 116 + 94 + 123;
marysTeamScore = 97 + 134 + 105;

var johnsAvarage = (johnsTeamScore) / 3;
console.log(johnsAvarage);

var mikesAvarage = (mikesTeamScore) / 3;
console.log(mikesAvarage);

// QUESTION: 2
if(johnsAvarage > mikesAvarage){
    console.log('John\'s team wins with ' + johnsAvarage + ' points');
}
else if( mikesAvarage > johnsAvarage){
   console.log('Mike\'s team wins with ' + mikesAvarage + ' points');
}
else {
  console.log('There is a draw');
}




// QUESTION: 4

var marysAvarage = (marysTeamScore) / 3;
console.log(marysAvarage);

if(marysAvarage > mikesAvarage && marysAvarage > johnsAvarage){
    console.log('Mar\'s team wins with ' + marysAvarage + ' points');
}
else if (mikesAvarage > marysAvarage && mikesAvarage > johnsAvarage) {
     console.log('mike\'s team wins with ' + mikesAvarage + ' points');
}
else if (johnsAvarage > marysAvarage && johnsAvarage > mikesAvarage){
     console.log('john\'s team wins with ' + johnsAvarage + ' points');
}
else {
     console.log('There is a draw');
}
