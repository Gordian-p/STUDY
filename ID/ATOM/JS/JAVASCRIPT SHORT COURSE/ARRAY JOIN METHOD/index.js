const names = ['Jane','John','Mike','Smith'];

// -------- JOIN ----------- //
let johnNames = names.join(' + ');
// NOTE: if us dont but an argument it will work but it will join with string
// Eg : 'Jane','John','Mike','Smith

console.log(names);
console.log(johnNames);

// -------- SPLIT ----------- //
let namesArray = johnNames.split(' + ');
console.log(namesArray);
