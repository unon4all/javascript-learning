'use strict';

//use strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode makes several changes to normal JavaScript semantics:
// 1. Eliminates some JavaScript silent errors by changing them to throw errors.
// 2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
// 3. Prohibits some syntax likely to be defined in future versions of ECMAScript.  
// 4. Strict mode applies to entire scripts or to individual functions. It doesn't apply to block statements enclosed in {} braces, but it does apply to function declarations and expressions within those blocks.
// 5. Strict mode makes eval() safer to use. In strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope.
// 6. Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
// 7. Strict mode makes it easier to write "secure" JavaScript.
// 8. Strict mode changes previously accepted "bad syntax" into real errors.
// 9. Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.

/*

let hasDriversLicense = false;
const passTeset = true;

if (passTeset) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

*/

// Functions
// Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.

/*
function logger(){
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juices with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleJuice);
console.log(appleOrangeJuice);

// Fucntion declaration vs. expression
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

// Arrow function
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

// Functions calling other functions

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juices with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));
*/

// Reviewing functions
/*
const calcAge = (birthYear) => {
    return 2037 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));        
*/

//Arrays

/*
const friends_array = ["MJ","Peter","Joe"];
console.log(friends_array);

const years = new Array(1991, 1992, 2008, 2020);

console.log(friends_array[0]);

console.log(years);

// array expect an expression so we can insert different datatypes along with different array also. 
const jonas = ["Jonas","J", 2037-2022,"teacher",friends_array];

console.log(jonas)

// Exercise 

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const year = [1990,1967, 2002, 2010, 2018];

const age1 = calcAge(year[0]);
console.log(age1);
*/


// Array Operations.  
/*
const friends_array = ["MJ","Peter","Joe"];

//Add elements 
const new_length = friends_array.push("JJ","LJ","PJ");  // returns the length of the array. 

console.log(friends_array, new_length);

// Add elemnt to the begining of the array. 
friends_array.unshift("Apple");

console.log(friends_array);

//Remove elements
friends_array.pop() //remove the last element of the array. Returns the elements that is removed. 

console.log(friends_array);

// Remove first element at array. 
friends_array.shift()

console.log(friends_array);

// indexOf = elements. if not then return = -1

// More modern method in ES6. array.includes(), returns true and false. 
*/


/* Write your code below. Good luck! 🙂 */

/*

const bills = [125,555,44];


function calcTip(bill){
    if (bill>50 && bill<300){
        const tip = (15/100)*bill;
        return tip;
    }else{
        const tip = (20/100)*bill;
        return tip;
    }
}

const tips = new Array();
const totals = new Array();


tips.push(calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]));

totals.push((bills[0]+tips[0]),(bills[1]+tips[1]),(bills[2]+tips[2]));

// console.log(tips, totals);

console.log(calcTip(bills[1]));

*/

// Creating Objects. 

/*
const jonas = {
    firstName:'jonas',
    lastName:'lj',
    job:'teacher',
    age:2037-2002,
    friends:['MJ','PJ','RJ']
};

console.log(jonas);

// Dot notation to get an object. 

console.log(jonas.age);

console.log(jonas['friends']);

// Key naming and integration. 

const keyName = 'Name';

// we can put any expression inside the square brackets. 

console.log(jonas['first'+ keyName]);
console.log(jonas['last'+keyName]);


const interestedIn = prompt('What do you ant to know about Jonas?');

console.log(interestedIn);

// Dot notation looks for that keyword inside the object. While square bracket notation works as an index. 


if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}else{
    console.log(`Wrong request!!!`);
}


//Add a new data into the object. 

jonas.location = 'Portugal';
jonas["twitter"] = "@jonas";
console.log(jonas);


// Challenge

// Jonas has 3 friends. and his best friend is called MJ. 

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);

*/


//Objects (key value pair) Methods  

/*
const jonas = {
    firstName:'jonas',
    lastName:'lj',
    job:'teacher',
    birthYear:2002,
    friends:['MJ','PJ','RJ'],
    hasDriverLicence:false,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // using this keyword. 

    // Calling the function multiple times will take computation power, which is not a powerful technique. So better to store it inside the object. 

    // calcAge: function(){
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        console.log(this);
        return this.age;
    },

    getSummary: function (){
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriverLicence ? 'a':'not'} driver's license.`
    }
};


// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas['calcAge'](jonas.birthYear));

console.log(jonas.calcAge());

console.log(jonas.age);

// Challenge = Jonas is a 46 year old teacher, and he has a driver's licence. 

console.log(jonas.getSummary());
*/




/*Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).
Your tasks:
For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.
Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

👋 OPTIONAL: You can watch my solution in video format in the next lecture

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

/*
const mark = {
    fullName:"Mark Miller",
    mass:78,
    height:1.69,

    calcBMI: function(){
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
};

const john = {
    fullName:"John Smith",
    mass:92,
    height:1.95,

    calcBMI: function(){
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
};


if (mark.calcBMI()>john.calcBMI()){
    console.log(`${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})!`);
}else {
    console.log(`${john.fullName} (${john.bmi}) is higher than ${mark.fullName} BMI (${mark.bmi})!`);
}
*/



//Loops

// for loops keeps running while condition is TRUE. 

// for (let rep = 1; rep <=10; rep++){
//     console.log(`Lifting the weight repetition ${rep}`);
// }

// Looping through Array. 

// const jonas = [
//     'jonas',
//     'lj',
//     'teacher',
//     2002,
//     ['MJ','PJ','RJ']
// ];

// const typeOfElements = new Array();


// for(let i = 0; i<jonas.length;i++){
//     console.log(`The items in the array are ${jonas[i]}`);
//     typeOfElements.push(typeof(jonas[i]));
//     console.log(`The type of element at ${i} is ${typeOfElements[i]}`);
// }


// const years = [1991, 2007, 1969,2020];


// const age = new Array();

// for (let i = 0; i<years.length;i++){
//     const calcAge = 2037 - years[i];
//     age.push(calcAge);
// }

// console.log(age);


// Continue and Break statements. 

// Continue = exit the current iteration and continue. 
// Break = completely termintate the whole loop. 

// const jonas = [
//     'jonas',
//     'lj',
//     'teacher',
//     true,
//     2002,
//     ['MJ','PJ','RJ']
// ];

// for(let i = 0; i<jonas.length;i++){

//     // if(typeof(jonas[i]) !== 'string') continue;

//     if(typeof(jonas[i]) === 'number') break;

//     console.log(jonas[i], typeof(jonas[i]));
// }


// Loop backward. 

// for (let i = jonas.length-1; i>=0; i--) {
//     console.log(`This array goes backwards - ${i} - ${jonas[i]}`);
// }


// Loop inside a Loop. 

// 3 different exercises , we want to repeat it 5 times each of them. 

// for (let exercises = 1; exercises<=3; exercises++) {

//     console.log(`-------- Exercise started = ${exercises}`);

//     for (let rep = 1; rep<=5; rep++) {
//         console.log(`The number of repetition is ${rep}`);
//     }
// }

// while Loop. 



// for (let rep = 1; rep <=3; rep++){
//     console.log(`Lifting the weight repetition ${rep}`);
// }

// let rep = 1;

// console.log(`This is while Loop`);

// // while(rep<4){
// //     console.log(`Lifting the weight repetition ${rep}`);
// //     rep++;
// // }

// let dice = Math.trunc(Math.random() * 6)+1;
// console.log(dice);


// while(dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6)+1;

//     if(dice === 6){
//         console.log(`Loop is about to end....`)
//     }
// }


/*
//CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
Create an array called bills containing all 10 test bill values.
Create empty arrays for the tips and the totals (tips and totals)
Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:
Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:
First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.
To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
Call the function with the totals array.
*/

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];


// function calcTip(bill){
//     if (bill>50 && bill<300){
//         return (15/100)*bill;
         
//     }else{
//         return (20/100)*bill;
//     }
// }


// for (let i = 0;i<bills.length;i++){
//     const bill = bills[i]
//     const tip = calcTip(bill);
//     tips.push(tip);
//     const total = tip+bill;
//     totals.push(total);
// }


// console.log(totals);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

function calcTip(bill) {
  return bill > 50 && bill < 300
    ? bill * 0.15
    : bill * 0.20;
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);

  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(tips);
console.log(totals);

function calcAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

const average = calcAverage(totals);
console.log(`Average: ${average}`);
