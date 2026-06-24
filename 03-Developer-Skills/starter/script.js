// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it


// const calcTempAmplitude = function (temps) {

//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0;i<temps.length; i++) {

//         const curTemp = temps[i];

//         if (typeof(curTemp) !== 'number') continue;

//         if(curTemp>max){
//             max = curTemp;
//         }

//         if(curTemp<min){
//             min = curTemp;
//         }
//     }

//     console.log(max,min);
//     return max-min;
// };

// calcTempAmplitude([3,4,5,6,7]);

// const amplitude = calcTempAmplitude(temperatures);

// console.log(amplitude);

// Two arrays to merge and use the same function to get the same result. 

// const calcTempAmplitudeNew = function (t1, t2) {


//     const temps = t1.concat(t2);

//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0;i<temps.length; i++) {

//         const curTemp = temps[i];

//         if (typeof(curTemp) !== 'number') continue;

//         if(curTemp>max){
//             max = curTemp;
//         }

//         if(curTemp<min){
//             min = curTemp;
//         }
//     }

//     console.log(max,min);
//     return max-min;
// };

// calcTempAmplitudeNew([3,4,5,6,7],[4,7,8,9,1]);

// const amplitude = calcTempAmplitudeNew(temperatures);

// console.log(amplitude);




// const measureKelvin = function () {
//     const measurement = {
//         type:'temperature',
//         unit:'celcius',

//         // FIX the bug. 
//         value:Number(prompt('Degrees Celcius:'))
//     }

//     console.log(measurement);
//     console.table(measurement);

//     console.log(measurement.value);
    

//     const kelvin = measurement.value + 273;

//     return kelvin;
// }

// console.log(measureKelvin())




// const calcTempAmplitudeNew = function (t1, t2) {


//     const temps = t1.concat(t2);

//     let max = 0;
//     let min = 0;

//     for (let i = 0;i<temps.length; i++) {

//         const curTemp = temps[i];

//         if (typeof(curTemp) !== 'number') continue;

//         debugger; // opens the debugger tool by default. 

//         if(curTemp>max){
//             max = curTemp;
//         }

//         if(curTemp<min){
//             min = curTemp;
//         }
//     }

//     console.log(max,min);
//     return max-min;
// };

// calcTempAmplitudeNew([3,4,5,6,7],[4,7,8,9,1]);

// const amplitude = calcTempAmplitudeNew(temperatures);

// console.log(amplitude);





// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/


// const temp = [17, 21, 23];


// function printForecasts(arr) {

//     let foreCastText = "";


//     for (let i=0;i<arr.length;i++) {
//         foreCastText += `... ${arr[i]}\u00B0C in ${i+1} day`;
//     }
    
//     console.log(foreCastText);
// }



// printForecasts(temp);

// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/


const hours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

function workLoad(arr) {
    
    let totalHours = 0,
      maxHoursWork = arr[0],
      noOfDaysWorked = 0;

    const n = arr.length;

    // total hours

    for(let i=0;i<n;i++){

        //total hours
        totalHours = arr[i]+totalHours;

        //No of days worked
        if(arr[i]!== 0){
            noOfDaysWorked++;
        }

        // Max work hours
        if(maxHoursWork<arr[i]){
            maxHoursWork = arr[i];
        }
    }

    const avgHours = totalHours/noOfDaysWorked;

    // full time or not
    const fullWeekWork = totalHours >= 35 ;

    return {
    totalHours,
    avgHours,
    maxHoursWork,
    noOfDaysWorked,
    fullWeekWork,
  };

    return workStats;

}

console.log(workLoad(hours));