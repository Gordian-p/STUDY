let sentence = "The dog chased the cat.";
let regex = /the/;

{
// USING THE TEST METHOD
let myStirng = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myStirng);
// console.log(result);
}


{
//MATCH LITERAL STRING
// NOTE: REGEX IS K SENSETIVE
let waldoIsHiding = "Somewher Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);
// console.log(result);
}

{
//MATCH A LITERAL STRING WITH DIFFERENT POSSIBILITES
let perString = "James has a pet dog.";
let petRegex = /cat|dog|bird|fish/; // NOTE: these symboy | mean or
let result = petRegex.test(perString);
// console.log(result);
}

{
//IGNORE CASES WHILE MATCHING
let myStirng = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // NOTE: i flag will igoner cases
let result = fccRegex.test(myStirng);
// console.log(result);
}

// -------------------------------------- //
{
//EXTRACT MATCHES
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
// console.log(result);
}

{
//FIND MORE THAN THE FIRST MATCH
let testStr = "Repeat,Repeat,Repeat";
let ourRegex = /Repeat/g; // NOTE: g flag will find every singel occurance of the word repeat and return them in array array;
let result1 = testStr.match(ourRegex);
// console.log(result1);

let twinklestar = "Twinkle,twinkle,little star";
let starRegex = /twinkle/ig;
let result = twinklestar.match(starRegex);

// console.log(result);
}

{
// MATCH ANYTHING WITH WILDCARD PERIOD
let humstr = "I'll hum a song";
let hugstr = "Bear hug";
let huRegx = /hu./; // NOTE: period sign mean it can be any letter
var result1 = humstr.match(huRegx); // return ["hum"];
// console.log(result1);
var result2 = hugstr.match(huRegx); // return ["hug"]
// console.log(result2);


let exmpleStr = "Let's have fun with regular expression!";
let unRegex = /.un/;
let result3 = unRegex.test(exmpleStr);
// console.log(result3);
}

{
// MATCH SINGLE CHARACTER WITH MULTIPLE POSSIBILITES
let bgRegex = /b[aiu]g/; // // NOTE: here it means it can be bag big or bug ;

let quoteSample = "Beware of bugs in the above code: I have only provide it correct";
let vowelRegex = /[a,e,i,o,u]/ig;
let result = quoteSample.match(vowelRegex);

// console.log(result);
}


{
//  MATCH LETTERS OF THE ALPHABET
let quoteSample = "The quick brown fox jump over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);

// console.log(result);
}

{
// MATCH NUMBERS AND LETTERS OF THE ALPHABET
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[2-6h-s]/ig;
let result = quoteSample.match(myRegex);

// console.log(result);
}

{
//MATCH SINGLE CHARACTERS NOT SPECIFIED
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/ig; // NOTE: these sign ^ means not iclude this in matching
let result = quoteSample.match(myRegex);

// console.log(result);
}

{
// MATCH CHARACTER THAT OCCUR ONE OR MORE TIMES
let difficultSpelling = "Mississippis";
let myRegex = /s+/g;  // NOTE:  plus sign + means that it will match two same element
let result = difficultSpelling.match(myRegex);

// console.log(result); // return ["ss","ss","s"]
}

{
// MATCH CHARCTER THAT OCCUR ZERO OR MORE TIMES
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;// NOTE:   star sign * means that it will match more than two element
// console.log(soccerWord.match(goRegex));// Returns ["goooooooo"];

// console.log(gPhrase.match(goRegex)); // Return ["g"];
// console.log(oPhrase.match(goRegex)); // Return null

let chewieQuote = "Aaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
         // OR //
// let chewieRegex = /a*/i;
let result = chewieQuote.match(chewieRegex);
// console.log(result);
}

{
//FIND CHARACTER WITH LAZY MATCHING
let string = "titanic";
let regex = /t[a-z]*i/; // return titani  these is gridy match
// let regex = /t[a-z]*?i/; // return ti  these is lazy match
let result1 = string.match(regex);
// console.log(result1);

let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*>/;
let myRegex = /<.*?>/;
let result2 = text.match(myRegex);

// console.log(result2);
}

{
//FIND OR MORE CRIMINALS IN A HUNT
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/;

let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);
}

{
// MATCH BEGINNING STRING PATTERNS
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // NOTE: here ^ these symbol means does these match at the begining at the string and it will return true or false;
let result = calRegex.test(rickyAndCal);
// console.log(result);s
}

{
//MATCH ENDING STRING PATTERNS
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // NOTE: here ^ these symbol means does these match at the ending of the string and it will return true or false;
let result = lastRegex.test(caboose);
// console.log(result);
}

{
// MATCH ALL LETTERS AND NUMBERS
let quoteSample = "The five boxing wizards jump quickly 30.";
let alphabetRegexV2 = /\w/g; // NOTE: these symbol will check and return capital A-Z lower case a-z 0-9 and underscore
let result = quoteSample.match(alphabetRegexV2);
// console.log(result);
}

{
//MATCH EVERYTHING BUT NOT LETTERS AND NUMBERS
let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /[^\w]/g; // NOTE: these is not a right way
let nonAlphabetRegex = /\W/g; // NOTE: capital W symbol will check and ignore all capital A-Z lower case a-z 0-9 and underscore
let result = quoteSample.match(nonAlphabetRegex).length;
// console.log(result);

let result2 = quoteSample.match(nonAlphabetRegex);
// console.log(result2);
}

{
//MATCH ALL NUMBERS
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // NOTE: small letter d will match all numbers
let result = numString.match(numRegex);
// console.log(result);

let result2 = numString.match(numRegex).length;
// console.log(result2);
}

{
//MATCH ALL NON-NUMBERS
let numString = "Your sandwich will be $5.00";
let numRegex = /\D/g; // NOTE: capital letter D will match all non numbers
let result = numString.match(numRegex);
// console.log(result);

let result2 = numString.match(numRegex);
// console.log(result2);
}


{
//RESTRICT POSSIBLE USERNAME
/*
1) If ther are numbers, they must be at the end.
2) Letters can be lowercase and uppercase.
3) At least two character long. Two-letter names can't have numbets.
}
*/

let username = "JackOfAllTrades3920";
let userCheck = /^[A-Za-z]{2,}\d*$/; // NOTE: these sign {} used to sate range of the user input;
let result = userCheck.test(username);
// console.log(result);
}


{
//MATCH WHITE SPACE
let sample = "Whitespace is important in separating worlds.";
let countWhiteSpace = /\s/g; // NOTE: small letter s will return all spaces in that sentence;
let result = sample.match(countWhiteSpace);
// console.log(result);
}

{
//MATCH NON-WHITESPACE CHARACTERS
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\S/g; // NOTE: capital letter s will return all now white-spaces in that sentence;
let result = sample.match(countWhiteSpace);
// console.log(result);
}

{
//SPECIFY UPPER AND LOWER NUMBER OF MATCHES
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // NOTE: her will return true if h will going to much between three to six letters;  and dont forget there is a white space there and that why its return true;
let result = ohRegex.test(ohStr);

// console.log(result);
}

{
//SPECIFY ONLY THE LOWER NUMBER OF MATCHES
let haStr = "Hazzzzah";
let haRegex = /z{4,}/;
let result = haRegex.test(haStr);

// console.log(result);
}

{
// SPECIFY EXACT NUMBER OF MATCHES
let timStr = "Timmmmber";
let timeRegex = /Tim{4}ber/;
let result = timeRegex.test(timStr);

// console.log(result);
}

{
// CHECK FOR ALL OR NONE
let favWord = "favorite";
let favRegex = /favou?rite/; // NOTE: question mark it means that a certain letter is an optional it can be there or not;
let result = favRegex.test(favWord);

// console.log(result);
}

{
//POSITEVE AND NEGATIVE LOOKAHEAD
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/; // NOTE: here it will check if q is followed with letter q and if is true it will return only q;
let qRegex = /q(?!u)/; // NOTE: here it will check if q is not followed with letter q and if is true it will return only q;
// console.log(quit.match(quRegex)); // Return ["q"];
// console.log(noquit.match(qRegex)); // Return ["q"];

let sampleWord = "pabcDe.33";
let pwRegex = /p(?=\w{5})(?=\D*\d{2}$)/g; // NOTE: ? sign also mean look ahead
let result = pwRegex.test(sampleWord);
// console.log(result);

// console.log(sampleWord.match(pwRegex)); // return [""]


// EXMPLE 2
let a = "a13bcd....33";
let b = /a(?=\w{5})(?=\D*)(?=\d{2})/g;
// console.log(a.match(b));
}

{
//  REUSE PATTERNS USING CAPTURE GROUPS
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/; // NOTE: here it is the same as writting /(\w+)\s\(\w)/;
// console.log(repeatRegex.test(repeatStr)); // Return true
// console.log(repeatStr.match(repeatRegex)); // Return ["change regex", "regex"]; // NOTE: the first index in these array is the capture group on which it is "regex";

let repeatNum = "422 422 422";
// let reRegex = /(\d+)\s\1\s\1/;  // NOTE: here there is no any range;
let reRegex = /^(\d{2,3})\s\1\s\1$/; // NOTE: here u have set the range;
// let reRegex = /^(\d{2,3})\s\d{2,3}\s\d{2,3}$/; // NOTE: use these method if u want different value
let result = reRegex.test(repeatNum);
// console.log(result);
// console.log(repeatNum.match(reRegex));
}

{
// USE CAPTURE GROUPS TO SEARCH AND REPLACE
let wrongText = "The sky is silver silver.";
let silverRegex = /silver/;
let result1 = wrongText.replace(silverRegex,"blue");
// console.log(result1);

var result2 = "Code Camp".replace(/(\w+)\s(\w+)/,'$2 $1'); // NOTE: dola sign mean the captual group so by writting $1 means the first captual group;
// console.log(result2);

}

{
// REPLACE MORE THAN TWO ITEMS
let huhText = "This sandwich is good good.";
let fixRegex = /good/g;
let replaceText = "bad";
let result = huhText.replace(fixRegex,replaceText);
// console.log(result);
}

{
// REMOVE WHITESPACE FROM START AND END;
let hello ="    hello, World!   ";
// let wsRegex = /(\s+)(\D+)(\s+)(\D+)(\s+)/g;
let wsRegex = /^\s+|\s+$/;
let result = hello.replace(wsRegex,'');
console.log(result);

}
