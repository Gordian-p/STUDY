/* ************************ FUNCTION ***************************/

// NOTE: if a code and you want to run a lot of time and there is how the funtion
//             came it uses


function calculateAge (birthYear){
        return 2018 - birthYear;
}
var ageJohn = calculateAge(1999);
var ageMIke = calculateAge(1945);
var ageJane = calculateAge(1955);
console.log(ageJohn,ageMIke,ageJane);

function yearUntilRetirement(year,firstname) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0){
      console.log(firstname + ' retires in ' + retirement + 'years');
    }
    else {
       console.log(firstname + ' is already retired');
    }
}
yearUntilRetirement(1990,'john');
yearUntilRetirement(1960,'jane');
yearUntilRetirement(1950, 'mike');
