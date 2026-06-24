/*let js = 'amazing';
console.log('Jonas');
console.log(23);

let firstName = "Jonas";
console.log(firstName);*/


/*true;
false;

let js = true;

console.log(js);

console.log(typeof true);
console.log(typeof false);
console.log(typeof js);
console.log(typeof 23);
console.log(typeof "Jonas");


js = "Yes";

console.log(typeof js);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
*/


/*let age = 30;
age = 31;

const yearOfBirth = 1991;

var job = "Programmer";
job = "Teacher";
*/


/*
//Maths Operators
const now = 2037;

const ageJonas = now-2002;
const ageSarah = now-2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas*2, ageSarah*2);
console.log(ageJonas/10, ageSarah/10);

const firstName = "Jonas";
const lastName = "Litman";
console.log(firstName + " " + lastName);


// Assignment operators
let x = 10+5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=, store the result in a variable
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);
console.log(now - 2002 > now - 2018);
*/

/*

// Operators Precedence -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
const now = 2037;
const ageJonas = now - 2002;
const ageSarah = now - 2018;

console.log(now - 2002 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const avgAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, avgAge);
*/


/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 2002;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

// Refgular Multiline string
console.log('String with \n\
multiple \n\
lines');


// Template literal Multiline string after ES6
console.log(`String
multiple
lines`);

// If you want to use a backtick in a template literal, you can escape it using a backslash (\`), like this:
const message = `This is a backtick: \``;
console.log(message);

// You can also use single quotes or double quotes inside a template literal without escaping them:
const message2 = `This is a single quote: ' and this is a double quote: "`;
console.log(message2);

// You can also use expressions inside template literals, like this:
const a = 5;
const b = 10;
const message3 = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(message3);

*/

/*
// If else 

const age = 15;
const isOldEnough = age>=18;

if (isOldEnough){
    console.log(`Sarah can start driving license`);
}else{
    const yearsLeft = 18 - age;
    console.log(`Sarah can't start driving license. She is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);
*/

/*

// Type Conversion and Coercion

// Type Conversion
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // NaN = Not a Number
console.log(typeof NaN); // NaN is a special value that represents an invalid number. It is of type "number", but it is not a valid numeric value.

console.log(String(23), 23);

// Type Coercion
console.log('I am ' + 23 + ' years old'); // The number 23 is coerced into a string and concatenated with the other strings. Plus operator triggers coercion to strings.

console.log('23' - '10' - 3); // The strings '23' and '10' are coerced into numbers and then subtracted, resulting in 10. Minus operator triggers coercion to numbers.

console.log('23' * '2'); // The strings '23' and '2' are coerced into numbers and then multiplied, resulting in 46.

console.log('23' > '18'); // The strings '23' and '18' are coerced into numbers and then compared, resulting in true.

let n = '1' + 1; // '11' - The number 1 is coerced into a string and concatenated with the string '1', resulting in '11'.
n = n - 1; // 10 - The string '11' is coerced into a number and then 1 is subtracted, resulting in 10.
console.log(n); */


/*

// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}*/

// Equality Operators: == vs. ===

// Strict equality operator (===) checks for both value and type equality, while loose equality operator (==) checks for value equality after performing type coercion if necessary. It is generally recommended to use strict equality (===) to avoid unexpected results due to type coercion.

/*
const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // 23 === 23
    console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else if (favorite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favorite !== 23) console.log('Why not 23?');    

*/

// Boolean Logic and Logical Operators

// The logical operators in JavaScript are used to combine or invert boolean values. The main logical operators are AND (&&), OR (||), and NOT (!).

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired); // false

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}   
*/


// Switch Statement

// The switch statement is used to perform different actions based on different conditions. It is an alternative to using multiple if-else statements when you have a single variable that can take on multiple values.

/*
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}


// The Conditional (Ternary) Operator

// The conditional (ternary) operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.

const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');
*/

// Statements and Expressions

// An expression is a piece of code that produces a value. A statement is a piece of code that performs an action. Expressions can be used as part of statements, but statements cannot be used as part of expressions.

/*
3 + 4; // Expression
1991; // Expression
true && false && !false; // Expression

if (23 > 10) {
    const str = '23 is bigger'; // Statement
}

const me = 'Jonas';
console.log(`I'm ${me}, a ${2037 - 1991} year old teacher!`); // Statement
*/  