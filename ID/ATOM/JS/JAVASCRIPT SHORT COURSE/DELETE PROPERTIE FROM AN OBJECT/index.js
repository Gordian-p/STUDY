let jane = {
    firstName: 'Jane',
    lastName: 'Smith',
    yearOfBirth: 2000,
    isMarriage: true
}

delete jane.firstName;
console.log(jane);

// OR //
delete jane['yearOfBirth'];
console.log(jane);
